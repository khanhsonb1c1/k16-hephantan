import { defineStore } from "pinia";

export const authStore = defineStore({
  id: "auth",
  state: () => ({
    auth: {} as any,
  }),

  actions: {
    fetch() {},
  },
});
