import React, { useState } from "react"

interface SubmitImageProps {
    eventHandler: (string: string) => void,
    button: string
}

const SubmitImage: React.FC<SubmitImageProps> = ({ eventHandler, button }) => {

    const [input, changeInput] = useState("")

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => changeInput(e.target.value)

    const handleOnClick = () => {
        eventHandler(input)
        changeInput("")
    }

    return (
        <div>
            <input onChange={(e) => handleOnChange(e)} value={input} />
            <button onClick={() => handleOnClick()}>{button}</button>
        </div>
    )
}

export default SubmitImage