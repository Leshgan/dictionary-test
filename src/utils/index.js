export const sortWords = (a, b) => {
  const { word: wordA } = a;
  const { word: wordB } = b;
  let result = 0;
  if (wordA && wordB) {
    if (wordA.toLowerCase() > wordB.toLowerCase()) {
      result = 1;
    } else if (wordA < wordB) {
      result = -1;
    }
  }
  return result;
};

const mapFilter = ([val]) => {
  switch (val) {
    case 'adjective':
      return 'adj';
    case 'noun':
      return 'n';
    case 'verb':
      return 'v';
    default:
      return null
  }
};

export const transformTag = tag => {
  switch (tag) {
    case 'adj':
      return 'adjective';
    case 'n':
      return 'noun';
    case 'v':
      return 'verb';
    default:
      return tag
  }
};

/**
 * Filtering words from API
 * @param words
 * @param filter
 * @return {*}
 */
export const filterWords = (words, filter) => {
  if (!words.length) {
    return words;
  }
  // exclude phrases
  words = words.filter(word => word.word.split(' ').length === 1);
  // getting filter from Sidebar in right format
  const filterBy = Object.entries(filter)
    .filter(([, value]) => value)
    .map(mapFilter);
  return filterBy.length
    ? words.filter(word => word.tags && word.tags.some(tag => filterBy.includes(tag)))
    : words;
};
