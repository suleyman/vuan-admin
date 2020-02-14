import authService from "@/api/services/authService"

export default {
  namespaced: true,
  state: {
    token: null
  },
  getters: {
    IS_AUTHENTICATED (state: any) {
      if (state.token != null) 
        return true;
      return false;
    },
    TOKEN (state: any) {
      return state.token
    }
  },
  actions: {
    login ({ commit }: any, payload: any) {
      authService.auth(payload);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('SET_TOKEN', 'TESTTOKEN123');
          resolve()
        }, 1000);
      })
    }
  },
  mutations: {
    SET_TOKEN (state: any, payload: Object) {
      state.token = payload;
    }
  }
}