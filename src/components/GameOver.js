import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "Kamu benar!" : "Nice try bos"}</h3>
      <h1>Jawabannya {correctWord}</h1>
      {gameOver.guessedWord}
    </div>
  );
}

export default GameOver;
