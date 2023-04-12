<template>
  


  <div>
    <div class="card">
      Testes de scoped
    </div>
    
  <BaseAlert 
    status="success" 
  />

  </div>
  <br> <br>
  
  
</template>

<script>

import BaseAlert from '@/components/BaseAlert.vue';

export default {
  
  name: 'App',
  components: {
    BaseAlert     
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
