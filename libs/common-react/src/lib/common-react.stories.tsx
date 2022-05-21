import { Story, Meta } from '@storybook/react';
import { CommonReact, CommonReactProps } from './common-react';

export default {
  component: CommonReact,
  title: 'CommonReact',
} as Meta;

const Template: Story<CommonReactProps> = (args) => <CommonReact {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
