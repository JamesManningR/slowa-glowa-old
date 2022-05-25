<template lang="pug">
.app-input-submit(:class="$attrs.class")
  label.app-input-submit__label(v-if="$slots.default" :for="id") 
    slot
  
  .app-input-submit__inputs
    AppInput.app-input-submit__input(
      v-model="value"
      :id="id"
      :type="$attrs.type || 'text'"
      @keydown.enter.prevent="emit('submit', value)"
    )
    AppButton.app-input-submit__submit(
      @click.prevent="emit('submit', value)"
      type="submit"
    )
      slot(name="btn") Submit
</template>

<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits<{
  (e: "submit", value: string): void;
  (e: "update:modelValue", value: string): void;
}>();

const props = defineProps({
  modelValue: String,
  id: String
});

const value = computed<string>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value)
  }
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<style lang="scss">
@use "@scss/variables";

.app-input-submit {
  display: flex;

  &__label {
    align-self: center;
    margin-right: .25em;
  }

  &__inputs {
    display: flex;
    @include variables.box-shadow;
  }

  &__submit {
    border-left: 0;
  }

  &__input, &__submit {
    box-shadow: none;
  }
}
</style>