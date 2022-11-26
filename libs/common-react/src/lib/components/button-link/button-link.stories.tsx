import { Story, Meta } from '@storybook/react';
import { ButtonLink, ButtonLinkProps } from './button-link';

export default {
  component: ButtonLink,
  title: 'ButtonLink',
} as Meta;

export const Default: Story<ButtonLinkProps> = () => (
  <ButtonLink href="https://www.google.com">Click Me</ButtonLink>
);
Default.args = {};

export const WithColor: Story<ButtonLinkProps> = () => (
  <ButtonLink className="bg-blue-300 hover:bg-blue-400 focus:bg-blue-400 focus:outline focus:outline-blue-400">
    I'm Blue!
  </ButtonLink>
);
WithColor.args = {};
