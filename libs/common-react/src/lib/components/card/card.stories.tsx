import { CardProps } from '@mui/material';
import { Story, Meta } from '@storybook/react';
import { Card } from './card';

export default {
  component: Card,
  title: 'Card',
} as Meta;

export const Default: Story<CardProps> = () => (
  <Card>
    <Card.Header>
      <h1>Hello world this is the card header</h1>
    </Card.Header>
    <Card.Body>
      <p>Hello world this is the card body.</p>
    </Card.Body>
  </Card>
);
Default.args = {};
