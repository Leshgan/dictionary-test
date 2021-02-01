/**
 * commit value to state
 * @param state
 * @param payload Object { type: state<type>, value: <data> }
 * @return {*}
 */
export const SET = (state, payload) => state[payload.type] = payload.value;
