import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {UnControlledOnOff} from "../components/UnControlledOnOff/UnControlledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'React_Stories/UnControlledOnOff',
    component: UnControlledOnOff,
} as ComponentMeta<typeof UnControlledOnOff>;

const Template: ComponentStory<typeof UnControlledOnOff> = (args) => {
    return (<UnControlledOnOff {...args} />)
}

export const UnControlledOnSwitch = Template.bind({});

UnControlledOnSwitch.args = {
    onChange: action('UnControlledOnOffSwitch'),
    modeOn: true
}


export const UnControlledOffSwitch = Template.bind({});
UnControlledOffSwitch.args = {
    onChange: action('UnControlledOnOffSwitch'),
    modeOn: false
}

