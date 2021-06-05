import React from "react"

interface CatImageProps {
    string: string,
    eventHandler: () => void
}

const CatImage: React.FC<CatImageProps> = ({ string, eventHandler }) => {
    if (string === "") return <div></div>
    return (
        <div>
            <img src={string} alt="" onClick={() => eventHandler()} width="500" height="450"/>
        </div>
    )
}

export default CatImage