import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import ResultBoard from "./ResultBoard";


function Result({ letterPos, attemptVal }) {
  const { resultboard } = useContext(AppContext);

  return <div className="result">{resultboard[attemptVal][letterPos]}</div>;
}

export default Result;
