import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const nextColor = (e) => {
  let a = e.target.style.backgroundColor;
  console.log(a);
};
function Letter({ letterPos, attemptVal }) {
  const {
    board,
    setDisabledLetters,
    currAttempt,
    correctWord,
    changeableColor,
  } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  useEffect(() => {
    if (letter !== "") {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  const nextColor = () => {
    var elements = document.getElementsByClassName("letter");
    const idx = attemptVal * 5 + letterPos;
    if (changeableColor[idx] === 1) {
      if (elements[idx].id === "blank") {
        elements[idx].id = "error";
      } else if (elements[idx].id === "error") {
        elements[idx].id = "almost";
      } else if (elements[idx].id === "almost") {
        elements[idx].id = "correct";
      } else {
        elements[idx].id = "blank";
      }
    }
  };
  return (
    <div className="letter" onClick={nextColor} id="blank">
      {letter}
    </div>
  );
}

export default Letter;
