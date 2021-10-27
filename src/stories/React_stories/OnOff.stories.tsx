import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "../../components/OnOff/OnOff";


export default {
    title: 'React_Stories/UnControlledOnOff',
    component: OnOff,
    arg: {},
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => {
    return (<OnOff {...args} />)
}

export const Primary = Template.bind({});

Primary.args = {
    setOnOff: action(`onOff`),
    onOff: false
}
