<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="#app">
  <header>
      <nav>
        <RouterLink to="/ejercicio1">Ejercicio 1</RouterLink>|
        <RouterLink to="/">Home</RouterLink>|
        <RouterLink to="/about">About</RouterLink>|
        <RouterLink to="/ejercicio3">Ejercicio 3</RouterLink>
      </nav>
  </header>
  <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
