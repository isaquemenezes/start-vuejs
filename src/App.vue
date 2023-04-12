<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="rotaDinamica">About</router-link> |
    <RouterLink to="/service">Service</RouterLink> |
    <RouterLink to="/usuarios/2">User</RouterLink> |
    <router-link :to="{ name:'portfolio'}">Portfolio</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      rotaDinamica: {
        name: 'about'
      }

    }

  }
}

</script>
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
