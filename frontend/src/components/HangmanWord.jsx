import React from "react";

export default ({ reveal = false, guessedLetters, wordToGuess, isWinner }) => {
    
    return (
        <div className="mt-10 flex gap-5 text-5xl sm:text-7xl font-bold uppercase">
            {wordToGuess.split("").map((letter, index) => (
                <span
                    key={index}
                    className="w-12 sm:w-16 border-b-4 border-black flex justify-center"
                >
                    <span
                        className={`
                            ${guessedLetters.includes(letter) || reveal ? "visible" : "invisible"}
                            ${!guessedLetters.includes(letter) && reveal ? "text-red-600" : "text-black"}
                            ${isWinner && 'text-green-600'}
                        `}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
};
