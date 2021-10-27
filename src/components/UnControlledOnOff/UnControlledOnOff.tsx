import React, {useState} from 'react';

type PropsType = {
    onChange: (onOff: boolean) => void
}

export const UnControlledOnOff = React.memo(({onChange}: PropsType) => {
    console.log('UnControlledOnOff rendering')

    const [value, setValue] = useState(false)

    console.log('on:', value)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: value ? 'green' : 'white',
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        margin: '5px',
        background: !value ? 'red' : 'white',
    }

    const circle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        background: value ? 'green' : 'red',
    }

    const onClickChangeHandler = () => {
        setValue(true)
        onChange(true)
    }

    const offClickChangeHandler = () => {
        setValue(false)
        onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickChangeHandler}>
                On
            </div>
            <div style={offStyle} onClick={offClickChangeHandler}>Off
            </div>
            <div style={circle}></div>
            <div>{onChange}</div>
        </div>
    );
});

