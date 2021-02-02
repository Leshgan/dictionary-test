import { filterWords, searchWord } from '@/utils';
import { SET } from '@/utils/store';

const saveFavorites = items => {
  localStorage.setItem('favorites', JSON.stringify(items));
}

const state = () => ({
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
});

const getters = {
  favorites: (s, _getters, rootState) => {
    const { query, filter } = rootState.filter;
    if (query) {
      return filterWords(searchWord(query, s.favorites), filter);
    }
    return s.favorites;
  },
  inFavorites: s => word => s.favorites.findIndex(w => w.word === word.word) > -1,
};

const mutations = {
  SET_FAVORITES(s, payload) {
    SET(s, { type: 'favorites', value: payload });
    saveFavorites(payload);
  },
  SET,
  TOGGLE(s, payload) {
    const wordIndex = s.favorites.findIndex(w => w.word === payload.word);
    if (wordIndex > -1) {
      // remove item
      s.favorites.splice(wordIndex, 1);
    } else {
      // add item
      s.favorites.push(payload);
    }
    saveFavorites(s.favorites);
  }
};

const actions = {
  toggleAction: ({ commit }, payload) => {
    console.log('ACTION', payload);
    commit('TOGGLE', payload);
  }
};

export const favorites = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
