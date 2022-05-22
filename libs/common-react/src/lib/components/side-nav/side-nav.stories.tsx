import { Meta, Story } from '@storybook/react';
import { SideNav, SideNavProps } from './side-nav';
export default {
  component: SideNav,
  title: 'HeaderBar',
  argTypes: {
    onHamburgerClick: {
      action: 'onHamburgerClick',
    },
    onMenuClick: {
      action: 'onMenuClick',
    },
  } as Record<keyof SideNavProps, unknown>,
} as Meta;

const Template: Story<SideNavProps> = (args) => <SideNav {...args} />;

export const Default = Template.bind({});
Default.args = {};
