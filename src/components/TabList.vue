<template>
  <div v-if="items && items.length" class="container">
      <div v-for="item in items" :key="item.id || item.resourceURI" class="item">
        <h4>{{ item.name }}</h4>
        <p v-if="item.role">{{ item.role }}</p> 
        <p v-if="item.type">{{ item.type }}</p> 
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

  .container {
    max-width: 700px; 
    margin: 0 auto;   
    padding: 10px;    
  }
  .item {
    margin: 10px 0;
    padding: 10px;
    background-color: #f9f9f9; 
    border-radius: 5px; 
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);  
  }
  
  .item h4 {
    font-size: 1.1em;
    margin-bottom: 5px;

  }
  
  .item p {
    font-size: 0.9em;
    color: #555;
  }

  .item + .item {
  border-top: 1px solid #ddd; 
}

  </style>