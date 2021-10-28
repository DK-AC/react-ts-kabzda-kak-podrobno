import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'React_Stories/Accordion',
    component: Accordion,
    arg: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
    return (<Accordion {...args} />)
}

export const CollapsedTrue = Template.bind({});

CollapsedTrue.args = {
    title: 'Menu',
    setCollapsed: action('CollapsedTrue'),
    collapsed: true
}

export const CollapsedFalse = Template.bind({});

CollapsedFalse.args = {
    title: 'Menu',
    setCollapsed: action('CollapsedFalse'),
    collapsed: false
}


