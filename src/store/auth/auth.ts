export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    IS_AUTHENTICATED( state: any) {
      if (state.user != null) 
        return true;
      return false;
    }
  },
  actions: {
    login({ commit }: any, payload: any) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('SET_AUTH', payload);
          resolve()
        }, 1000);
      })
    }
  },
  mutations: {
    SET_AUTH(state: any, payload: Object) {
      state.user = payload;
    }
  }
}