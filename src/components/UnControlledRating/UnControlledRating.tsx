import React, {useState} from 'react';
import {RatingValueType} from "../Rating/Rating";

type PropsType = {}

export const UnControlledRating = ({}: PropsType) => {
    console.log('Rating rendering')

    const [valueStar, setValueStar] = useState<RatingValueType>(0)


    return (
        <div>
            <Star selected={valueStar > 0} changeValueStar={() => setValueStar(1)}/>
            <Star selected={valueStar > 1} changeValueStar={() => setValueStar(2)}/>
            <Star selected={valueStar > 2} changeValueStar={() => setValueStar(3)}/>
            <Star selected={valueStar > 3} changeValueStar={() => setValueStar(4)}/>
            <Star selected={valueStar > 4} changeValueStar={() => setValueStar(5)}/>
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
