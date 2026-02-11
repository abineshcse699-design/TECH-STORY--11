import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FilterInputAtom } from '../../pages/Tab2 atom/filter-input.atom/filter-input.atom';

const meta: Meta<FilterInputAtom> = {
  title: 'Atoms/Filter Input',
  component: FilterInputAtom,
  decorators: [
    moduleMetadata({
      imports: [FilterInputAtom],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    calendar: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<FilterInputAtom>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    calendar: false,
  },
};

export const WithCalendar: Story = {
  args: {
    placeholder: 'Modified...',
    calendar: true,
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:20px; width:500px;">
        <app-filter-input placeholder="Crop"></app-filter-input>
        <app-filter-input placeholder="Modified..." [calendar]="true"></app-filter-input>
      </div>
    `,
  }),
};
