import Vue from 'vue';
import Vuex from 'vuex';
import { favorites } from '@/store/favorites';
import { SET } from '@/utils/store';
import { getWords } from "@/services/api";

Vue.use(Vuex);

const state = {
  words: null,
  loading: false,
  error: null,
};

const getters = {};

const mutations = {
  SET,
};

const actions = {
  getWords: async ({ commit }, q) => {
    commit('SET', { type: 'error', value: null });
    commit('SET', { type: 'loading', value: true });
    try {
      const { data } = await getWords(q);
      commit('SET', { type: 'words', value: data });
    } catch (e) {
      commit('SET', { type: 'error', value: e.message });
    } finally {
      commit('SET', { type: 'loading', value: false });
    }
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: { favorites },
});
