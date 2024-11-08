<template>
    <div>
      <h1>Marvel Series</h1>
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
  
  export default {
    components: { SeriesCard, LoadingSpinner },
    name: 'HomeView',
    computed: {
      marvelStore() {
        return useMarvelStore();
      },
    },
    methods: {
      loadMore() {
        this.marvelStore.loadSeries(this.marvelStore.series.length);
      },
      viewDetails(id) {
        this.$router.push({ name: 'Details', params: { id } });
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
    .series-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        gap: 20px;
        margin: 0 auto;
    }
    .sentinel {
      height: 20px;
    }

  
  </style>