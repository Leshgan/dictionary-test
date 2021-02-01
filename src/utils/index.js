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
