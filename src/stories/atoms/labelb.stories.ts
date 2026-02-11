import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { LabelComponent } from '../../pages/molecules/label.component/label.component';

const meta: Meta<LabelComponent> = {
  title: 'Atoms/Label2',
  component: LabelComponent,
  decorators: [
    moduleMetadata({
      imports: [LabelComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LabelComponent>;

export const Default: Story = {
  render: () => ({
    template: `<app-label>International Reference Number</app-label>`,
  }),
};
