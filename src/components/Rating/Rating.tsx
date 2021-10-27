import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type PropsType = {
    valueStar: RatingValueType
    setRatingValue: (valueStar: RatingValueType) => void
}

export const Rating = ({valueStar, setRatingValue}: PropsType) => {

    console.log('Rating rendering')


    return (
        <div>
            <Star selected={valueStar > 0} setRatingValue={setRatingValue} valueStar={1}/>
            <Star selected={valueStar > 1} setRatingValue={setRatingValue} valueStar={2}/>
            <Star selected={valueStar > 2} setRatingValue={setRatingValue} valueStar={3}/>
            <Star selected={valueStar > 3} setRatingValue={setRatingValue} valueStar={4}/>
            <Star selected={valueStar > 4} setRatingValue={setRatingValue} valueStar={5}/>
        </div>
    );
};


type StarPropsType = {
    selected: boolean
    valueStar: RatingValueType
    setRatingValue: (valueStar: RatingValueType) => void

}

const Star = ({selected, valueStar, setRatingValue}: StarPropsType) => {

    const onChangeRatingHandler = () => setRatingValue(valueStar)

    console.log('Star rendering')
    return (
        <span onClick={onChangeRatingHandler}>
            {selected ? <b>star </b> : 'star '}
        </span>
    );
};