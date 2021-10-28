import React, {ChangeEvent} from "react";

type PropsType = {
    value: string
    setInputValue: (value: string) => void
}

export const Input = ({setInputValue, value}: PropsType) => {


    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <div>
            <label>InputTest: </label>
            <input value={value} onChange={onChangeValue}/>
        </div>
    );
};