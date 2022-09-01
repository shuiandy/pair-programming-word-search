const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });
  it("should return true if the word is present", function() {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "I", "I", "N", "F", "E", "L", "D"],
        ["E", "F", "C", "F", "Q", "U", "A", "L"],
        ["I", "M", "J", "T", "E", "V", "R", "G"],
        ["N", "H", "C", "S", "Y", "E", "R", "L"],
        ["F", "F", "R", "E", "N", "E", "Y", "B"],
        ["E", "B", "T", "W", "A", "P", "A", "I"],
        ["L", "D", "C", "A", "K", "U", "A", "S"],
        ["D", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });
  it("should return true if the word is present", function() {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "I", "I", "N", "F", "E", "L", "D"],
        ["I", "E", "C", "F", "Q", "U", "A", "L"],
        ["I", "M", "I", "T", "E", "V", "R", "G"],
        ["N", "H", "C", "N", "Y", "E", "R", "L"],
        ["F", "F", "R", "E", "F", "E", "Y", "B"],
        ["E", "B", "T", "W", "A", "E", "A", "I"],
        ["L", "D", "C", "A", "K", "U", "L", "S"],
        ["D", "Z", "K", "F", "Q", "U", "A", "D"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });
});
