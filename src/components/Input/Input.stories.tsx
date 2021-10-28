import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Input} from "./Input";
import {action} from "@storybook/addon-actions";


export default {
    title: 'React_Stories/Input',
    component: Input,
    arg: {
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    return (<Input {...args} />)
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


