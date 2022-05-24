
<script setup lang="ts">

</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template lang="pug">
label.app-radio
  input.app-radio__input( type="radio" v-bind="$attrs")
  span.app-radio__label
    slot
</template>

<style lang="scss">
@use "sass:math";
@use "@scss/variables";

.app-radio {
  display: inline-block;
  position: relative;
  height: min-content;

  &__input {
    display: inline-block;
    border: variables.$border-width black solid;
    padding: variables.$padding-x;
    border-radius: 50%;
  }

  &__label {
    display: inline-block;
    height: 100%;
  }

  &__input:checked + &__label  {
    &::before {
      animation: grow-bounce ease .25s;
      content: "";
      display: inline-block;
      height: calc(variables.$padding-x * 1.35);
      width: calc(variables.$padding-x * 1.35);
      position: absolute;
      top: calc(50% - math.div(variables.$padding-x, 1.5));
      left: math.div(variables.$padding-x, 2);
      border-radius: 50%;
      background-color: black;
    }
  }

  @keyframes grow-bounce {
    0%{
      transform: scale(0);
    }

    50%{
      transform: scale(1.2);
    }

    75%{
      transform: scale(0.9);
    }

    100%{
      transform: scale(1);
    }

  }
}
</style>