<template>
    <div v-if="items && items.length">
      <h3>{{ title }}</h3>
      <div class="horizontal-list">
        <div v-for="item in items" :key="item.id || item.resourceURI" class="item">
          <h4>{{ item.name }}</h4>
            <p v-if="item.role">{{ item.role }}</p> 
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'TabList',
    props: {
      title: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .item {
    margin: 10px 0;
  }
  
  .item h4 {
    font-size: 1.1em;
  }
  
  .item p {
    font-size: 0.9em;
    color: #555;
  }

  .horizontal-list {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 10px 0;
  }
  </style>