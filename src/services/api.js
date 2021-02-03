import axios from 'axios';

const baseUrl = 'https://api.datamuse.com/words';

/**
 * api GET request
 * @param q string
 * @return {Promise}
 */
export const getWords = q => axios.get(`${baseUrl}?sp=${q}*&md=dp`);
