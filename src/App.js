import "./App.css";
import Board from "./components/Board";
import ResultBoard from "./components/ResultBoard";
import Keyboard from "./components/Keyboard";
import { boardDefault, resultBoardDefault, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./components/GameOver";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [resultboard, setResultBoard] = useState(resultBoardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [changeableColor, setChangeableColor] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
      console.log(words.todaysWord);
    });
  }, []);
  function remove_character(str, char_pos) {
    let part1 = str.substring(0, char_pos);
    let part2 = str.substring(char_pos + 1, str.length);
    return part1 + part2;
  }
  function calculateResult(key, guess) {
    var rightletter;
    let green, yellow, red;
    let i;
    rightletter = [];
    for (i = 0; i < 5; i++) {
      if (key[i] === guess[i]) {
        rightletter.push(i);
      }
    }
    for (i = rightletter.length - 1; i >= -1; i--) {
      guess = remove_character(guess, rightletter[i]);
      key = remove_character(key, rightletter[i]);
    }
    green = rightletter.length;
    yellow = 0;
    while (guess.length > 0) {
      for (i = 0; i < key.length; i++) {
        if (guess[0] === key[i]) {
          yellow = yellow + 1;
          key = remove_character(key, i);
          break;
        }
      }
      guess = remove_character(guess, 0);
    }
    yellow = yellow / 2;
    red = 5 - green - yellow;
    return [green, yellow, red];
  }
  const onEnter = () => {
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      const res = calculateResult(
        correctWord.toLowerCase(),
        currWord.toLowerCase(),
      );
      updateResult(currAttempt.attempt, res);
      const start = 5 * currAttempt.attempt;
      var elements = document.getElementsByClassName("letter");
      if (res[0] === 5) {
        for (let i = 0; i < 5; i++) {
          elements[start + i].id = "correct";
        }
      } else if (res[1] === 5) {
        for (let i = 0; i < 5; i++) {
          elements[start + i].id = "almost";
        }
      } else if (res[2] === 5) {
        for (let i = 0; i < 5; i++) {
          elements[start + i].id = "error";
        }
      } else {
        let newChangeable = changeableColor;
        const start = 5 * currAttempt.attempt;

        for (let i = 0; i < 5; i++) {
          newChangeable[start + i] = 1;
        }
        setChangeableColor(newChangeable);
        console.log(changeableColor);
      }

      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }

    if (currWord.toLowerCase() === correctWord.toLowerCase()) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currAttempt.attempt === 8) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };
  const updateResult = (attemptVal, res) => {
    const newResultBoard = [...resultboard];
    newResultBoard[attemptVal][0] = res[0];
    newResultBoard[attemptVal][1] = res[1];
    newResultBoard[attemptVal][2] = res[2];
    setResultBoard(newResultBoard);
  };
  const resetColor = () => {
    var elements = document.getElementsByClassName("letter");
    for (let i = 0; i < elements.length; i++) {
      if (changeableColor[i] === 1) {
        elements[i].id = "blank";
      }
    }
  };
  const restartGame = () => {
    setCurrAttempt({ attempt: 0, letter: 0 });
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
      console.log(words.todaysWord);
    });
    setDisabledLetters([]);
    var elements = document.getElementsByClassName("letter");
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
      elements[i].id = "blank";
    }
    var elements = document.getElementsByClassName("result");
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }
  };
  return (
    <div className="App">
      <nav>
        <h1>Katlaxoo</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          correctWord,
          onSelectLetter,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver,
          resultboard,
          changeableColor,
        }}
      >
        <div className="game">
          <div className="upper-section">
            <div className="restart-game" id="upper-btn" onClick={restartGame}>
              Mulai Baru
            </div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div className="reset-btn" id="upper-btn" onClick={resetColor}>
              Reset Warna
            </div>
          </div>
          <div className="bnr">
            <Board />
            <ResultBoard />
          </div>
          <div className="lower_section">
            {gameOver.gameOver ? <GameOver /> : <Keyboard />}
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
