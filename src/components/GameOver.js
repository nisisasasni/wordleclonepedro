import React, { useCallback, useEffect, useContext } from "react";

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
  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) {
        if (event.key === "Enter") {
          window.location.replace("https://katlaxoo.vercel.app");
        }
      }
      else return;
    }
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="gameOver" onKeyDown={handleKeyboard}>
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
