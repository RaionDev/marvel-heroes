<template>
    <div>
      <h1>History</h1>
      <section v-if="savedItems.length > 0">
        <h2>Saved Series</h2>
        <SeriesCard 
          v-for="item in savedItems"
          :key="item.id"
          :series="item"
          :showRemoveButton="true"
          @viewDetails="viewSeriesDetails"
          @removeItem="removeSeries"
          @toggleSave="toggleSave"
        />
      </section>

      <section v-if="historyItems.length > 0">
        <h2>History</h2>
        <SeriesCard 
          v-for="item in historyItems"
          :key="item.id"
          :series="item"
          :showRemoveButton="false"
          @viewDetails="viewSeriesDetails"
          @toggleSave="toggleSave"
        />
      </section>
    </div>
  </template>
  
  <script>
  import SeriesCard from '@/components/SeriesCard.vue';
  import { useMarvelStore } from '../store/modules/marvelStore';
  
  export default {
  components: { SeriesCard },
    name: 'HistoryView',
    computed: {
      marvelStore() {
        return useMarvelStore();
      },
      savedItems() {
        return this.marvelStore.savedItems;
      },
      historyItems() {
        return this.marvelStore.history.filter(item => 
          !this.savedItems.some(savedItem => savedItem.id === item.id)
        );
      },
    },

    methods: {
      removeSeries(id) {
        this.marvelStore.removeSavedItem(id);
      },
      viewSeriesDetails(id) {
        this.$router.push({ name: 'Details', params: { id } });
      },

      toggleSave(item) {
        if (this.savedItems.some(savedItem => savedItem.id === item.id)) {
          this.removeSeries(item.id);
        } else {
          this.marvelStore.saveItem(item);
        }
      },
    },
  };
</script>
<style scoped>
section {
  margin-bottom: 30px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.saved-items,
.history-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}


</style>
