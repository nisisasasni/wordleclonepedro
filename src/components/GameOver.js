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
      <h3>Jawabannya {correctWord.toUpperCase()}</h3>
      {gameOver.guessedWord}
      <a href="https://katlaxoo.vercel.app">
        <div style={{ padding: "10px" }} id="upper-btn">
          Mulai baru
        </div>
      </a>
    </div>
  );
}

export default GameOver;
