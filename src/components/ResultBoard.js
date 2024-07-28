import React, { useContext } from "react";
import { AppContext } from "../App";
import Result from "./Result";

function ResultBoard() {
  return (
    <div className="resultboard">
      {" "}
      <div className="row">
        <Result letterPos={0} attemptVal={0} />
        <Result letterPos={1} attemptVal={0} />
        <Result letterPos={2} attemptVal={0} />
      </div>
      <div className="row">
        <Result letterPos={0} attemptVal={1} />
        <Result letterPos={1} attemptVal={1} />
        <Result letterPos={2} attemptVal={1} />
      </div>
      <div className="row">
        <Result letterPos={0} attemptVal={2} />
        <Result letterPos={1} attemptVal={2} />
        <Result letterPos={2} attemptVal={2} />
      </div>
      <div className="row">
        <Result letterPos={0} attemptVal={3} />
        <Result letterPos={1} attemptVal={3} />
        <Result letterPos={2} attemptVal={3} />
      </div>
      <div className="row">
        <Result letterPos={0} attemptVal={4} />
        <Result letterPos={1} attemptVal={4} />
        <Result letterPos={2} attemptVal={4} />
      </div>
      <div className="row">
        <Result letterPos={0} attemptVal={5} />
        <Result letterPos={1} attemptVal={5} />
        <Result letterPos={2} attemptVal={5} />
      </div>
    </div>
  );
}

export default ResultBoard;
