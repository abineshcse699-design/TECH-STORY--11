// tab-item.atom.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TabItemAtom } from '../../pages/Tab2 atom/tab-item/tab-item';

const meta: Meta<TabItemAtom> = {
  title: 'Atoms/TabItem',
  component: TabItemAtom,
  decorators: [
    moduleMetadata({
      imports: [TabItemAtom],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<TabItemAtom>;

export const Default: Story = {
  args: {
    label: 'In Progress (5)',
    active: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Submitted (3)',
    active: true,
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:10px;">
        <app-tab-item label="In Progress (5)"></app-tab-item>
        <app-tab-item label="Submitted (3)" [active]="true"></app-tab-item>
      </div>
    `,
  }),
};
