<template>


  <div>
    <h4>admin</h4>
    <h3>First Name</h3>
    {{ obj_user.first_name }}

    <h3>Last Name</h3>
    {{ obj_user.last_name }}
  </div>

  <button
    @click="obj_user.last_name = 'Obito' "
  >
  update    
  </button>

  


</template>

<script>
import { ref, computed, watch} from 'vue'

export default {
  name: 'App',
  


  setup() {
   
    const obj_user = ref({
      
      first_name: 'hokage',
      last_name: 'folha'
    
    })

    // const fullName = computed(() => {
    //   return `${obj_user.value.first_name} ${obj_user.value.last_name}`
    // })

    // refactory
    const fullName = computed(() => 
      `${obj_user.value.first_name} ${obj_user.value.last_name}`
    )

    // watch(obj_user, () => {
    //   console.log('observou !');
    // }, {
    //   deep:true
    // });

    // call back 
    watch(() => obj_user.value.first_name, () => {
      console.log('observou !');
    });

    return {
  
      obj_user,
      fullName
      
       
    }
  }
  

 
}

</script>
<style>

</style>
