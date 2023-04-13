<template>


  <AppProducts />

  <br>
  <br>
  {{ $store.state.cart }}

  <div>
    <h2>Total {{ $store.getters.total }}</h2>
  </div>

  <div>

    {{ $store.state.user.first_name }} <br>
    {{ $store.state.user.last_name }} <br>

    <button
      @click="updated()"
    >
    atualizar
    </button>
  </div>


</template>

<script>
import AppProducts  from "@/components/Products/AppProducts.vue";

export default {
  name: 'App',
  components: {
    AppProducts
  },
  data() {
    return {
      
    }
  },

  methods: {
    updated() {
      const newUser = {
        first_name: 'zero',
        last_name: 'lucit',
        email: 'zero@zero.com'

      }
      this.$store.dispatch('storeUser', newUser)
        .then(() => {
          console.log('Terminou com successo!');
        })
    },
    
  }
 
}

</script>
<style>

</style>
