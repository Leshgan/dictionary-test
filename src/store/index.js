import Vue from 'vue';
import Vuex from 'vuex';
import { favorites } from '@/store/favorites';
import { SET } from '@/utils/store';
import { filter } from '@/store/filter';

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

const actions = {};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: { favorites, filter },
});
