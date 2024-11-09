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
      <p class="year">Year: {{ series.startYear }}</p>
      <p class="type" :class="series.type" v-if="series.type">Type: {{ series.type }}</p>
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
  import '@/assets/styles/series-card.scss';

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
        this.$emit('viewDetails', this.series);
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
  