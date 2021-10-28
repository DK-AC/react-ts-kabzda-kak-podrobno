import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {UnControlledAccordion} from "../components/UnControlledAccordion/UnControlledAccordion";


export default {
    title: 'React_Stories/UnControlledAccordion',
    component: UnControlledAccordion,
} as ComponentMeta<typeof UnControlledAccordion>;

const Template: ComponentStory<typeof UnControlledAccordion> = (args) => {
    return (<UnControlledAccordion {...args} />)
}

export const UnControlledAccordionTitle = Template.bind({});

UnControlledAccordionTitle.args = {
    title: 'UnControlledAccordionTitle Test'
}






