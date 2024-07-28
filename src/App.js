import "./App.css";
import Board from "./components/Board";
import ResultBoard from "./components/ResultBoard";
import Keyboard from "./components/Keyboard";
import {
  boardDefault,
  resultBoardDefault,
  generateWordSet,
  buttonColorDefault,
} from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./components/GameOver";

export const AppContext = createContext();

function App() {
  const [buttonColor, setButtonColor] = useState(buttonColorDefault);
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

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);
  function remove_character(str, char_pos) {
    // Extract the substring from the beginning of str up to (but not including) char_pos
    let part1 = str.substring(0, char_pos);
    // Extract the substring from char_pos + 1 to the end of str
    let part2 = str.substring(char_pos + 1, str.length);
    // Return the concatenation of part1 and part2, effectively removing the character at char_pos
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
      const res = calculateResult(correctWord, currWord.toLowerCase());
      updateResult(currAttempt.attempt, res);
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }

    if (currWord === correctWord) {
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
          buttonColor,
          setButtonColor,
        }}
      >
        <div className="game">
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
