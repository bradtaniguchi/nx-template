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
      <h1>Card Header</h1>
    </Card.Header>
    <Card.Body>
      <p>Card Body</p>
    </Card.Body>
    <Card.Actions>
      <div className="flex justify-end">
        <button className="content-end rounded-full p-2 outline outline-slate-200">
          Click me
        </button>
      </div>
    </Card.Actions>
  </Card>
);
Default.args = {};

export const OnlyButton: Story<CardProps> = () => (
  <Card>
    <Card.Body>
      <div className="flex content-center justify-center">
        <button className="rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
          Test Button
        </button>
      </div>
    </Card.Body>
  </Card>
);
