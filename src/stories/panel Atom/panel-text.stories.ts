import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ValueTextComponent } from '../../pages/panel atom/value-text.component/value-text.component';

const meta: Meta<ValueTextComponent> = {
  title: 'Atoms/ValueText12',
  component: ValueTextComponent,
  decorators: [
    moduleMetadata({
      imports: [ValueTextComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ValueTextComponent>;

export const Default: Story = {
  args: {
    value: 'European Pear',
  },
};

export const LongText: Story = {
  args: {
    value: 'PYRUS_COM; PYRUS_BCO; PYRUS_CPB; PYRUS_CUS',
  },
};
