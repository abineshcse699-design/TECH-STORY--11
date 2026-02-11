import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DetailsComponent } from '../../pages/card2 moleculr/details.component/details.component';

import { CharacteristicTitleComponent } from '../../pages/Card3 Atom/characteristic-title.component/characteristic-title.component';
import { DetailRowComponent } from '../../pages/Card3 Atom/detail-row.component/detail-row.component';

const meta: Meta<DetailsComponent> = {
  title: 'Molecules/Characteristic Details',
  component:DetailsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        DetailsComponent,
        CharacteristicTitleComponent,
        DetailRowComponent,
      ],
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
Expanded detail section for a characteristic.

Includes:
- Green characteristic title
- List of detail rows
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<DetailsComponent>;

export const Default: Story = {
  args: {
    title: 'Tree: Vigor',
    details: [
      { label: 'Very weak', variety: 'Grenadier', note: '1' },
      { label: 'Medium', variety: 'Gala, Pinova', note: '5' },
      { label: 'Strong', variety: 'Elstar', note: '7' },
    ],
  },
};

export const SingleRow: Story = {
  args: {
    title: 'Leaf: Length',
    details: [
      { label: 'Medium', variety: 'Kasumi', note: '3' },
    ],
  },
};

export const EmptyState: Story = {
  args: {
    title: 'Resistance Test',
    details: [],
  },
};
