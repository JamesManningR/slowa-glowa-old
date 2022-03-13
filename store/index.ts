import { defineStore } from "pinia";

export const useStore = defineStore("orientation", {
  state: () => ({
      pitch: 0,
      yaw: 0,
      roll: 0,
    }
  ),

  actions: {
    setOrientation(payload: { pitch: number; yaw: number; roll?: number }) {
      this.pitch = payload.pitch;
      this.yaw = payload.yaw;
      if (payload.roll) {
        this.roll = payload.roll;
      }
    }
  }
});
