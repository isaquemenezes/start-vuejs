<template>
    <div>
        <button>
            {{ variant }}
            <slot></slot>
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

    setup(props) {
        console.log(props.variant);

    }
    
}
</script>
<style>
    
</style>