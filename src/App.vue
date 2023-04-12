<template>


  <AppProducts />

  <br>
  <br>
  {{ $store.state.cart }}

  <div>
    <h2>Total {{ $store.getters.total }}</h2>
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
 
}

</script>
<style>

</style>
