import { Story, Meta } from '@storybook/react';
import { HeaderBar, HeaderBarProps } from './header-bar';

export default {
  component: HeaderBar,
  title: 'HeaderBar',
  argTypes: {
    onHamburgerClick: {
      action: 'onHamburgerClick',
    },
    onMenuClick: {
      action: 'onMenuClick',
    },
  } as Record<keyof HeaderBarProps, unknown>,
} as Meta;

const Template: Story<HeaderBarProps> = (args) => <HeaderBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Empty = Template.bind({});
Empty.args = {
  hideHamburger: true,
  hideMenu: true,
};

export const AuthenticatedEmptyExample = Template.bind({});
AuthenticatedEmptyExample.args = {};

export const WithSearchExample = Template.bind({});
WithSearchExample.args = {};
