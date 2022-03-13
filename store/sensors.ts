import { defineStore } from "pinia";

export const useSensorsStore = defineStore("sensors", {
  state: () => ({
      pitch: 0,
      yaw: 0,
      roll: 0,
      abs: false
    }
  ),

  actions: {
    setOrientation(payload: { pitch: number; yaw: number; roll: number, abs: boolean }) {
      this.pitch = payload.pitch;
      this.yaw = payload.yaw;
      this.roll = payload.roll;
      this.abs = payload.abs;
    }
  }
});
