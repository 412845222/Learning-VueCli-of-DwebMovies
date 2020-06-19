import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:{}
  },
  getters:{
    
  },
  mutations: {
    editUserinfo(state,user){
      state.userinfo = user
      console.log(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
