import React, {ChangeEvent} from "react";

type PropsType = {
    checked: boolean
    setChecked: (checked: boolean) => void
}

export const InputCheckbox = ({setChecked, checked}: PropsType) => {

    const onchangeInputCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return (
        <div>
            <label>Input Checkbox: </label>
            <input type={'checkbox'}
                   checked={checked}
                   onChange={onchangeInputCheckbox}
            />
        </div>
    );
};