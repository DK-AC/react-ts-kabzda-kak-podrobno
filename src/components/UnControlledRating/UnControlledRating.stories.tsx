import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UnControlledRating} from "./UnControlledRating";


export default {
    title: 'React_Stories/UnControlledRating',
    component: UnControlledRating,
} as ComponentMeta<typeof UnControlledRating>;

const Template: ComponentStory<typeof UnControlledRating> = (args) => {
    return (<UnControlledRating {...args} />)
}

export const UnControlledRatingTest0 = Template.bind({});

UnControlledRatingTest0.args = {
    defaultValue: 0,
    changeDefaultValue: action('UnControlledRatingTest:')
}

export const UnControlledRatingTest1 = Template.bind({});

UnControlledRatingTest1.args = {
    defaultValue: 1,
    changeDefaultValue: action('UnControlledRatingTest:')
}

export const UnControlledRatingTest2 = Template.bind({});

UnControlledRatingTest2.args = {
    defaultValue: 2,
    changeDefaultValue: action('UnControlledRatingTest:')
}
export const UnControlledRatingTest3 = Template.bind({});

UnControlledRatingTest3.args = {
    defaultValue: 3,
    changeDefaultValue: action('UnControlledRatingTest:')
}
export const UnControlledRatingTest4 = Template.bind({});

UnControlledRatingTest4.args = {
    defaultValue: 4,
    changeDefaultValue: action('UnControlledRatingTest:')
}
export const UnControlledRatingTest5 = Template.bind({});

UnControlledRatingTest5.args = {
    defaultValue: 5,
    changeDefaultValue: action('UnControlledRatingTest:')
}

