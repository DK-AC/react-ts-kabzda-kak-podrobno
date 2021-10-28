import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/Rating/Rating";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {InputTest} from "./components/InputTest/InputTest";

export const App = () => {
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState(false)
    const [onOff, setOnOff] = useState(false)
    const [inputValue, setInputValue] = useState('')


    return (
        <div>
            {/*<PageTitle title={' This is App component'}/>*/}
            {/*<Accordion title={'Menu'} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
            {/*<Accordion title={'User'} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
            {/*<Rating valueStar={ratingValue} setRatingValue={setRatingValue}/>*/}
            <UnControlledRating changeDefaultValue={() => {
            }}/>
            {/*<UnControlledOnOff onChange={setOnOff}/>{onOff.toString()}*/}
            {/*<UnControlledAccordion title={'Menu'}/>*/}
            {/*<UnControlledAccordion title={'User'}/>*/}
            {/*<OnOff onOff={onOff} setOnOff={setOnOff}/>*/}
            <InputTest value={inputValue} setInputValue={setInputValue}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = ({title}: PageTitlePropsType) => {
    console.log('PageTitle rendering')
    return (
        <h1> {title}</h1>
    )

}


