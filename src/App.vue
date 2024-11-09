<template>
  <div id="app">
    <NavBar />
    
    <router-view class="style-router"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.style-router{
  margin-top: 70px;
}
</style>
