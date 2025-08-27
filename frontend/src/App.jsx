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
    <div className="max-w-[800px] my-8 mx-auto px-2 flex flex-col justify-center items-center">
      <HangmanDrawing />
      <HangmanWord />

      <div className="self-stretch">
        <Keyboard />
      </div>
    </div>
  )
}