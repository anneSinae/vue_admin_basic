import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    token: "",
    sample: "my sample",
  },
  getters: {
    isLogined: (state) => {
      return state.token !== "";
    },
    mySample: (state) => {
      return state.sample;
    } 
  },
  actions: {
    updateToken({commit}, token) {
      commit("UPDATE_TOKEN", token);
    },
    updateSample({commit}, sample) {
      commit("UPDATE_SAMPLE", sample);
    }
  },
  mutations: {
    UPDATE_TOKEN(state, token) {
      state.token = token;
    },
    UPDATE_SAMPLE(state, sample) {
      state.sample = sample;
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
