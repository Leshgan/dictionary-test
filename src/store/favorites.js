import { sortWords } from "@/utils";

const state = () => ({
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
});

const getters = {
  favorites: s => s.favorites.sort(sortWords),
  inFavorites: s => word => s.favorites.findIndex(w => w.word === word.word) > -1,
};

const mutations = {
  TOGGLE(s, payload) {
    const wordIndex = s.favorites.findIndex(w => w.word === payload.word);
    if (wordIndex > -1) {
      // remove item
      s.favorites.splice(wordIndex, 1);
    } else {
      // add item
      s.favorites.push(payload);
    }
    localStorage.setItem('favorites', JSON.stringify(s.favorites));
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
