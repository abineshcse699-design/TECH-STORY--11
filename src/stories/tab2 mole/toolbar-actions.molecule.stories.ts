import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ToolbarActionsMolecule } from '../../pages/Tab2 molecule/toolbar-actions/toolbar-actions';

const meta: Meta<ToolbarActionsMolecule> = {
  title: 'Molecules/Toolbar Actions',
  component: ToolbarActionsMolecule,
  decorators: [
    moduleMetadata({
      imports: [ToolbarActionsMolecule],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ToolbarActionsMolecule>;

export const Default: Story = {};

export const InContainer: Story = {
  render: () => ({
    template: `
      <div style="display:flex; justify-content:flex-end; padding:10px; border:1px solid #e0e0e0;">
        <app-toolbar-actions></app-toolbar-actions>
      </div>
    `,
  }),
};
