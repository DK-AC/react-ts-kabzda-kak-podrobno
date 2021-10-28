import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Rating} from "../components/Rating/Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'React_Stories/Rating',
    component: Rating,
    arg: {
        valueStar: 0 | 1 | 2 | 3 | 4 | 5,

    },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => {
    return (<Rating {...args} />)
}

export const Star = Template.bind({});

Star.args = {
    valueStar: 2,
    setRatingValue: action('Rating')
}


