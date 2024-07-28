import React, { useContext } from "react";
import { AppContext } from "../App";
import Result from "./Result";

function ResultBoard() {
  return (
    <div className="resultboard">
      {" "}
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={0} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={0} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={0} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={1} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={1} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={1} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={2} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={2} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={2} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={3} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={3} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={3} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={4} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={4} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={4} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={5} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={5} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={5} />
        </div>
      </div>
    </div>
  );
}

export default ResultBoard;
