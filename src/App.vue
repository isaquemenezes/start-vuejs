<template>
  


  <div>
    <TheHeader>
      <template v-slot:title>
      Header Slot /
      </template>

      <template v-slot:description>
        <p>Description</p>
      </template>

      <p>Content</p>
      
    </TheHeader>

  </div>
  <br> <br>
  
  <div>

  </div>
  <br><br><br>
  
  <div>
  </div>
  
</template>

<script>

import TheHeader from './components/TheHeader.vue';
export default {
  
  name: 'App',
  components: {
    TheHeader    
  },

  data() {
    return {
      name:'Lex Lutto',
      showHeader: true
     
    }
  },

  

  watch: {  

  },

  methods: {

  },

  computed: {
  
  },

  

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
