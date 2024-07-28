import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Result({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord, currResult } =
    useContext(AppContext);

  return <div className="letter">{0}</div>;
}

export default Result;
