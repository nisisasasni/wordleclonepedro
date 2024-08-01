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
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={6} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={6} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={6} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={7} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={7} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={7} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={8} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={8} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={8} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={9} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={9} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={9} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={10} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={10} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={10} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={11} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={11} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={11} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={12} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={12} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={12} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={13} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={13} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={13} />
        </div>
      </div>
      <div className="row">
        <div className="column1">
          <Result letterPos={0} attemptVal={14} />
        </div>
        <div className="column2">
          <Result letterPos={1} attemptVal={14} />
        </div>
        <div className="column3">
          <Result letterPos={2} attemptVal={14} />
        </div>
      </div>
    </div>
  );
}

export default ResultBoard;
