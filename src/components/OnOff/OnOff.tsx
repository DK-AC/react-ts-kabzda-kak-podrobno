import React from "react";

type PropsType = {
    onOff: boolean
    setOnOff: (onOff: boolean) => void
}

export const OnOff = ({onOff, setOnOff}: PropsType) => {
    console.log('OnOff rendering')

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: onOff ? 'green' : 'white',
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        margin: '5px',
        background: !onOff ? 'red' : 'white',
    }

    const circle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        background: onOff ? 'green' : 'red',
    }

    const onChangeOnHandler=() => setOnOff(true)
    const onChangeOffHandler=() => setOnOff(false)

    return (
        <div>
            <div style={onStyle} onClick={onChangeOnHandler}>On</div>
            <div style={offStyle} onClick={onChangeOffHandler}>Off</div>
            <div style={circle}></div>
        </div>
    );
}