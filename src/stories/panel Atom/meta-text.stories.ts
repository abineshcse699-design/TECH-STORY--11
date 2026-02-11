import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MetaTextComponent } from '../../pages/panel atom/meta-text.component/meta-text.component';

const meta: Meta<MetaTextComponent> = {
  title: 'Atoms/MetaText',
  component: MetaTextComponent,
  decorators: [
    moduleMetadata({
      imports: [MetaTextComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    tgCode: { control: 'text' },
    saveDate: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<MetaTextComponent>;

export const Default: Story = {
  args: {
    tgCode: 'TG/export_test_2',
    saveDate: 'Saved: 02 Dec, 2025 - 31 Dec, 2025',
  },
};
