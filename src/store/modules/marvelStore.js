
import { defineStore } from 'pinia';
import { fetchSeries, fetchSeriesDetails } from '../../services/marvelService';


export const useMarvelStore = defineStore('marvel', {
  state: () => ({
    series: [],
    selectedSeries: null,
    savedItems: [],
    loading: false,
    history: [],
  }),

  actions: {
    async loadSeries(offset = 0) {
      this.loading = true;
      try {
        const { data } = await fetchSeries(offset);
        this.series.push(...data.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async loadSeriesDetails(id) {
      this.loading = true;
      try {
        const { data } = await fetchSeriesDetails(id);
        this.selectedSeries = data.data.results[0];
      } catch (error) {
        console.error(error);
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
  },
});