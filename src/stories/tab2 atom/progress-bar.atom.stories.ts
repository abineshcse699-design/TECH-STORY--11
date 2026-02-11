import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ProgressBarAtom } from '../../pages/Tab2 atom/progress-bar.atom/progress-bar.atom';

const meta: Meta<ProgressBarAtom> = {
  title: 'Atoms/Progress Bar',
  component: ProgressBarAtom,
  decorators: [
    moduleMetadata({
      imports: [ProgressBarAtom],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<ProgressBarAtom>;

export const ThirtyFivePercent: Story = {
  args: { value: 35 },
};

export const SeventyFivePercent: Story = {
  args: { value: 75 },
};

export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display:flex; flex-direction:column; gap:15px; width:400px;">
        <app-progress-bar [value]="10"></app-progress-bar>
        <app-progress-bar [value]="35"></app-progress-bar>
        <app-progress-bar [value]="75"></app-progress-bar>
      </div>
    `,
  }),
};
