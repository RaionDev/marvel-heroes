<template>
    <div>
      <h1>Marvel Series</h1>

      <div v-if="error">
        <h2>Error: {{ error }}</h2>
      </div>
      <div class="series-container">
        <SeriesCard 
          v-for="series in marvelStore.series"
          :key="series.id"
          :series="series"
          @viewDetails="viewDetails"
        />
      </div>
      <LoadingSpinner :isLoading="marvelStore.loading"/>
      <div ref="sentinel" class="sentinel"></div>
    </div>
  </template>
  
  <script>
  import SeriesCard from '@/components/SeriesCard.vue';
  import { useMarvelStore } from '../store/modules/marvelStore';
  import LoadingSpinner from '@/components/LoadingSpinner.vue';
  import '@/assets/styles/series-styles.scss'

  export default {
    components: { SeriesCard, LoadingSpinner },
    name: 'HomeView',
    computed: {
      marvelStore() {
        return useMarvelStore();
      },
      error() {
        return this.marvelStore.error;
      },
    },
    methods: {
      loadMore() {
        this.marvelStore.loadSeries(this.marvelStore.series.length);
      },
      viewDetails(series) {
        this.marvelStore.selectSeries(series); 
        this.$router.push({ name: 'Details', params: { id: series.id } });
      },

      handleIntersection(entries) {
        if (entries[0].isIntersecting && !this.marvelStore.loading) {
          this.loadMore();
        }
      },
    },
    mounted() {
      if (!this.marvelStore.series.length) {
        this.marvelStore.loadSeries();
      }

      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      };
      this.observer = new IntersectionObserver(this.handleIntersection, options);
      this.observer.observe(this.$refs.sentinel);
      },
      beforeDestroy() {
        this.observer.disconnect();
      },
  };
  </script>
  <style scoped>
    .sentinel {
      height: 20px;
    }

  
  </style>