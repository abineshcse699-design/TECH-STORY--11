import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TabComponent } from '../../pages/components/Atoms/tab.component/tab.component';
import { MatTabsModule } from '@angular/material/tabs';

const meta: Meta<TabComponent> = {
  title: 'Atoms/Tab',
  component: TabComponent,
  decorators: [
    moduleMetadata({
      imports: [TabComponent, MatTabsModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<TabComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <mat-tab-group>
        <app-tab label="In Progress"></app-tab>
        <app-tab label="Submitted"></app-tab>
      </mat-tab-group>
    `,
  }),
};
