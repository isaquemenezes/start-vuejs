import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      first_name: 'naruto',
      last_name: 'uzumaki',
      email: 'narutouzumaki@konohac.folha'
    },
    products: [],
    cads:[]
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
      // console.log('store user',data);
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
