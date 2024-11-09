<template>
  
    <div v-if="series">
      <div v-if="loading">
        <LoadingSpinner :isLoading="loading"/>
      </div>

      <div v-else-if="error">
        <h2>Error: {{ error }}</h2>
      </div>
      <h1>{{ series.title }}</h1>
      <div class="detail-image">
        <img :src="series.thumbnail.path + '.' + series.thumbnail.extension" alt="Series Image"/>
      </div>
      <button class="styled-button" @click="toggleSave(series)">
        {{ isSaved ? 'Remove' : 'Save' }}
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
  import "@/assets/styles/detail-style.scss"
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
      loading() {
        return this.marvelStore.loading;
      },
      error() {
        return this.marvelStore.error;
      },
    },
    methods: {
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
      
      addToHistory(item) {
        const alreadyInHistory = this.marvelStore.history.some(historyItem => historyItem.id === item.id);
        if (!alreadyInHistory) {
          this.marvelStore.addToHistory(item);
        }
      }
    },
    created() {      
      this.series = this.marvelStore.selectedSeries;
      if(this.series){
        this.comics = this.series?.comics.items || [];
        this.stories = this.series?.stories.items || [];
        this.characters = this.series?.characters.items || [];
        this.creators = this.series?.creators.items || [];
        this.addToHistory(this.series);
      }

    },
  };
  </script>
