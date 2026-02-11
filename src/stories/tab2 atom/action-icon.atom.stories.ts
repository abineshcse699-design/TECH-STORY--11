import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ActionIconAtom } from '../../pages/Tab2 atom/action-icon.atom/action-icon.atom';

const meta: Meta<ActionIconAtom> = {
  title: 'Atoms/Action Icon',
  component: ActionIconAtom,
  decorators: [
    moduleMetadata({
      imports: [ActionIconAtom],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ActionIconAtom>;

export const Default: Story = {};
