import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const nextColor = (e) => {
  let a = e.target.style.backgroundColor;
  console.log(a);
};
function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  useEffect(() => {
    if (letter !== "") {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  const nextColor = (e) => {
    let a = e.target.id;
    console.log("warnae " + a);
    if (a === "blank") {
      e.target.id = "error";
    } else if (a === "error") {
      e.target.id = "almost";
    } else if (a === "almost") {
      e.target.id = "correct";
    } else {
      e.target.id = "blank";
    }
  };
  return (
    <div className="letter" onClick={nextColor} id="blank">
      {letter}
    </div>
  );
}

export default Letter;
