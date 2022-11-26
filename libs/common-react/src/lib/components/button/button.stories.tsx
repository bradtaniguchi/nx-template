import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';
import { ButtonLinkProps } from '../button-link/button-link';

export default {
  component: Button,
  title: 'Button',
} as Meta;

export const Default: Story<ButtonProps> = () => <Button>Click Me</Button>;
Default.args = {};

export const WithColor: Story<ButtonProps> = () => (
  <Button className="bg-blue-300 hover:bg-blue-400 focus:bg-blue-400 focus:outline focus:outline-blue-400">
    I'm Blue!
  </Button>
);
WithColor.args = {};

export const ButtonLink: Story<ButtonLinkProps> = () => (
  <ButtonLink href="https://www.google.com">Click Me</ButtonLink>
);
ButtonLink.args = {};
