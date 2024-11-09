<template>
    <nav class="navbar">
      <router-link 
        v-if="!isDetailsPage" 
        to="/" 
        class="nav-link"
        exact-active-class="active-link"
      >
        Home
      </router-link>
      <router-link 
        v-if="!isDetailsPage" 
        to="/history" 
        class="nav-link" 
        active-class="active-link"
      >
        History
      </router-link>
      <router-link 
        v-if="isDetailsPage" 
        to="/"
        class="nav-link" 
        exact-active-class="active-link"
      >
        Back to Home
    </router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    computed: {
    isDetailsPage() {
      return this.$route.name === 'Details'; // o la ruta específica
    }
  }
  };
  
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    background-color: #35495e;
    padding: 15px;
    top: 0;
    z-index: 999;
  }
  
  .nav-link {
    color: #ffffff;
    margin: 0 15px;
    text-decoration: none;
    font-size: 1.1em;
    transition: color 0.3s;
  }
  
  .nav-link:hover {
    color: #42b983;
  }
  
  .active-link {
    font-weight: bold;
    color: #42b983;
  }
  </style>