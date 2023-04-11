<template>
  


  <div>
    <TheHeader  v-if="showHeader" />

    <h1>Ciclo de vida </h1>

    <input 
      v-model="name"
      type="text"
    />
    {{ name }}

    <br>

    <button @click="showHeader = !showHeader" >
      Ativa e Desativar Header
    </button>
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

  // Criação 
    // Preparar o componente
    // Ajax, inicializar algumas variaveis
    // Nao tem acesso ao template (DOM)
  // Montagem
    // Inicializar um Lib externa (new Lib())
    // Precisa de acesso ao template (DOM)
    // Tem acesso ao template (DOM)
  // Atualizacao
    // Debug
    // Update
  // Desmontagem
    // Remover tudo o que for necessário pra liberar memória (lib->desvtroy())

  // Hooks
      // beforeUpdate(){
      //   console.log('before Update', this.name);
      // },
      
      // updated() {
        
      //   console.log('Updated', this.name);
      // },

  // beforeCreate() {
  //   console.log("before Create ===> ",this.name);
  //   console.log("DOM = ", this.$el);
  // },
  
  // created() {
  //   console.log("Create ===>", this.name);
  //   console.log("DOM = ", this.$el);
  // },
  
  // beforeMount() {
  //   console.log("Before Mount ==>",this.name);
  //   console.log("DOM = ", this.$el);
  // },
  
  // mounted(){
  //   console.log("mounted ==>",this.name);
  //   console.log("DOM = ", this.$el);
  // },
  
  // beforeUnmount(){
  //   console.log("before Unmount");
  // },
  
  // unmounted(){
  //   console.log("unmounted");
  // },
  

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
