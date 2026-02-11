import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ValueTextComponent } from '../../pages/value-text.component/value-text.component';

const meta: Meta<ValueTextComponent> = {
  title: 'Atoms/Value Text',
  component: ValueTextComponent,
  decorators: [
    moduleMetadata({
      imports: [ValueTextComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ValueTextComponent>;

export const Default: Story = {
  args: {
    text: 'European Pear',
  },
};

export const CodesExample: Story = {
  args: {
    text: 'PYRUS_COM; PYRUS_BCO; PYRUS_CPB; PYRUS_CUS',
  },
};

export const Playground: Story = {
  args: {
    text: 'Dynamic Value Text',
  },
};
