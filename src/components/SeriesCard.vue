<template>
    <div class="series-card" @click="viewDetails">
      <div class="image-container">
        <img 
          :src="`${series.thumbnail.path}.${series.thumbnail.extension}`" 
          alt="Series Image" 
          class="series-image"
        />
      </div>
      <h3>{{ series.title }}</h3>
      <p class="year">{{ series.startYear }}</p>
      <p class="type" :class="series.type">{{ series.type }}</p>
      <p class="related-resources">
        {{ numberOfRelatedResources }} related resources
      </p>
      <button 
        v-if="showRemoveButton" 
        @click.stop="removeItem"
        class="remove-button"
      >Remove
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SeriesCard',
    props: {
      series: {
        type: Object,
        required: true,
      },
      showRemoveButton: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      viewDetails() {
        this.$emit('viewDetails', this.series.id);
      },
      removeItem() {
        this.$emit('removeItem', this.series.id);
    },
    },
    computed: {
      numberOfRelatedResources() {
        const totalResources = (this.series.comics.available || 0) +
                              (this.series.stories.available || 0) +
                              (this.series.characters.available || 0) +
                              (this.series.creators.available || 0);
        return totalResources;
      },
    },
  };
  </script>
  
  <style scoped>
  .series-card {
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 2px solid #ddd; 
    transition: transform 0.2s, border-color 0.3s; 
  }

  .series-card:hover {
    transform: scale(1.05); 
    border-color: #007bff; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  }
  .series-image {
    width: 100%;
    object-fit: cover;
  }

  .image-container {
    width: 100%;
    height: 300px; 
    overflow: hidden;
    border-radius: 10px;
  }

  .remove-button {
    margin-top: 8px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .details {
    text-align: center;
    margin-top: 10px;
  }

  .year {
    color: #555;
  }


  .type {
    font-weight: bold;
    text-transform: uppercase;
  }

  .type.collection {
    color: blue;
  }

  .type.event {
    color: red;
  }

  .related-resources {
    margin-top: 10px;
    font-size: 0.9em;
    color: #777;
  }
  </style>