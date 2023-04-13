<template>



  <br>
  <br>
  {{ name }}

  <div>
  <button
    @click="changeName"
  >
  Change Name 

  </button>
  </div>

  


</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  // data() {
  //   return {
      
  //   }
  // },

  setup() {
    // const  name = "Cezar";
    let  name = 'Cezar'

    const changeName = () => {
      console.log('test');
      name = 'Marcos'
    } 

    return {
      name,
      changeName 
    }
  }
  

 
}

</script>
<style>

</style>
