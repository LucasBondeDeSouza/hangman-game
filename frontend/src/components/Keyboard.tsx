import { useState } from "react"

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

const Keyboard = () => {
    const [active, setActive] = useState(false)
    const [inactive, setInactive] = useState(false)

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-[.5rem]">
            {KEYS.map(key => {
                return (
                    <button className={`w-[100%] border-2 aspect-square text-[2.5rem] uppercase p-[.5rem] font-bold cursor-pointer hover:bg-blue-500 focus:bg-blue-500 ${active && 'bg-blue-500 text-white'} ${inactive && 'opacity-[.3]'}`} key={key}>{key}</button>
                )
            })}
        </div>
    )
}

export default Keyboard
