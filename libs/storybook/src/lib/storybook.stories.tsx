import Card from '@mui/material/Card';
import { Meta, Story } from '@storybook/react';
import { Storybook, StorybookProps } from './storybook';

export default {
  component: Storybook,
  title: 'Storybook',
  argTypes: { onButtonClick: { action: 'onButtonClick' } },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
} as Meta;

const Template: Story<StorybookProps> = (args) => <Storybook {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithProps = Template.bind({});
WithProps.args = {
  exampleProp: <div>Test Prop!</div>,
};

export const WithButton = Template.bind({});
WithButton.args = {
  onButtonClick: console.log,
};
// WithButton.play = ({ args, canvasElement }) => {
//   const canvas = within(canvasElement);
//   userEvent.click(canvas.getByRole('button'));
//   expect(args.onButtonClick).toHaveBeenCalled();
// };

export const WithOutButton = Template.bind({});
WithOutButton.args = {
  onButtonClick: null as unknown as undefined,
};
