import React, { useState } from "react"

type SubmitImageProps = {
    eventHandler: (string: string) => void,
    buttonText: string
}

const SubmitImage: React.FC<SubmitImageProps> = ({ eventHandler, buttonText }) => {

    const [input, changeInput] = useState("")

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => changeInput(e.target.value)

    const handleOnClick = () => {
        eventHandler(input)
        changeInput("")
    }

    return (
        <div>
            <input onChange={(e) => handleOnChange(e)} value={input} />
            <button onClick={() => handleOnClick()}>{buttonText}</button>
        </div>
    )
}

export default SubmitImage