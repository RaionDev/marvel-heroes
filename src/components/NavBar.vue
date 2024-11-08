<template>
    <nav class="navbar">
      <router-link 
        to="/" 
        class="nav-link" 
        active-class="active-link"
      >
        Home
      </router-link>
      <router-link 
        to="/history" 
        class="nav-link" 
        active-class="active-link"
      >
        History
      </router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: center;
    background-color: #35495e;
    padding: 15px;
    border-radius: 8px;
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