<template>
 
<HelloWorld>

</HelloWorld>

<div>
  <!-- <pre 
    v-for="(pokemon, index) in pokemons"
    :key="index"
  > -->
  <pre 
    v-for="pokemon in pokemons"
    :key="pokemon.id"
  >
  Name: {{ pokemon.name }}
  </pre>
</div>
</template>

<script>
import api from '@/services/api.ts'
import { ref, onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components :{ HelloWorld },

  setup() {

    const pokemons = ref();

    const fetchPokemons = () => api.get("/pokemon?limit=20")
      .then((response) =>(pokemons.value = response.data.results));

      onMounted(fetchPokemons);

    return {
      pokemons      
    }
   
  }

 
}

</script>
<style>

</style>
