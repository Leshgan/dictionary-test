/**
 * commit value to state
 * @param state
 * @param payload Object { type: state<type>, value: <data> }
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
}

export const saveToLocalStorage = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
}

export const getFromLocalStorage = (key, isObject = false) => isObject
  ? JSON.parse(localStorage.getItem(key))
  : localStorage.getItem(key);
