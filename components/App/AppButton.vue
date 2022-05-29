<template lang="pug">
button.app-btn
  slot
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@use "@scss/variables";

.app-btn {
  border: variables.$border-width variables.$col-black solid;
  background-color: variables.$col-white;
  padding: variables.$padding-y variables.$padding-x;
  text-align: center;
  cursor: pointer;
  @include variables.box-shadow;

  &:hover, &:focus {
    transition: variables.$input-transition;
    transform: translate(variables.$input-hover-offset-x, variables.$input-hover-offset-y);
    @include variables.box-shadow(
      $x-offset: variables.$input-hover-offset-x * -1,
      $y-offset: variables.$input-hover-offset-y * -1,
    );
  }

  &:focus {
    box-shadow: variables.$input-focus-shadow;
  }

  &:active {
    background-color: variables.$col-black;
    color: variables.$col-white;
    transform: translate(variables.$btn-pressed-offset-x, variables.$btn-pressed-offset-y);
    transition: 
      transform variables.$animation-bounce-curve .1s,
      filter variables.$animation-bounce-curve .25s;
    @include variables.box-shadow(
      $x-offset: variables.$btn-pressed-offset-x * -1,
      $y-offset: variables.$btn-pressed-offset-y * -1
    );
  }
}
</style>