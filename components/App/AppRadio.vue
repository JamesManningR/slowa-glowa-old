
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
  display: inline-flex;
  align-items: center;
  gap: .4em;


  &__input {
    display: inline-block;
    border: variables.$border-width black solid;
    background-color: white;
    padding: variables.$padding-x;
    border-radius: 50%;
    @include variables.box-shadow;
  }

  &__label {
    display: inline-block;
    height: 100%;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: calc(50% - math.div(variables.$padding-x, 1.5));
      left: math.div(variables.$padding-x, 2);
      height: calc(variables.$padding-x * 1.35);
      width: calc(variables.$padding-x * 1.35);
      border-radius: 50%;
      transition: transform variables.$animation-bounce-curve .25s, opacity variables.$animation-bounce-curve .25s;
      transform: scale(0);
      opacity: 0;
      background-color: black;
    }
  }

  &__input {
    &:hover, &:focus {
      + .app-radio__label {
        &::before {
          opacity: .5;
          transform: scale(.55);
        }
      }
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