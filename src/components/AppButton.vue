<template>
    <div>
        <button
        @click="sendData()"
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
    setup(props, { emit }) {
          
        const sendData = () => {
            // emit('update', false);
            emit('update', props.variant);
        }

        return {
            sendData
        }

    }
    
}
</script>
<style>
    
</style>