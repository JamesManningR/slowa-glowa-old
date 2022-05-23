<template lang="pug">
input.app-input(v-model="value")
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: String
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const value = computed<string>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  }
});
</script>

<style lang="scss">
@use "@scss/variables";

.app-input {
  border: variables.$border-width black solid;
  padding: .3em .5em;
}
</style>