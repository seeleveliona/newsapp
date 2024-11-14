import { defineStore } from "pinia";

interface Prueba {
  id: number;
  title: string;
  body: string;
}

export const usePruebaStore = defineStore({
  id: "pruebas",
  state: () => ({
    pruebas: [] as Prueba[],
    prueba: {} as Prueba,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  getters: {
    getPruebas: (state) => state.pruebas,
    getPrueba: (state) => state.prueba,
  },

  actions: {
    async fetchPruebas() {
      const pruebas = await $fetch("/api/prueba");
      this.pruebas = pruebas;
    },    
  },
});