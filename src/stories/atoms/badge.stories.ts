import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BadgeComponent } from '../../pages/molecules/badge.component/badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Atoms/Badge',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [BadgeComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['Pending revision', 'Approved', 'Rejected'],
    },
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Pending: Story = {
  args: { status: 'Pending revision' },
};

export const Approved: Story = {
  args: { status: 'Approved' },
};

export const Rejected: Story = {
  args: { status: 'Rejected' },
};

export const AllStatuses: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;">
        <app-badge status="Pending revision"></app-badge>
        <app-badge status="Approved"></app-badge>
        <app-badge status="Rejected"></app-badge>
      </div>
    `,
  }),
};
