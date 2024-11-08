<template>
    <div v-if="series">
      <h1>{{ series.title }}</h1>
      <img :src="series.thumbnail.path + '.' + series.thumbnail.extension" alt="Series Image"/>
      <button @click="toggleSave(series)">
        {{ isSaved ? 'Remove from Saved' : 'Save' }}
      </button>      
      <p v-if="saveLimitReached" class="limit-warning">Maximum saved items reached.</p>

      <div class="tabs">
        <button 
            v-if="this.comics.length > 0"
            @click="activeTab = 'comics'" 
            :class="{ active: activeTab === 'comics' }">
                Comics
        </button>
        <button
            v-if="this.stories.length > 0"
            @click="activeTab = 'stories'" 
            :class="{ active: activeTab === 'stories' }">
            Stories
        </button>
        <button 
            v-if="this.characters.length > 0"
            @click="activeTab = 'characters'" 
            :class="{ active: activeTab === 'characters' }">
            Characters
        </button>
        <button 
            v-if="this.creators.length > 0"
            @click="activeTab = 'creators'" 
            :class="{ active: activeTab === 'creators' }">
            Creators
        </button>
      </div>

      <div class="tab-content">
        <TabList 
            v-if="activeTab === 'comics'" 
            :title="'Comics'" 
            :items="comics" 
        />
        <TabList 
            v-if="activeTab === 'stories'" 
            :title="'Stories'" 
            :items="stories" 
        />
        <TabList 
            v-if="activeTab === 'characters'" 
            :title="'Characters'" 
            :items="characters" 
        />
        <TabList 
            v-if="activeTab === 'creators'" 
            :title="'Creators'" 
            :items="creators" 
        />        
      </div>
    </div>
  </template>
  
  <script>
  import TabList from '@/components/TabList.vue';
  import { useMarvelStore } from '../store/modules/marvelStore';
  
  export default {
  components: { TabList },
    name: 'SeriesDetail',
    data() {
      return {
        series: null,
        comics: [],
        stories: [],
        characters: [],
        creators: [],
        activeTab: 'comics', 
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
.tabs button {
  padding: 0.5em 1em;
  margin: 0.5em;
  cursor: pointer;
  background-color: #eee;
  border: none;
  font-weight: bold;
}
.tabs button:focus, .tabs button.active {
  background-color: #ccc;
}
.tab-content {
  margin-top: 1em;
}

.horizontal-list {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 10px 0;
}

.item {
  text-align: center;
  flex-shrink: 0;
  width: 150px;
}
</style>