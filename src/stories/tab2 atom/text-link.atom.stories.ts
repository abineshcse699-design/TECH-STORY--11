import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TextLinkAtom } from '../../pages/Tab2 atom/text-link.atom/text-link.atom';

const meta: Meta<TextLinkAtom> = {
  title: 'Atoms/Text Link',
  component: TextLinkAtom,
  decorators: [
    moduleMetadata({
      imports: [TextLinkAtom],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TextLinkAtom>;

export const FilterLink: Story = {
  args: {
    icon: 'filter_list',
    label: 'Show filters',
  },
};

export const ColumnsLink: Story = {
  args: {
    icon: 'view_column',
    label: 'Columns',
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:20px;">
        <app-text-link icon="filter_list" label="Show filters"></app-text-link>
        <app-text-link icon="view_column" label="Columns"></app-text-link>
      </div>
    `,
  }),
};
