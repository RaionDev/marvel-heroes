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
    .series-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
        gap: 20px;
        margin: 0 auto;
        padding: 20px;
        justify-items: center;
    }

    @media (max-width: 1024px) {
      .series-container {
          grid-template-columns: repeat(2, 1fr); /* 2 columnas en pantallas medianas */
      }
    }

    @media (max-width: 600px) {
      .series-container {
          grid-template-columns: 1fr; /* 1 columna en pantallas pequeñas */
      }
    }
    .sentinel {
      height: 20px;
    }

  
  </style>