import { Story, Meta } from '@storybook/react';
import { Card } from './card';

export default {
  component: Card,
  title: 'Card',
} as Meta;

const Template: Story<unknown> = () => <Card />;

export const Default = Template.bind({});
Default.args = {};
