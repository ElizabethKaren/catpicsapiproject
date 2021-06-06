import React from "react"

type Breed = {
    id: string,
    name: string,
    description: string,
    temperament: string,
    wikipedia_url: string,
    image: {
        url: string
    }
}

type SelectDropdownProps = {
    array: Breed[],
    onChangeFunc: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ array, onChangeFunc }) => {

    if (array === []) return <div></div>
    return (
        <div>
            <label>
                Fav Cat Breed:
            </label>
            <select onChange={(e) => onChangeFunc(e)}>
                {array.map(obj => <option key={obj.id} value={obj.description}>{obj.name}</option>)}
            </select>
        </div>
    )
}

export default SelectDropdown