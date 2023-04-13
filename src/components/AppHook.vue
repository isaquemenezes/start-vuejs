<template>
    <div>
        Hooks        
    </div>
</template>


<script>
import { 
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted
} from 'vue';
export default {

    setup() {
        onBeforeMount(() => {
            console.log('onBeforeMount = antes da mondagem');
        });

        onMounted(() => {
            console.log('onMounted =  depois da montagem');
        })

        onBeforeUnmount(() => {
            console.log('onBeforeUnmount = antes da desmontagem');
        })
        
        onUnmounted(() =>  {
            console.log('onUnmounted = despois da desmontagem');
            
        });

    },
    
}
</script>
<style>
    
</style>