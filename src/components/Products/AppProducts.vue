<template>
    <div>
         <AppProduct 
            v-for="product in $store.state.products"
            :key="product.id"
            :product_="product"
        /> 
       
    
    </div>
</template>
<script>
import AppProduct from './AppProduct.vue';


export default {
    components: { AppProduct }
}
</script>
<style>
    
</style>