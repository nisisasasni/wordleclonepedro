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
    reset
  } = useContext(AppContext);
  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) {
        if (event.key === "Enter") {
          reset()
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
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "Kamu benar!" : "Nice try bos"}</h3>
      <h3>Jawabannya {correctWord.toUpperCase()}</h3>
      {gameOver.guessedWord}
      <div onClick={reset} id="upper-btn">Mulai Baru</div>
    </div>
  );
}

export default GameOver;
