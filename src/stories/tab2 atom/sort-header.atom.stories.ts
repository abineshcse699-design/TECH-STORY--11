import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { SortHeaderAtom } from '../../pages/Tab2 atom/sort-header.atom/sort-header.atom';

const meta: Meta<SortHeaderAtom> = {
  title: 'Atoms/Sort Header',
  component: SortHeaderAtom,
  decorators: [
    moduleMetadata({
      imports: [SortHeaderAtom],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SortHeaderAtom>;

export const Default: Story = {
  args: {
    label: 'Modified on',
    icon: 'sort',
  },
};

export const WithLineBreak: Story = {
  args: {
    label: 'International <br> Reference Number',
    icon: 'import_export',
  },
};
