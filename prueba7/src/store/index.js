import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
  },
  mutations: {
    incrementar(state){
      state.contador += 1
    },
    decrementar(state){
      state.contador -= 1
    }
  },
})
