export const saveToLocalStorage = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};

/**
 * commit value to state
 * @param {Object} state Vuex State
 * @param {Object} payload { type: state<type>, value: <data> }
 * @return {*}
 */
export const SET = (state, payload) => {
  const {
    type,
    value,
    save = false,
  } = payload;
  state[type] = value;
  if (save) {
    saveToLocalStorage(type, value);
  }
};

export const getStringFromLocalStorage = (
  key,
  defaultValue = null,
) => localStorage.getItem(key) || defaultValue;

export const getObjectFromLocalStorage = (
  key,
  defaultValue = null,
) => JSON.parse(getStringFromLocalStorage(key)) || defaultValue;

export const getBoolFromLocalStorage = (
  key,
  defaultValue = false,
) => localStorage.getItem(key) === 'true' || defaultValue;
