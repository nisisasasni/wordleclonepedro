import wordBank4 from "./kata_4_huruf.txt";
import dailyWordBank4 from "./kata_4_huruf_lazim.txt";
import wordBank5 from "./kata_5_huruf.txt";
import dailyWordBank5 from "./kata_5_huruf_lazim.txt";
import wordBank6 from "./kata_6_huruf.txt";
import dailyWordBank6 from "./kata_6_huruf_lazim.txt";
export const boardDefault = [
  [],
  [],
  [],
  [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ],
  [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ],
  [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ],
];
export const resultBoardDefault = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
export const changeableColorDefault = [
  [],
  [],
  [],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
  ],
];

export const generateWordSet = async (wordLength) => {
  console.log(wordLength);

  let wordSet;
  let todaysWord;
  if (wordLength === 4) {
    await fetch(dailyWordBank4)
      .then((response) => response.text())
      .then((result) => {
        const dailyWordArr = result.split("\r\n");
        todaysWord =
          dailyWordArr[Math.floor(Math.random() * dailyWordArr.length)];
      });
    await fetch(wordBank4)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split("\r\n");
        wordSet = new Set(wordArr);
      });
  } else if (wordLength === 5) {
    await fetch(dailyWordBank5)
      .then((response) => response.text())
      .then((result) => {
        const dailyWordArr = result.split("\r\n");
        todaysWord =
          dailyWordArr[Math.floor(Math.random() * dailyWordArr.length)];
      });
    await fetch(wordBank5)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split("\r\n");
        wordSet = new Set(wordArr);
      });
  } else if (wordLength === 6) {
    await fetch(dailyWordBank6)
      .then((response) => response.text())
      .then((result) => {
        const dailyWordArr = result.split("\r\n");
        todaysWord =
          dailyWordArr[Math.floor(Math.random() * dailyWordArr.length)];
      });
    await fetch(wordBank6)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split("\r\n");
        wordSet = new Set(wordArr);
      });
  }
  return { wordSet, todaysWord };
};
