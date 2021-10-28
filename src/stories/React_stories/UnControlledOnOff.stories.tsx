import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {UnControlledOnOff} from "../../components/UnControlledOnOff/UnControlledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'React_Stories/UnControlledOnOff',
    component: UnControlledOnOff,
    arg: {
        onChangeAction: 1
    },
} as ComponentMeta<typeof UnControlledOnOff>;

const Template: ComponentStory<typeof UnControlledOnOff> = (args) => {
    return (<UnControlledOnOff {...args} />)
}

export const UnControlledOnOffSwitch = Template.bind({});

UnControlledOnOffSwitch.args = {
    onChange: action('UnControlledOnOffSwitch')
}

