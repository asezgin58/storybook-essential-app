import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {Button} from '../components';
import {IButtonProps} from "../components/Button/type";

export default {
    title: 'Form/Button',
    component: Button,
    parameters: {
        docs: {
            description: {
                component: `<div><p>The <strong>Button</strong> Component</p></div>`,
            },
        },
    },
    argTypes: {
        adornment: {
            table: {
                category: 'Adornment',
            },
            control: {
                type: 'select',
                options: {
                    default: undefined,
                    withElementUsage: <span style={{marginRight: 5}}>+</span>,
                    withTextUsage: 'Text',
                },
            },
        },
        primary: {
            table: {
                category: 'Style',
            }
        },
        backgroundColor: {
            table: {
                category: 'Style',
            },
            control: 'color'
        },
        size: {
            table: {
                category: 'Style',
            }
        },
        onClick: {
            table: {
                category: 'Events',
            }
        }
    },
    args: {
        label: 'Button'
    }
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {};

Secondary.parameters = {
    docs: {
        description: {
            story: `Secondary Button Story Description`
        }
    }
};

export const Large = Template.bind({});
Large.args = {
    size: 'large'
};

Large.parameters = {
    docs: {
        description: {
            story: `Large Button Story Description`
        }
    }
};

export const Small = Template.bind({});
Small.args = {
    size: 'small'
};

Small.parameters = {
    docs: {
        description: {
            story: `Small Button Story Description`
        }
    }
};
