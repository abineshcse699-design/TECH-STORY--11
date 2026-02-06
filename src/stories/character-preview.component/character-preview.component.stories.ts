import { Meta, StoryObj } from '@storybook/angular';

import { CharacterPreviewComponent, CharacterSection } from './character-preview.component';

const mockSections: CharacterSection[] = [

  {
    id: 1,
    title: 'Tree: vigor',
    type: 'QN MG/VG',
    levels: ['weak', 'medium', 'strong'],
    examples: ['Grenadier', 'Gala', 'Elstar'],
    notes: ['1', '5', '9']

  },

  {
    id: 2,
    title: 'Tree: type',
    type: 'QL VG',
    levels: ['columnar', 'ramified'],
    examples: ['MacExcel', 'Golden Delicious'],
    notes: ['1', '2']
  }
];

const meta: Meta<CharacterPreviewComponent> = {
  title: 'Application/Character Preview',
  component: CharacterPreviewComponent,
};

export default meta;
type Story = StoryObj<CharacterPreviewComponent>;

export const Default: Story = {
  args: {
    title: 'List of Characteristics',
    sections: mockSections,
  },
};

export const Empty: Story = {
  args: {
    title: 'List of Characteristics',
    sections: [],
  },
};

export const SingleSection: Story = {
  args: {
    title: 'Single Characteristic',
    sections: [
      {
        id: 1,
        title: 'Tree: vigor',
        type: 'QN MG/VG',
        levels: ['weak', 'medium', 'strong'],
        examples: ['Grenadier', 'Gala'],
        notes: ['1', '5']
      }
    ],
  },
};
export const ManySections: Story = {
  args: {
    title: 'Multiple Characteristics',
    sections: Array.from({ length: 5 }).map((_, i) => ({
      id: i + 1,
      title: `Characteristic ${i + 1}`,
      type: 'QN MG/VG',
      levels: ['low', 'medium', 'high'],
      examples: ['Example A', 'Example B'],
      notes: ['1', '2', '3']
    })),
  },
};

export const LongContent: Story = {
  args: {
    title: 'Long Content Example',
    sections: [
      {
        id: 1,
        title: 'Tree: very long biological classification characteristic',
        type: 'QN MG/VG',
        levels: [
          'extremely weak vegetative development observed in cold regions',
          'moderate seasonal growth performance',
          'very strong dominant growth pattern'
        ],
        examples: [
          'Example Variety With Long Name 001',
          'Example Variety With Long Name 002'
        ],
        notes: ['1', '5', '9']
      }
    ],
  },
};

export const LargeDataset: Story = {
  args: {
    title: 'Large Dataset',
    sections: Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      title: `Large Section ${i + 1}`,
      type: 'QN',
      levels: ['low', 'medium', 'high', 'very high'],
      examples: ['Variety A', 'Variety B', 'Variety C'],
      notes: ['1', '2', '3', '4']
    })),
  },
};
