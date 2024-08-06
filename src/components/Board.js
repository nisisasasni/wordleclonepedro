import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";

function Board() {
  const { wordLength } = useContext(AppContext);
  if (wordLength === 3) {
    return (
      <div className="board">
        {" "}
        <div className="row">
          <Letter letterPos={0} attemptVal={0} />
          <Letter letterPos={1} attemptVal={0} />
          <Letter letterPos={2} attemptVal={0} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={1} />
          <Letter letterPos={1} attemptVal={1} />
          <Letter letterPos={2} attemptVal={1} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={2} />
          <Letter letterPos={1} attemptVal={2} />
          <Letter letterPos={2} attemptVal={2} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={3} />
          <Letter letterPos={1} attemptVal={3} />
          <Letter letterPos={2} attemptVal={3} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={4} />
          <Letter letterPos={1} attemptVal={4} />
          <Letter letterPos={2} attemptVal={4} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={5} />
          <Letter letterPos={1} attemptVal={5} />
          <Letter letterPos={2} attemptVal={5} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={6} />
          <Letter letterPos={1} attemptVal={6} />
          <Letter letterPos={2} attemptVal={6} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={7} />
          <Letter letterPos={1} attemptVal={7} />
          <Letter letterPos={2} attemptVal={7} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={8} />
          <Letter letterPos={1} attemptVal={8} />
          <Letter letterPos={2} attemptVal={8} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={9} />
          <Letter letterPos={1} attemptVal={9} />
          <Letter letterPos={2} attemptVal={9} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={10} />
          <Letter letterPos={1} attemptVal={10} />
          <Letter letterPos={2} attemptVal={10} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={11} />
          <Letter letterPos={1} attemptVal={11} />
          <Letter letterPos={2} attemptVal={11} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={12} />
          <Letter letterPos={1} attemptVal={12} />
          <Letter letterPos={2} attemptVal={12} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={13} />
          <Letter letterPos={1} attemptVal={13} />
          <Letter letterPos={2} attemptVal={13} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={14} />
          <Letter letterPos={1} attemptVal={14} />
          <Letter letterPos={2} attemptVal={14} />
        </div>
      </div>
    );
  } else if (wordLength === 4) {
    return (
      <div className="board">
        {" "}
        <div className="row">
          <Letter letterPos={0} attemptVal={0} />
          <Letter letterPos={1} attemptVal={0} />
          <Letter letterPos={2} attemptVal={0} />
          <Letter letterPos={3} attemptVal={0} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={1} />
          <Letter letterPos={1} attemptVal={1} />
          <Letter letterPos={2} attemptVal={1} />
          <Letter letterPos={3} attemptVal={1} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={2} />
          <Letter letterPos={1} attemptVal={2} />
          <Letter letterPos={2} attemptVal={2} />
          <Letter letterPos={3} attemptVal={2} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={3} />
          <Letter letterPos={1} attemptVal={3} />
          <Letter letterPos={2} attemptVal={3} />
          <Letter letterPos={3} attemptVal={3} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={4} />
          <Letter letterPos={1} attemptVal={4} />
          <Letter letterPos={2} attemptVal={4} />
          <Letter letterPos={3} attemptVal={4} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={5} />
          <Letter letterPos={1} attemptVal={5} />
          <Letter letterPos={2} attemptVal={5} />
          <Letter letterPos={3} attemptVal={5} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={6} />
          <Letter letterPos={1} attemptVal={6} />
          <Letter letterPos={2} attemptVal={6} />
          <Letter letterPos={3} attemptVal={6} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={7} />
          <Letter letterPos={1} attemptVal={7} />
          <Letter letterPos={2} attemptVal={7} />
          <Letter letterPos={3} attemptVal={7} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={8} />
          <Letter letterPos={1} attemptVal={8} />
          <Letter letterPos={2} attemptVal={8} />
          <Letter letterPos={3} attemptVal={8} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={9} />
          <Letter letterPos={1} attemptVal={9} />
          <Letter letterPos={2} attemptVal={9} />
          <Letter letterPos={3} attemptVal={9} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={10} />
          <Letter letterPos={1} attemptVal={10} />
          <Letter letterPos={2} attemptVal={10} />
          <Letter letterPos={3} attemptVal={10} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={11} />
          <Letter letterPos={1} attemptVal={11} />
          <Letter letterPos={2} attemptVal={11} />
          <Letter letterPos={3} attemptVal={11} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={12} />
          <Letter letterPos={1} attemptVal={12} />
          <Letter letterPos={2} attemptVal={12} />
          <Letter letterPos={3} attemptVal={12} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={13} />
          <Letter letterPos={1} attemptVal={13} />
          <Letter letterPos={2} attemptVal={13} />
          <Letter letterPos={3} attemptVal={13} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={14} />
          <Letter letterPos={1} attemptVal={14} />
          <Letter letterPos={2} attemptVal={14} />
          <Letter letterPos={3} attemptVal={14} />
        </div>

      </div>
    );
  } else if (wordLength === 5) {
    return (
      <div className="board">
        {" "}
        <div className="row">
          <Letter letterPos={0} attemptVal={0} />
          <Letter letterPos={1} attemptVal={0} />
          <Letter letterPos={2} attemptVal={0} />
          <Letter letterPos={3} attemptVal={0} />
          <Letter letterPos={4} attemptVal={0} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={1} />
          <Letter letterPos={1} attemptVal={1} />
          <Letter letterPos={2} attemptVal={1} />
          <Letter letterPos={3} attemptVal={1} />
          <Letter letterPos={4} attemptVal={1} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={2} />
          <Letter letterPos={1} attemptVal={2} />
          <Letter letterPos={2} attemptVal={2} />
          <Letter letterPos={3} attemptVal={2} />
          <Letter letterPos={4} attemptVal={2} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={3} />
          <Letter letterPos={1} attemptVal={3} />
          <Letter letterPos={2} attemptVal={3} />
          <Letter letterPos={3} attemptVal={3} />
          <Letter letterPos={4} attemptVal={3} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={4} />
          <Letter letterPos={1} attemptVal={4} />
          <Letter letterPos={2} attemptVal={4} />
          <Letter letterPos={3} attemptVal={4} />
          <Letter letterPos={4} attemptVal={4} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={5} />
          <Letter letterPos={1} attemptVal={5} />
          <Letter letterPos={2} attemptVal={5} />
          <Letter letterPos={3} attemptVal={5} />
          <Letter letterPos={4} attemptVal={5} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={6} />
          <Letter letterPos={1} attemptVal={6} />
          <Letter letterPos={2} attemptVal={6} />
          <Letter letterPos={3} attemptVal={6} />
          <Letter letterPos={4} attemptVal={6} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={7} />
          <Letter letterPos={1} attemptVal={7} />
          <Letter letterPos={2} attemptVal={7} />
          <Letter letterPos={3} attemptVal={7} />
          <Letter letterPos={4} attemptVal={7} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={8} />
          <Letter letterPos={1} attemptVal={8} />
          <Letter letterPos={2} attemptVal={8} />
          <Letter letterPos={3} attemptVal={8} />
          <Letter letterPos={4} attemptVal={8} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={9} />
          <Letter letterPos={1} attemptVal={9} />
          <Letter letterPos={2} attemptVal={9} />
          <Letter letterPos={3} attemptVal={9} />
          <Letter letterPos={4} attemptVal={9} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={10} />
          <Letter letterPos={1} attemptVal={10} />
          <Letter letterPos={2} attemptVal={10} />
          <Letter letterPos={3} attemptVal={10} />
          <Letter letterPos={4} attemptVal={10} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={11} />
          <Letter letterPos={1} attemptVal={11} />
          <Letter letterPos={2} attemptVal={11} />
          <Letter letterPos={3} attemptVal={11} />
          <Letter letterPos={4} attemptVal={11} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={12} />
          <Letter letterPos={1} attemptVal={12} />
          <Letter letterPos={2} attemptVal={12} />
          <Letter letterPos={3} attemptVal={12} />
          <Letter letterPos={4} attemptVal={12} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={13} />
          <Letter letterPos={1} attemptVal={13} />
          <Letter letterPos={2} attemptVal={13} />
          <Letter letterPos={3} attemptVal={13} />
          <Letter letterPos={4} attemptVal={13} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={14} />
          <Letter letterPos={1} attemptVal={14} />
          <Letter letterPos={2} attemptVal={14} />
          <Letter letterPos={3} attemptVal={14} />
          <Letter letterPos={4} attemptVal={14} />
        </div>
      </div>
    );
  } else if (wordLength === 6) {
    return (
      <div className="board">
        {" "}
        <div className="row">
          <Letter letterPos={0} attemptVal={0} />
          <Letter letterPos={1} attemptVal={0} />
          <Letter letterPos={2} attemptVal={0} />
          <Letter letterPos={3} attemptVal={0} />
          <Letter letterPos={4} attemptVal={0} />
          <Letter letterPos={5} attemptVal={0} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={1} />
          <Letter letterPos={1} attemptVal={1} />
          <Letter letterPos={2} attemptVal={1} />
          <Letter letterPos={3} attemptVal={1} />
          <Letter letterPos={4} attemptVal={1} />
          <Letter letterPos={5} attemptVal={1} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={2} />
          <Letter letterPos={1} attemptVal={2} />
          <Letter letterPos={2} attemptVal={2} />
          <Letter letterPos={3} attemptVal={2} />
          <Letter letterPos={4} attemptVal={2} />
          <Letter letterPos={5} attemptVal={2} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={3} />
          <Letter letterPos={1} attemptVal={3} />
          <Letter letterPos={2} attemptVal={3} />
          <Letter letterPos={3} attemptVal={3} />
          <Letter letterPos={4} attemptVal={3} />
          <Letter letterPos={5} attemptVal={3} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={4} />
          <Letter letterPos={1} attemptVal={4} />
          <Letter letterPos={2} attemptVal={4} />
          <Letter letterPos={3} attemptVal={4} />
          <Letter letterPos={4} attemptVal={4} />
          <Letter letterPos={5} attemptVal={4} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={5} />
          <Letter letterPos={1} attemptVal={5} />
          <Letter letterPos={2} attemptVal={5} />
          <Letter letterPos={3} attemptVal={5} />
          <Letter letterPos={4} attemptVal={5} />
          <Letter letterPos={5} attemptVal={5} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={6} />
          <Letter letterPos={1} attemptVal={6} />
          <Letter letterPos={2} attemptVal={6} />
          <Letter letterPos={3} attemptVal={6} />
          <Letter letterPos={4} attemptVal={6} />
          <Letter letterPos={5} attemptVal={6} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={7} />
          <Letter letterPos={1} attemptVal={7} />
          <Letter letterPos={2} attemptVal={7} />
          <Letter letterPos={3} attemptVal={7} />
          <Letter letterPos={4} attemptVal={7} />
          <Letter letterPos={5} attemptVal={7} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={8} />
          <Letter letterPos={1} attemptVal={8} />
          <Letter letterPos={2} attemptVal={8} />
          <Letter letterPos={3} attemptVal={8} />
          <Letter letterPos={4} attemptVal={8} />
          <Letter letterPos={5} attemptVal={8} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={9} />
          <Letter letterPos={1} attemptVal={9} />
          <Letter letterPos={2} attemptVal={9} />
          <Letter letterPos={3} attemptVal={9} />
          <Letter letterPos={4} attemptVal={9} />
          <Letter letterPos={5} attemptVal={9} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={10} />
          <Letter letterPos={1} attemptVal={10} />
          <Letter letterPos={2} attemptVal={10} />
          <Letter letterPos={3} attemptVal={10} />
          <Letter letterPos={4} attemptVal={10} />
          <Letter letterPos={5} attemptVal={10} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={11} />
          <Letter letterPos={1} attemptVal={11} />
          <Letter letterPos={2} attemptVal={11} />
          <Letter letterPos={3} attemptVal={11} />
          <Letter letterPos={4} attemptVal={11} />
          <Letter letterPos={5} attemptVal={11} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={12} />
          <Letter letterPos={1} attemptVal={12} />
          <Letter letterPos={2} attemptVal={12} />
          <Letter letterPos={3} attemptVal={12} />
          <Letter letterPos={4} attemptVal={12} />
          <Letter letterPos={5} attemptVal={12} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={13} />
          <Letter letterPos={1} attemptVal={13} />
          <Letter letterPos={2} attemptVal={13} />
          <Letter letterPos={3} attemptVal={13} />
          <Letter letterPos={4} attemptVal={13} />
          <Letter letterPos={5} attemptVal={13} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={14} />
          <Letter letterPos={1} attemptVal={14} />
          <Letter letterPos={2} attemptVal={14} />
          <Letter letterPos={3} attemptVal={14} />
          <Letter letterPos={4} attemptVal={14} />
          <Letter letterPos={5} attemptVal={14} />
        </div>

      </div>
    );
  } else if (wordLength === 7){
    return (
      <div className="board">
        {" "}
        <div className="row">
          <Letter letterPos={0} attemptVal={0} />
          <Letter letterPos={1} attemptVal={0} />
          <Letter letterPos={2} attemptVal={0} />
          <Letter letterPos={3} attemptVal={0} />
          <Letter letterPos={4} attemptVal={0} />
          <Letter letterPos={5} attemptVal={0} />
          <Letter letterPos={6} attemptVal={0} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={1} />
          <Letter letterPos={1} attemptVal={1} />
          <Letter letterPos={2} attemptVal={1} />
          <Letter letterPos={3} attemptVal={1} />
          <Letter letterPos={4} attemptVal={1} />
          <Letter letterPos={5} attemptVal={1} />
          <Letter letterPos={6} attemptVal={1} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={2} />
          <Letter letterPos={1} attemptVal={2} />
          <Letter letterPos={2} attemptVal={2} />
          <Letter letterPos={3} attemptVal={2} />
          <Letter letterPos={4} attemptVal={2} />
          <Letter letterPos={5} attemptVal={2} />
          <Letter letterPos={6} attemptVal={2} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={3} />
          <Letter letterPos={1} attemptVal={3} />
          <Letter letterPos={2} attemptVal={3} />
          <Letter letterPos={3} attemptVal={3} />
          <Letter letterPos={4} attemptVal={3} />
          <Letter letterPos={5} attemptVal={3} />
          <Letter letterPos={6} attemptVal={3} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={4} />
          <Letter letterPos={1} attemptVal={4} />
          <Letter letterPos={2} attemptVal={4} />
          <Letter letterPos={3} attemptVal={4} />
          <Letter letterPos={4} attemptVal={4} />
          <Letter letterPos={5} attemptVal={4} />
          <Letter letterPos={6} attemptVal={4} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={5} />
          <Letter letterPos={1} attemptVal={5} />
          <Letter letterPos={2} attemptVal={5} />
          <Letter letterPos={3} attemptVal={5} />
          <Letter letterPos={4} attemptVal={5} />
          <Letter letterPos={5} attemptVal={5} />
          <Letter letterPos={6} attemptVal={5} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={6} />
          <Letter letterPos={1} attemptVal={6} />
          <Letter letterPos={2} attemptVal={6} />
          <Letter letterPos={3} attemptVal={6} />
          <Letter letterPos={4} attemptVal={6} />
          <Letter letterPos={5} attemptVal={6} />
          <Letter letterPos={6} attemptVal={6} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={7} />
          <Letter letterPos={1} attemptVal={7} />
          <Letter letterPos={2} attemptVal={7} />
          <Letter letterPos={3} attemptVal={7} />
          <Letter letterPos={4} attemptVal={7} />
          <Letter letterPos={5} attemptVal={7} />
          <Letter letterPos={6} attemptVal={7} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={8} />
          <Letter letterPos={1} attemptVal={8} />
          <Letter letterPos={2} attemptVal={8} />
          <Letter letterPos={3} attemptVal={8} />
          <Letter letterPos={4} attemptVal={8} />
          <Letter letterPos={5} attemptVal={8} />
          <Letter letterPos={6} attemptVal={8} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={9} />
          <Letter letterPos={1} attemptVal={9} />
          <Letter letterPos={2} attemptVal={9} />
          <Letter letterPos={3} attemptVal={9} />
          <Letter letterPos={4} attemptVal={9} />
          <Letter letterPos={5} attemptVal={9} />
          <Letter letterPos={6} attemptVal={9} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={10} />
          <Letter letterPos={1} attemptVal={10} />
          <Letter letterPos={2} attemptVal={10} />
          <Letter letterPos={3} attemptVal={10} />
          <Letter letterPos={4} attemptVal={10} />
          <Letter letterPos={5} attemptVal={10} />
          <Letter letterPos={6} attemptVal={10} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={11} />
          <Letter letterPos={1} attemptVal={11} />
          <Letter letterPos={2} attemptVal={11} />
          <Letter letterPos={3} attemptVal={11} />
          <Letter letterPos={4} attemptVal={11} />
          <Letter letterPos={5} attemptVal={11} />
          <Letter letterPos={6} attemptVal={11} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={12} />
          <Letter letterPos={1} attemptVal={12} />
          <Letter letterPos={2} attemptVal={12} />
          <Letter letterPos={3} attemptVal={12} />
          <Letter letterPos={4} attemptVal={12} />
          <Letter letterPos={5} attemptVal={12} />
          <Letter letterPos={6} attemptVal={12} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={13} />
          <Letter letterPos={1} attemptVal={13} />
          <Letter letterPos={2} attemptVal={13} />
          <Letter letterPos={3} attemptVal={13} />
          <Letter letterPos={4} attemptVal={13} />
          <Letter letterPos={5} attemptVal={13} />
          <Letter letterPos={6} attemptVal={13} />
        </div>
        <div className="row">
          <Letter letterPos={0} attemptVal={14} />
          <Letter letterPos={1} attemptVal={14} />
          <Letter letterPos={2} attemptVal={14} />
          <Letter letterPos={3} attemptVal={14} />
          <Letter letterPos={4} attemptVal={14} />
          <Letter letterPos={5} attemptVal={14} />
          <Letter letterPos={6} attemptVal={14} />
        </div>
      </div>
    );
  }
}

export default Board;
