<template>
  

  <div>
    <h1>two way  data Biding </h1>
    <p>v-model</p>
   
  </div>


  <div>
    <label for="">Nome: </label> <br>
    <input 
      v-model="name"
      type="text"
    
    >
    <button
      v-on:click="onClick()"
    >
    Enviar

    </button>
    </div>
  <br><br><br>

  <div>

    <button
      @click="_onClick"
    >
    Clickar e capturando o eventos

    </button>
   

  </div>
  <br><br><br>

  <div>
    <form 
      action="https://google.com/"
      @submit="onSubmit()"
    >
    <button
      type="submit"
    >
    Clickar Form

    </button>
     </form>
    
  </div>
  <br><br><br>

  <div>

    <h2>Modificadores de Eventos</h2>
    
    <form 
      action="https://google.com/"
      @submit.prevent="onSubmit()"
    >
    <button
      type="submit"
    >
    Clickar Form

    </button>

   
    </form>
    
  </div>
  <br><br><br>

  
  <div>
    <form 
    
    
    >
    <button
      type="submit"
    >
    Clickar Form

    </button>

    <input 
      type="text"
      @keyup="onKeyUp"
    />
    </form>
  </div>

  

  
  
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },

  data() {
    return {
     
    
    }
  },

  methods:{
    onClick() {
      console.log('Clickou !');
    },
    _onClick($e) {
      console.log('Clickou com capture!', $e);
    },
    onSubmit() {
      console.log('submit');
    },
    onKeyUp($event) {
      console.log('up', $event);
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
