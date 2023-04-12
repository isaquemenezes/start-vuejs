<template>
    <div>
        <pre>
            <p>App Component Product</p>
           {{ product_.name }} - {{ product_.price }} <br>

           <button
            @click="addProduct()"
           >
            ADD 
           </button>

           <button
            @click="removeProduct()"
           >
            --
           </button>
        </pre> 
    </div>
</template>

<script>

export default {
    props: {
        product_: Object
    },
    
    methods: {
        addProduct() {
            // console.log('add card');
            this.$store.commit('addProduct', this.product_)
        },
        
        removeProduct() {
            this.$store.commit('removeProduct', this.product_.id)

        }
    }
}

</script>
<style>

    
</style>