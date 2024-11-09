
import { defineStore } from 'pinia';
import { fetchSeries } from '../../services/marvelService';


export const useMarvelStore = defineStore('marvel', {
  state: () => ({
    series: [],
    selectedSeries: null,
    savedItems: [],
    loading: false,
    error: null,
    history: [],
  }),

  actions: {
    async loadSeries(offset = 0) {
      this.loading = true;
      this.error = null;
      try {
        const { data } = await fetchSeries(offset);
        this.series.push(...data.data.results);
      } catch (error) {
        console.error(error);
        this.error = 'Failed to fetch data: ' + error.message;
      } finally {
        this.loading = false;
      }
    },

    saveItem(item) {
      if (this.savedItems.length < 10 && !this.savedItems.some(i => i.id === item.id)) {
        this.savedItems.push(item);
      } else {
        alert('Maximum saved items reached.');
      }
    },
    removeSavedItem(id) {
      this.savedItems = this.savedItems.filter(item => item.id !== id);
    },

    addToHistory(item) {
      if (!this.history.some(i => i.id === item.id)) {
        this.history.push(item);
      }
    },

    clearHistory() {
      this.history = [];
    },

    selectSeries(series) {
      this.selectedSeries = series; 
    },

  },
});