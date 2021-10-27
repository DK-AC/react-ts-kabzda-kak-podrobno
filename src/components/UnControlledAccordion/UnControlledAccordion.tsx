import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    title: string
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

export const UnControlledAccordion = ({title}: UnControlledAccordionPropsType) => {
    console.log('UnControlledAccordion rendering')

    const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={title}
                            setCollapsed={setCollapsed}
                            collapsed={collapsed}
            />
            {collapsed && <AccordionBody/>}
        </div>
    );
};

export const AccordionTitle = ({title, setCollapsed, collapsed}: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')

    const onChangeCollapsedHandler = () => setCollapsed(!collapsed)
    return (
        <h2 onClick={onChangeCollapsedHandler}>{title}</h2>
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