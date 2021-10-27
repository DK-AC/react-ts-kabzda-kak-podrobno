import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {AccordionTitle} from "../../components/UnControlledAccordion/UnControlledAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'React_Stories/AccordionTitle',
    component: AccordionTitle,
    arg: {},
} as ComponentMeta<typeof AccordionTitle>;

const Template: ComponentStory<typeof AccordionTitle> = (args) => {
    return (<AccordionTitle {...args} />)
}

export const UnControlledAccordionTitleTrue = Template.bind({});

UnControlledAccordionTitleTrue.args = {
    title: 'Menu',
    collapsed: true,
    setCollapsed:action('UnControlledAccordionTitleTrue')
}

export const UnControlledAccordionTitleFalse = Template.bind({});

UnControlledAccordionTitleFalse.args = {
    title: 'User',
    collapsed: false,
    setCollapsed:action('UnControlledAccordionTitleFalse')
}




