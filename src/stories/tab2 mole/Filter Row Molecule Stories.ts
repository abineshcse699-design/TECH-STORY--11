import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FilterRowMolecule } from '../../pages/Tab2 molecule/filter-row/filter-row';

const meta: Meta<FilterRowMolecule> = {
  title: 'Molecules/Filter Row',
  component: FilterRowMolecule,
  decorators: [
    moduleMetadata({
      imports: [FilterRowMolecule],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<FilterRowMolecule>;

export const Default: Story = {};
