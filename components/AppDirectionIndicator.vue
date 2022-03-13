<template lang="pug">
.direction-indicator {{ direction }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useSensorsStore } from "../store/sensors";

export default defineComponent({
  setup () {
    const sensors = useSensorsStore();

    const { roll } = storeToRefs(sensors);

    const direction = computed(() => {
      // normalise the roll from [-90 to 90] to [0 to 360]
      const rollDeg = (roll.value + 90) % 360;

      return rollDeg;
    });

    return {
      direction
    }
  }
})
</script>

<style scoped>

</style>