<template>
  <FirstHeader />

  <div>
    <h1
      :class="class_style"
    >
    Class e Styles Dinamicos</h1>

     <h3
      :class="{'class_style': true, 'title-home': isHome}"
    >
     By Object styles Dinamicos</h3>

    <p
      :class="[ 'text', 'class_style']"
    >

      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum molestiae, 
      possimus quo veniam blanditiis at inventore adipisci ad id temporibus, 
      enim, nam aut necessitatibus magni optio sed sint a! Adipisci!
    </p>
  </div>
  

  
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

import FirstHeader from './components/FirstHeader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    FirstHeader
  },

  data() {
    return {
      isHome: false,
      class_style: 'title',
      text:'text'

    }
  }
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

.title {
  font-size: 3rem;
  color: blueviolet;
}

.text {
  /* color: black; */
  font-size: 1rem;
  text-align: justify;
}

.title-home {
  font-size: 1.5rem;
  color: blue;
}
</style>
