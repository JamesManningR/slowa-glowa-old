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
  padding: variables.$padding-x variables.$padding-y;
  text-align: center;
  cursor: pointer;
  box-shadow: variables.$box-shadow;

  &:hover, &:focus {
    background-color: grey;
  }

  &:active {
    background-color: black;
    color: white;
  }
}
</style>