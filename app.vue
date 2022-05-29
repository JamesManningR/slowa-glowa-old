<template lang="pug">
.app
  header.app-header
    h1.h1 Słowa Głowa

  FormCreatePack

    //- <AppDebug />
    //- <AppDirectionIndicator />
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@use "@scss/variables";
@use "@scss/functions";

.app {
  &-header {
    background-color: variables.$col-primary;
    color: functions.color-contrast(variables.$col-primary);
  }

  .title {
    font-size: 2em;
    font-weight: bold;
  }

  .subtitle {
    font-size: 1.75em;
    font-weight: bold;
  }
}
</style>