<template>


  <AppProducts />

  <br>
  <br>
  {{ $store.state.cart }}


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
