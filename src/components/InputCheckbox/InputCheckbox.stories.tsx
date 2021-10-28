import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {InputCheckbox} from "./InputCheckbox";
import {action} from "@storybook/addon-actions";


export default {
    title: 'React_Stories/InputCheckbox',
    component: InputCheckbox,
    arg: {},
} as ComponentMeta<typeof InputCheckbox>;

const Template: ComponentStory<typeof InputCheckbox> = (args) => {
    return (<InputCheckbox {...args} />)
}

export const InputCheckboxFalse = Template.bind({});

InputCheckboxFalse.args = {
    checked: false
}

export const InputCheckboxTrue = Template.bind({});

InputCheckboxTrue.args = {
    checked: true
}

export const ChangeModeInputCheckbox = Template.bind({});

ChangeModeInputCheckbox.args = {
    setChecked: action('')
}


