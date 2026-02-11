import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TabsGroupMolecule } from '../../pages/Tab2 molecule/tabs-group/tabs-group';

const meta: Meta<TabsGroupMolecule> = {
  title: 'Molecules/Tabs Group1',
  component: TabsGroupMolecule,
  decorators: [
    moduleMetadata({
      imports: [TabsGroupMolecule],
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
type Story = StoryObj<TabsGroupMolecule>;

export const InProgress: Story = {
  args: { activeTab: 'inProgress' },
};

export const Submitted: Story = {
  args: { activeTab: 'submitted' },
};
