<template>
  <AppHook
    v-if="showAppHook" 
  />

  <button
  @click="showAppHook = !showAppHook"
  >
toggle
  </button>

</template>

<script>
import { ref} from 'vue'
import AppHook from '@/components/AppHook.vue'

export default {
  components :{
    AppHook
  },


  setup() {

    const showAppHook = ref(true)
   

    return {

      showAppHook
  
       
    }
  }
  

 
}

</script>
<style>

</style>
