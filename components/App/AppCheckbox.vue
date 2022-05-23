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
.app-checkbox
  input.app-checkbox__input(
    :id="id"
    v-model="value"
    v-bind="$attrs"
    type="checkbox"
  )

  label.app-checkbox__label(v-if="$slots.default" :for="id") 
    slot
</template>

<style lang="scss">
@use "@scss/variables";

.app-checkbox {
  display: flex;
  align-items: center;

  &__input {
    display: inline-block;
    border: variables.$border-width black solid;
    padding: 0.5em 0.5em;
    &:checked {
      background-color: #232323;
    }
  }
}
</style>