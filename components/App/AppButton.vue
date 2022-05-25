<template lang="pug">
button.app-btn
  slot
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@use "@scss/variables";

.app-btn {
  border: variables.$border-width black solid;
  background-color: white;
  padding: variables.$padding-y variables.$padding-x;
  text-align: center;
  cursor: pointer;
  @include variables.box-shadow;

  &:hover, &:focus {
    transition: 
      transform variables.$animation-bounce-curve .25s,
      filter variables.$animation-bounce-curve .25s;
    transform: translate(-1px, -1px);
    @include variables.box-shadow($x-offset: 1px, $y-offset: 1px);
  }

  &:active {
    background-color: black;
    color: white;
  }
}
</style>