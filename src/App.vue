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
    {{ name }}
  </div>
  <br><br><br>

  <div>
    <p>Sports</p> 
    <select v-model="sports" >
      <option value="f">futebol</option>
      <option value="n">natacao</option>
      <option value="g">ginastica</option>

    </select>
    {{ sports }}

  </div>
  <br><br><br>

  <div>
    <label for="">NewLetter</label>
    <input 
      v-model="newletter"
      type="radio"
      value="sim"
    >Sim <br>
    <input 
      v-model="newletter"
      type="radio"
      value="nao"
    >Nao<br> <br>

    {{ newletter }}
    
  </div>
  <br><br><br>

  <div>
    <label for="">Contrato</label>
    <input 
      v-model="contract"
      type="checkbox"
    
    >Aceite os termos <br>
   <br> <br>

    {{ contract }}
  </div>
  <br><br><br>

  
  <div>
    <label for="">Defina sua color:</label>
    <input 
      v-model="colors"
      type="checkbox"
      value="yellow"
    
    >Yellow <br>
    <input 
      v-model="colors"
      type="checkbox"
      value="blue"
    
    >Blue <br>
   <br> <br>

    {{ colors }}
  </div>

  

  
  
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },

  data() {
    return {
      name: 'jack son',
      // sports:'',
      sports:'n',
      // newletter:''
      newletter:'nao',
      contract: false,
      colors:[]
    
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
