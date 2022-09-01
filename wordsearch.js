const wordSearch = (letters, word) => {
  for (let row = 0; row < letters.length; row++) {
    for (let col = 0; col < letters[0].length; col++) {
      if (letters[row][col] === word[0]) {
        if (search(letters, word, row, col)) {
          return true;
        }
      }
    }
  }
  return false;
};

const search = (letters, word, row, col) => {
  if (word.length === 0) return true;
  if (
    row < 0 ||
    row >= letters.length ||
    col < 0 ||
    col >= letters[0].length ||
    letters[row][col] !== word[0]
  ) {
    return false;
  }
  const tmp = letters[row][col];
  letters[row][col] = "#";
  let result =
    search(letters, word.slice(1), row + 1, col) ||
    search(letters, word.slice(1), row - 1, col) ||
    search(letters, word.slice(1), row, col + 1) ||
    search(letters, word.slice(1), row, col - 1) ||
    search(letters, word.slice(1), row + 1, col + 1) ||
    search(letters, word.slice(1), row + 1, col - 1) ||
    search(letters, word.slice(1), row - 1, col + 1) ||
    search(letters, word.slice(1), row - 1, col - 1);
  letters[row][col] = tmp;
  return result;
};
module.exports = wordSearch;