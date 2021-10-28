import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UnControlledRating} from "../../components/UnControlledRating/UnControlledRating";


export default {
    title: 'React_Stories/UnControlledRating',
    component: UnControlledRating,
} as ComponentMeta<typeof UnControlledRating>;

const Template: ComponentStory<typeof UnControlledRating> = (args) => {
    return (<UnControlledRating {...args} />)
}

export const UnControlledRatingTest = Template.bind({});

UnControlledRatingTest.args = {
    onChange: () => action('UnControlledRatingTest'),
}

