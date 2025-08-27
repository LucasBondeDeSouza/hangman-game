import React from "react";

export default () => {
    const word = "test"
    const guessedLetters = ["t", "s", "g"]

    return (
        <div className="mt-10 flex gap-5 text-5xl sm:text-7xl font-bold uppercase">
            {word.split("").map((letter, index) => (
                <span key={index} className="border-b-5">
                    <span className={guessedLetters.includes(letter) ? 'visible' : 'invisible'}>{letter}</span>
                </span>
            ))}
        </div>
    )
}