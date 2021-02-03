import { SET, getObjectFromLocalStorage } from '@/utils/store';
import { filterWords, searchWord } from '@/utils';

const saveFavorites = items => {
  localStorage.setItem('favorites', JSON.stringify(items));
};

const state = () => ({
  favorites: getObjectFromLocalStorage('favorites', []),
});

const getters = {
  favorites: ({ favorites }, _getters, rootState) => {
    const { query, filter } = rootState.filter;
    return filterWords(
      query
        ? searchWord(query, favorites)
        : favorites,
      filter,
    );
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
  },
};

const actions = {
  toggleAction: ({ commit }, payload) => {
    commit('TOGGLE', payload);
  },
};

export const favorites = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
