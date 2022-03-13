<template>
table
  tr
    th Pitch
    td {{ pitch }}
  tr
    th yaw
    td {{ yaw }}
  tr
    th roll
    td {{ roll }}
  tr
    th abs
    td {{ abs }}
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app';
import { onBeforeMount, onDeactivated } from 'vue';
import { storeToRefs } from 'pinia';  
import { useSensorsStore } from '../store/sensors';

export default defineNuxtComponent({
  async setup() {
    const store = useSensorsStore();
    
    const { pitch, yaw, roll, abs } = storeToRefs(store);

    const handleDeviceOrientation = (evt: DeviceOrientationEvent) => {
      const absolute = evt.absolute;
      const alpha = evt.alpha; // In degree in the range [-360,360]
      const beta = evt.beta; // In degree in the range [-180,180]
      const gamma = evt.gamma; // In degree in the range [-90,90]


      store.setOrientation({
        pitch: beta,
        yaw: alpha,
        roll: gamma,
        abs: absolute
      });
    }

    onBeforeMount(async () => {
      const DeviceOrientationEvent: any = window.DeviceOrientationEvent;
      let permissionState = "awaiting";

      if (DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === "function") {
        permissionState = await (DeviceOrientationEvent as any).requestPermission();
      } else {
        permissionState = "granted";
      }

      window.addEventListener("deviceorientation", handleDeviceOrientation);
    });

    onDeactivated(() => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    });

    return {
      pitch, 
      yaw,
      roll,
      abs
    };
  }
})


</script>

<style scoped>

</style>