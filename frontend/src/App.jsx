import React, { useState } from "react";
import words from "./wordList.json"
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

export default () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState([])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  )
}