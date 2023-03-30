<template>
  <FirstHeader 
    v-show="showHeader"
  />

  <div>
    <p>Interpolação </p>
    nome : {{ name }}

  </div>

  <div v-if="accessLevel === 'admin' ">User Admin </div>
  <div v-else-if="accessLevel === 'marketing'">User Marketing </div>
  <div v-else>User TI </div>
  
  <img
    alt="Vue logo" 
    src="./assets/logo.png"
  >

  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

import FirstHeader from './components/FirstHeader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    FirstHeader
  },

  data() {
    return {
      showHeader: true,
      user: {

      },
      name: 'Jonh snow',
      color:'',
      message: '',
      accessLevel:"admin" 
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
  margin-top: 60px;
}
</style>
