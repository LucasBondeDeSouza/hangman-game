import React, { useState } from "react";

export default () => {
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
    const [active, setActive] = useState(false)
    const [inactive, setInactive] = useState(false)

    return (
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-2">
            {KEYS.map(key => {
                return (
                    <button 
                        key={key}
                        className={"w-full border-2 border-black aspect-square text-4xl uppercase p-2 font-bold cursor-pointer hover:bg-blue-500 hover:text-white"}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}