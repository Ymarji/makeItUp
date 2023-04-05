<template>
  <div id="app">
    <app-layout>
      <router-view />
    </app-layout>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch("products/getProduct");
  },
  created() {},
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
body,
body * {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

nav {
  padding: 1.2rem;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active,
nav a.router-link-active {
  color: #f9a8b6;
}
</style>
