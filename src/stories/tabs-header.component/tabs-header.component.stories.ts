import { Meta, StoryObj } from '@storybook/angular';
import { TabsHeaderComponent } from './tabs-header.component';

const meta: Meta<TabsHeaderComponent> = {
  title: 'UI/Tabs Header',
  component: TabsHeaderComponent,
  argTypes: {
    active: {
      control: 'radio',
      options: ['progress', 'submitted'],
    },
  },
};

export default meta;
type Story = StoryObj<TabsHeaderComponent>;

export const ProgressActive: Story = {
  args: {
    active: 'progress',
  },
};

export const SubmittedActive: Story = {
  args: {
    active: 'submitted',
  },
};
export const WithContainerBackground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding:40px; background:#f4f6f7;">
        <app-tabs-header [active]="active"></app-tabs-header>
      </div>
    `,
  }),
  args: {
    active: 'progress',
  },
};
export const SubmittedSelected: Story = {
  args: {
    active: 'submitted',
  },
};
export const Centered: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display:flex; justify-content:center; padding:40px;">
        <app-tabs-header [active]="active"></app-tabs-header>
      </div>
    `,
  }),
  args: {
    active: 'submitted',
  },
};
export const InteractiveExample: Story = {
  render: () => ({
    template: `
      <app-tabs-header
        (tabChange)="onTabChange($event)">
      </app-tabs-header>
    `,
    props: {
      onTabChange: (tab: string) => {
        console.log('Selected Tab:', tab);
      },
    },
  }),
};
