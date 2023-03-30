<template>
  <FirstHeader 
    v-show="showHeader"
  />

  <div>
   <div 
    v-for="list in todos" 
    :key="list.id"
  >
   {{ list.id }} /{{ list.title }} / {{ list.completed }}
   </div>

  </div>

  <div v-if="accessLevel === 'admin' ">User Admin </div>
  <div v-else-if="accessLevel === 'marketing'">User Marketing </div>
  <div v-else>User TI </div>
  
  <img
    alt="Vue logo" 
    src="./assets/logo.png"
  >

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
      todos: 
        // 20230330093311
        // https://jsonplaceholder.typicode.com/todos

            [
              {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
              },
              {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
              },
              {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
              },
              {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
              },
              {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
              },
              {
                "userId": 1,
                "id": 6,
                "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                "completed": false
              }
        
            ]
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
</style>
