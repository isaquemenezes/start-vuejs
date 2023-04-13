<template>
    <div>
        <button
        @click="$emit('update', true)"
        >
            {{ variant }}
            <slot></slot>
            <slot name="icon"></slot>
        </button>
      
    </div>
</template>
<script>
export default {
    props: {
        variant: {
            type:String,
            default:'success'
        }
    },

    // setup(props, ctx) {
        // acesso direto
    setup(props, slots) {
        
        console.log(slots);

    }
    
}
</script>
<style>
    
</style>