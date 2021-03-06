import { Story, Meta } from '@storybook/react/types-6-0';

import {Header} from '../components';

export default {
    title: 'Other/Directory Example/Header',
    component: Header,
    parameters: {
        docs: {
            description: {
                component: `<div><p>The <strong>Other Example</strong> Component</p></div>`,
            },
        },
    }
} as Meta;

const Template: Story<any> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {};