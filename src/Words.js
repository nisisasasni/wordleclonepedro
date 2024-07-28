import wordBank from "./kata_5_huruf.txt";
import dailyWordBank from "./kata_5_huruf_lazim.txt";
export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
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

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(dailyWordBank)
    .then((response) => response.text())
    .then((result) => {
      const dailyWordArr = result.split("\r\n");
      todaysWord =
        dailyWordArr[Math.floor(Math.random() * dailyWordArr.length)];
    });
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\r\n");
      wordSet = new Set(wordArr);
    });

  return { wordSet, todaysWord };
};
