<template lang="pug">
.pack-card(:style="{ 'background-color': pack.color, 'color': letterColor }")
  .pack-card__body
    h3 {{ pack.name }}

</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  pack: Packs.Pack,
}>();

const cardColors = computed(() => {
  // Seperate color into r, g, b int values
  const [r, g, b] = props.pack.color
    .slice(1)
    .match(/.{2}/g)!
    .map(x => parseInt(x, 16));

  return {
    r,
    g,
    b
  };
});

const letterColor = computed(() => {
  // Calculate readable letter color
  const yiq = (
    (cardColors.value.r * 299)
    + (cardColors.value.g * 587)
    + (cardColors.value.b * 114))
    / 1000;
  return (yiq >= 128) ? "#000000" : "#ffffff";
});
</script>

<style lang="scss">
.pack-card {
  display: flex;
  height: 4em;

  .pack-card__body {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
}
</style>