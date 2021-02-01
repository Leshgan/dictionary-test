import { SET } from '@/utils/store';
import { getWords } from '@/services/api';
import { filterWords, searchWord, sortWords } from '@/utils';

const state = () => ({
  query: null,
  filter: {
    adjective: false,
    verb: false,
    noun: false,
  },
});

const getters = {
  favorites: (s, _getters, rootState) => {
    const { query, filter: filt } = s;
    let { favorites } = rootState.favorites;
    if (query) {
      favorites = filterWords(searchWord(query, favorites), filt);
    }
    return favorites;
  }
};

const mutations = {
  SET,
  filter(s, payload) {
    SET(s.filter, { type: payload.prop, value: payload.value });
  },
};

const actions = {
  /**
   * Filter action from Home component
   * @param context
   * @param payload {Object}
   * @return {Promise<void>}
   * @constructor
   */
  async Home({ commit }, payload) {
    commit('SET', { type: 'error', value: null }, { root: true });
    commit('SET', { type: 'loading', value: true }, { root: true });
    try {
      const { q, filter } = payload;
      let { data } = await getWords(q);
      // sort, filter and taking first 10 words
      data = filterWords(
        data.sort(sortWords), filter
      ).slice(0, 10);
      commit('SET', { type: 'words', value: data }, { root: true });
    } catch (e) {
      commit('SET', { type: 'error', value: e.message }, { root: true });
    } finally {
      commit('SET', { type: 'loading', value: false }, { root: true });
    }
  },
  Favorites() {
    // no need
  },
  clear({ commit }) {
    commit('SET', { type: 'query', value: null });
  }
};

export const filter = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
