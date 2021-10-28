import React, {useState} from 'react';
import {RatingValueType} from "../Rating/Rating";

type PropsType = {
    defaultValue?: RatingValueType
    changeDefaultValue: (value: RatingValueType) => void
}

export const UnControlledRating = ({defaultValue, changeDefaultValue}: PropsType) => {
    console.log('Rating rendering')

    const [valueStar, setValueStar] = useState<RatingValueType>(defaultValue ? defaultValue : 0)


    return (
        <div>
            <Star selected={valueStar > 0} changeValueStar={() => {
                setValueStar(1)
                changeDefaultValue(1)
            }}/>
            <Star selected={valueStar > 1} changeValueStar={() => {
                setValueStar(2)
                changeDefaultValue(2)
            }}/>
            <Star selected={valueStar > 2} changeValueStar={() => {
                setValueStar(3)
                changeDefaultValue(3)
            }}/>
            <Star selected={valueStar > 3} changeValueStar={() => {
                setValueStar(4)
                changeDefaultValue(4)
            }}/>
            <Star selected={valueStar > 4} changeValueStar={() => {
                setValueStar(5)
                changeDefaultValue(5)
            }}/>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    changeValueStar: () => void

}

const Star = ({selected, changeValueStar,}: StarPropsType) => {

    console.log('Star rendering')
    return (
        <span onClick={changeValueStar}>
            {selected ? <b>star </b> : 'star '}
        </span>
    );
};
