<template>
    <div>
      <div class="tabs">
        <button
          v-if="comics.length > 0"
          @click="activeTab = 'comics'"
          :class="{ active: activeTab === 'comics' }">
          Comics
        </button>
        <button
          v-if="stories.length > 0"
          @click="activeTab = 'stories'"
          :class="{ active: activeTab === 'stories' }">
          Stories
        </button>
        <button
          v-if="characters.length > 0"
          @click="activeTab = 'characters'"
          :class="{ active: activeTab === 'characters' }">
          Characters
        </button>
        <button
          v-if="creators.length > 0"
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
  export default {
    components: {
      TabList,
    },
    props: {
      comics: {
        type: Array,
        required: true,
      },
      stories: {
        type: Array,
        required: true,
      },
      characters: {
        type: Array,
        required: true,
      },
      creators: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        activeTab: 'comics', 
      };
    },
  };
  </script>
  
  <style scoped>
  .tabs {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    border-bottom: 2px solid #ccc;
  }
  
  .tabs button {
  padding: 0.75em 1.25em;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-bottom: none;
  font-weight: bold;
  font-size: 1em;
  transition: all 0.3s ease;
  border-radius: 5px 5px 0 0;
}
.tabs button:hover {
  background-color: #e0e0e0;
}
  
  .tabs button:focus,
  .tabs button.active {
  background-color: #42b983;
  color: white;
  border-color: #42b983;
  border-bottom: 2px solid #42b983;
  font-weight: 600;
}
  
.tab-content {
  padding: 10px;
  background-color: #fafafa;
  border-radius: 0 0 5px 5px; 
}
  </style>