import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HeaderToolbarMolecule } from '../../pages/Tab2 molecule/header-toolbar/header-toolbar';

const meta: Meta<HeaderToolbarMolecule> = {
  title: 'Molecules/Header Toolbar',
  component: HeaderToolbarMolecule,
  decorators: [
    moduleMetadata({
      imports: [HeaderToolbarMolecule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    activeTab: {
      control: 'select',
      options: ['inProgress', 'submitted'],
    },
  },
};

export default meta;
type Story = StoryObj<HeaderToolbarMolecule>;

export const InProgress: Story = {
  args: { activeTab: 'inProgress' },
};

export const Submitted: Story = {
  args: { activeTab: 'submitted' },
};

export const DashboardPreview: Story = {
  render: () => ({
    template: `
      <div style="background:#f8f9f9; padding:20px;">
        <app-header-toolbar activeTab="inProgress"></app-header-toolbar>
      </div>
    `,
  }),
};
