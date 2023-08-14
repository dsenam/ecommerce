import type { Meta, StoryObj } from '@storybook/react';

import  Button  from '.';

const meta = {
  title: 'Example/Buttons',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
    args: {
        primary: true, 
        label: 'Primary Button',
      },
};

export const ButtonSecondary: Story = {
    args: {
        primary: false, 
        label: 'Secondary Button',
      },
};