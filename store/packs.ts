import { defineStore } from "pinia";

export const usePacksStore = defineStore("packs", {
  state: () => ({
    packs: {} as { [key: string] : Packs.Pack },
  }),

  actions: {
    addPack(pack: Packs.Pack) {
      if (this.packs[pack._id]) {
        throw new Error(`Pack ${pack._id} already exists`);
      }

      this.packs[pack._id] = pack;
    },

    removePack(packId: string) {
      if (!this.packs[packId]) {
        throw new Error(`Pack ${packId} does not exist`);
      }

      delete this.packs[packId];
    }
  }
});
