<template>
  

  <div>
    <h1>Observadores Watch </h1>
    <p>v-model</p>
    
    <input 
      v-model="name"
      type="text"
    /> <br>
    {{ name }}
   
  </div>
  <br> <br>
  
  <div>
    <h2>Páginação de sistema</h2>
    
    <select v-model="pageCount" name="" id="">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select> <br>

    {{ pageCount }}
  </div>
  <br><br><br>

  <div>

    <label for="">First name:</label>
    <input
      v-model="user.first_name"
      type="text" 
    /> <br><br>
    <p> {{ user.first_name }}</p>
   

    <label for="">Last name:</label>
    <input
      v-model="user.last_name"
      type="text" 
    /> <br> <br>
    {{ user.last_name }}   

  </div>


  <br><br><br>

    <div>
      

    </div>
  <br><br><br>

  <div>
    
   
  </div>
  <br><br><br>

  
  <div>
    
  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },

  data() {
    return {
      name: '',
      pageCount:5,
      user: {
        first_name: '',
        last_name: ''
      }
     
    }
  },

  watch: {
    // name(new_value, old_value) {
    //   console.log(new_value, old_value);
    // }
    
    // name() {
    //   this.saveName();
    // }

    name(vl) {
      if (vl.length >= 3)
      {
        this.saveName();
      }
    },

    pageCount() {
      this.changePage();
    },

    user: {
      handler() {
        console.log("Usr alterado!");
      },
      deep:true
    }
   

  },

  methods: {
   saveName() {
    console.log('Ajax');
    console.log(this.name);
   },

   changePage() {
    console.log('Ajax');
    console.log('Change Page');

   }
  },

  computed: {
  
  },

  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
