<template>

  <button
    @click="updateUser()"  
  >
    Atualizar perfil
  </button>
  <HelloWorld />

  <!-- </HelloWorld> -->
</template>

<script>
import HelloWorld  from "@/components/HelloWorld.vue";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      
    }
  },
  methods:{
    updateUser() {
        const User = {
        first_name: 'sasuke',
        last_name: 'uchiha',
        email: 'sasukeuchiha@konohac.folha'
      }
      this.$store.commit('storeUser', User);

    }
  },
  // created() {
  //   const User = {
  //     first_name: 'sasuke',
  //     last_name: 'uchiha',
  //     email: 'sasukeuchiha@konohac.folha'
  //   }
  //   this.$store.commit('storeUser', User);
  // },
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
