<template>
  <div class="hello">
    <h1>{{ msg }}</h1> <br>


    <h2>VUEX </h2> <br>
    <p>state:</p>
    <pre>
      First Nome: {{ $store.state.user.first_name }} <br>
      Last Name: {{ $store.state.user.last_name }} <br>
      Email: {{ $store.state.user.email }} 
    </pre>
    
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    console.log('Hello World ',this.$store.state.user);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
