import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {InputTest} from "./InputTest";
import {action} from "@storybook/addon-actions";


export default {
    title: 'React_Stories/InputTest',
    component: InputTest,
    arg: {
    },
} as ComponentMeta<typeof InputTest>;

const Template: ComponentStory<typeof InputTest> = (args) => {
    return (<InputTest {...args} />)
}

export const ChangeInputTest = Template.bind({});

ChangeInputTest.args = {
    setInputValue: action(''),
}

export const noChangeInputTest = Template.bind({});

noChangeInputTest.args = {
    value:'noChangeInputTest',
    setInputValue: action(''),
}


