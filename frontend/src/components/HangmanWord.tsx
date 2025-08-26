type HangmanWordProps = {}

const HangmanWord = () => {
    const word = "test"
    const guessedLetters = ["t", "e", "g"]

    return (
        <div className="flex gap-[0.25em] text-[6rem] font-bold uppercase">
            {word.split("").map((letter, index) => (
                <span className="border-b-[0.1em] border-black" key={index}>
                    <span className={`${guessedLetters.includes(letter) ? 'visible' : 'hidden'}`}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord
