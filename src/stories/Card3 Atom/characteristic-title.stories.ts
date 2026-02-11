import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CharacteristicTitleComponent } from '../../pages/Card3 Atom/characteristic-title.component/characteristic-title.component';

const meta: Meta<CharacteristicTitleComponent> = {
  title: 'Atoms/Characteristic Title',
  component: CharacteristicTitleComponent,
  decorators: [
    moduleMetadata({
      imports: [CharacteristicTitleComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
Green underlined title used in expanded detail rows.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<CharacteristicTitleComponent>;

export const Default: Story = {
  args: {
    title: 'Tree: Vigor',
  },
};

export const LeafExample: Story = {
  args: {
    title: 'Leaf: Length',
  },
};
