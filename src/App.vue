<template>
  

  <div>
    <h1>Propriedade Computada </h1>
    <p>v-model</p>
   
  </div>
   <p>Fist Name: {{ user.fisrt_name }}</p>
   <p>Last Name: {{ user.last_name }}</p>
    <button @click="click()">Click</button>
  <div>
    
  </div>
  <br><br><br>

  <div>

    <p>Nome Completo</p>
    {{ fullName }}
    <br><br><br>
    <div
      v-for="todo in todos"
      :key="todo.id"
    >
    {{ todo.title  }}
   
    

    </div>

  </div>
  <br><br><br>

  <div>
    <p>Não completos </p>
    <p 
      v-for="todo in uncompletedTodos" 
      :key="todo.id"
    >
      {{  todo.completed }}</p>
    <br><br>
    
    <p>completos </p>
    <p
      v-for="todo in completedTodos"
      :key="todo.id"
    >
      {{  todo.completed }}
    </p>

  </div>
  <br><br><br>

  <div>
    
    <p>Todos</p>
    <p
      v-for="todo in todos"
      :key="todo.id"   
    >
      <input 
        v-model="todo.completed"
        type="checkbox"
      >

    {{ todo.title }} / {{ todo.completed }}
    </p>

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
      user: {
        fisrt_name: 'Joao',
        last_name: 'Marcos'
      },

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
  },

  methods: {
    click() {
      console.log(this.user);
    }
  },

  computed: {
    fullName() {
     return `${this.user.fisrt_name} ${this.user.last_name}` 
    },

    uncompletedTodos() {
      return this.todos.filter(todo => !todo.completed);      
    },

    completedTodos() {
      return this.todos.filter(todo => todo.completed);      
    },
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
