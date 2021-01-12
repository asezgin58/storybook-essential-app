import { Story, Meta } from '@storybook/react/types-6-0';

import {Header, Button} from '../components';

export default {
    title: 'Layout/Header',
    component: Header,
    subcomponents: {Button},
    parameters: {
        docs: {
            description: {
                component: `<div><p>The <strong>Header</strong> Component</p></div>`,
            },
        },
    }
} as Meta;

const Template: Story<any> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {};