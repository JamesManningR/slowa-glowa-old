<template>
  <div>
    <h1>{{ number }}</h1>

    <table>
      <tr>
        <th>
          Pitch
        </th>
        <td>
          {{ pitch }}
        </td>
      </tr>
      <tr>
        <th>
          yaw
        </th>
        <td>
          {{ yaw }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app';
import { ref, onBeforeMount, onDeactivated } from 'vue';
import { storeToRefs } from 'pinia';  
import { useStore } from '../store';
  

export default defineNuxtComponent({
  async setup() {
    const store = useStore();
    
    const { pitch, yaw } = storeToRefs(store);
    const number = ref(0)

    const handleDeviceOrientation = (evt: DeviceOrientationEvent) => {
      const alpha = evt.alpha; // In degree in the range [-360,360]
      const beta = evt.beta; // In degree in the range [-180,180]

      store.setOrientation({
        pitch: beta,
        yaw: alpha,
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
      number,
      pitch, 
      yaw,
    };
  }
})


</script>

<style scoped>

</style>