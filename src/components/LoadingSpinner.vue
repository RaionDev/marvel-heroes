<template>
    <div class="loading-spinner" v-if="isLoading">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoadingSpinner",
    props: {
      isLoading: {
        type: Boolean,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    color: #333;
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 5px solid #eee;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  </style>