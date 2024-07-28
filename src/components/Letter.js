import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const {
    board,
    setDisabledLetters,
    currAttempt,
    correctWord,
    buttonColor,
    setButtonColor,
  } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
  function nextColor({ letterPos, attemptVal }) {
    const currColor = buttonColor[letterPos][attemptVal];
    const newColor = "blue";
    let btnColor = buttonColor;
    btnColor[letterPos][attemptVal] = newColor;
    console.log("ini" + btnColor);
    setButtonColor(btnColor);
  }
  useEffect(() => {
    if (letter !== "") {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  console.log("ini" + buttonColor[letterPos][attemptVal]);
  return (
    <div
      className="letter"
      onClick={nextColor}
      id={buttonColor[letterPos][attemptVal]}
    >
      {letter}
    </div>
  );
}

export default Letter;
