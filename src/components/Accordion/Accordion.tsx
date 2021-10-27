import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

export const Accordion = ({title, collapsed, setCollapsed}: AccordionPropsType) => {
    console.log('UnControlledAccordion rendering')

    const onChangeCollapsedHandler = () => setCollapsed(!collapsed)
    return (
        <div>
            <AccordionTitle title={title} setCollapsed={onChangeCollapsedHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

const AccordionTitle = ({title, setCollapsed}: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h2 onClick={setCollapsed}>{title}</h2>
    );
};

const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
};