import { createStore } from 'vuex'

export default createStore({
  state: {
   
    products: [
      {
          id: 1,
          name: 'adaga',
          price: 8
      },
      {
        id: 2,
        name: 'lanca',
        price: 558
      },
      {
        id: 3,
        name: 'escudo',
        price: 5847
      },
      {
        id:4 ,
        name: 'capacete',
        price: 518
      },
      {
        id: 5,
        name: 'luvas',
        price: 88
      },

    ],
    cart:[]
   
  },
  mutations: {
    
    addProduct(state, data) {
      state.cart.push(data)
    },
    
    removeProduct(state, id) {
      const idx = state.cart.findIndex(o => o.id === id);

      state.cart.splice(idx, 1);
      
    }
   
  },
  
  getters: {
    total(state){
      // dependencia
      // refactora um valor
      return state.cart.reduce((total, item) =>total += item.price, 0)

    },
  },
  actions: {
  },
  modules: {
  }
})
