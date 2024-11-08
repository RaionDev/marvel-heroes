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
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  
  .tabs button {
    padding: 0.5em 1em;
    margin: 0.5em;
    cursor: pointer;
    background-color: #eee;
    border: none;
    font-weight: bold;
  }
  
  .tabs button:focus,
  .tabs button.active {
    background-color: #ccc;
  }
  
  .tab-content {
    margin-top: 1em;
  }
  </style>