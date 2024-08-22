// store/index.js

import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    data: [],  // State to hold the data
    loading: false,  // State to manage loading
    error: null,  // State to handle errors
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async fetchData({ commit }) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      try {
        const response = await axios.get('https://api-woman-secrets.spider-te8.com/api/testing');
        commit('SET_DATA', response.data);
      } catch (error) {
        commit('SET_ERROR', error.message);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
  getters: {
    getData(state) {
      return state.data;
    },
    isLoading(state) {
      return state.loading;
    },
    getError(state) {
      return state.error;
    },
  },
});

export default store;
