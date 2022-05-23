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
  padding: .3em .5em;
  text-align: center;
  cursor: pointer;

  &:hover, &:focus {
    background-color: grey;
  }

  &:active {
    background-color: black;
    color: white;
  }
}
</style>