import { defineStore } from "pinia";

interface New {
  id: number;
  title: string;
  img: string;
  description: string;
}

export const useNewStore = defineStore({
  id: "newStore",
  state: () => ({
    news: [] as New[],
    new: {} as New,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  getters: {
    getNews: (state) => state.news,
    getNew: (state) => state.new,
  },

  actions: {
    async fetchNews() {
      const news_data : any  = await $fetch("/api/news");
      this.news = news_data;
    },    
  },
});