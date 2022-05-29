<script setup lang="ts">
const { modelValue } = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: "",
    required: true,
  }
});

const emit = defineEmits({
  'update:modelValue': Boolean
})

const value = computed({
  get: () => modelValue,
  set: (value) => emit("update:modelValue", value)
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template lang="pug">
label.app-checkbox
  input.app-checkbox__input(
    :id="id"
    v-model="value"
    v-bind="$attrs"
    type="checkbox"
  )

  span.app-checkbox__label
    slot
</template>

<style lang="scss">
@use "sass:math";
@use "@scss/variables";

.app-checkbox {
  position: relative;
  display: flex;
  align-items: center;
  gap: .4em;

  &__input {
    display: inline-block;
    border: variables.$border-width variables.$col-black solid;
    padding: variables.$padding-x;
    background-color: variables.$col-white;
    @include variables.box-shadow;
  }

  &__label {
    &::before {
      position: absolute;
      top: calc(50% - math.div(variables.$padding-x, 1.5) + (variables.$border-width * .35));
      left: calc(math.div(variables.$padding-x, 2) + (variables.$border-width * .35));
      content: "";
      display: inline-block;
      width: variables.$padding-y * 1.8;
      height: variables.$padding-y * 1.8;
      background-color: #000;
      opacity: 0;
      transform: scale(0);
      transition: variables.$input-transition;
    }
  }


  &__input {
    &:hover, &:focus {
      + .app-checkbox__label {
        &::before {
          opacity: .5;
          transform: scale(.55);
        }
      }
    }

    &:focus {
      box-shadow: variables.$input-focus-shadow;
    }
  }

  &__input:checked + &__label  {
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>