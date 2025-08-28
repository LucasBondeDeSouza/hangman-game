import React from "react";

export default ({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter }) => {
    const KEYS = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ]

    return (
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-2">
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button 
                        onClick={() => addGuessedLetter(key)}
                        key={key}
                        className={`w-full border-2 border-black aspect-square text-4xl uppercase p-2 font-bold cursor-pointer hover:bg-blue-500 hover:text-white
                        ${isActive && 'bg-blue-500 text-white'} ${isInactive && 'opacity-[.3]'}`}
                        disabled={isInactive || isActive || disabled}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}