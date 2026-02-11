import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { LabelTextComponent } from '../../pages/panel atom/label-text.component/label-text.component';

const meta: Meta<LabelTextComponent> = {
  title: 'Atoms/LabelText12',
  component: LabelTextComponent,
  decorators: [
    moduleMetadata({
      imports: [LabelTextComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<LabelTextComponent>;

export const Default: Story = {
  args: {
    text: 'Main Common Name(s):',
  },
};

export const CustomText: Story = {
  args: {
    text: 'Botanical Name(s):',
  },
};
