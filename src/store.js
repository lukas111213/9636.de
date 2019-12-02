import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    passport: [],
    realPassport: "oyen"
  },
  mutations: {
    setPassword: async (state, product) => {
      state.passport.push(product);
    },
    resetPassword: async (state, product) => {
      state.passport = product;
    }
  },
  actions: {
    addPassword: async ({ rootState, state, commit }, payload) => {
      commit("setPassword", payload);
    },
    deletePassword: async ({ rootState, state, commit }, payload) => {
      commit("resetPassword", []);
    }
  },
  modules: {}
});
