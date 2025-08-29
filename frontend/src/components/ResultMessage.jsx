import React from "react";

export default ({ wordToGuess, isLoser, isWinner, onRestart }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh]">
            <div className="p-6 flex flex-col items-center text-center">
                {isWinner && (
                    <>
                        <h1 className="text-3xl font-bold text-green-600">🎉 Você Ganhou!</h1>
                        <p className="mt-4 text-lg">
                            Você acertou a palavra: <span className="font-bold uppercase">{wordToGuess}</span>
                        </p>
                    </>
                )}

                {isLoser && (
                    <>
                        <h1 className="text-3xl font-bold text-red-600">💀 Você Perdeu!</h1>
                        <p className="mt-4 text-lg">
                            A palavra correta era: <span className="font-bold uppercase">{wordToGuess}</span>
                        </p>
                    </>
                )}

                <button
                    onClick={onRestart}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
                >
                    Jogar Novamente
                </button>
            </div>
        </div>
    </div>
  )
}