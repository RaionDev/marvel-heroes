<template>
    <div v-if="series">
      <h1>{{ series.title }}</h1>
      <div class="detail-image">
        <img :src="series.thumbnail.path + '.' + series.thumbnail.extension" alt="Series Image"/>
      </div>
      <button @click="toggleSave(series)">
        {{ isSaved ? 'Remove from Saved' : 'Save' }}
      </button>      
      <p v-if="saveLimitReached" class="limit-warning">Maximum saved items reached.</p>

      <TabsGroup 
        :comics = 'comics'
        :stories="stories" 
        :characters="characters" 
        :creators="creators"
      />
    </div>
  </template>
  
  <script>
  import { useMarvelStore } from '../store/modules/marvelStore';
  import TabsGroup from '@/components/TabsGroup.vue';
  export default {
  components: { TabsGroup },
    name: 'SeriesDetail',
    data() {
      return {
        series: null,
        comics: [],
        stories: [],
        characters: [],
        creators: [],
      };
    },
    computed: {
      marvelStore() {
        return useMarvelStore();
      },
      isSaved() {
        return this.marvelStore.savedItems.some(item => item.id === this.series.id);
      },
      saveLimitReached() {
            return this.marvelStore.savedItems.length >= 10;
      },
    },
    methods: {
      async loadSeriesDetails() {
        const { id } = this.$route.params;
        await this.marvelStore.loadSeriesDetails(id);
        this.series = this.marvelStore.selectedSeries;
        if (this.series) {
          this.comics = this.series.comics.items || [];
          this.stories = this.series.stories.items || [];
          this.characters = this.series.characters.items || [];
          this.creators = this.series.creators.items || [];

        }
      },
      toggleSave(item) {
        if (!this.isSaved) {
              if (this.saveLimitReached) {
              alert('Maximum saved items reached.');
            } else {
              this.marvelStore.saveItem(item);
            }
        } else {
          this.marvelStore.removeSavedItem(item.id);
        }      
        },
    },
    created() {
      this.loadSeriesDetails();
    },
  };
  </script>

<style scoped>
  .limit-warning {
    color: red;
    font-size: 0.9em;
  }

  .detail-img {
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 2px solid #ddd; 
  }
</style>