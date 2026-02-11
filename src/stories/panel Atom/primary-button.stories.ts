import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { PrimaryButtonComponent } from '../../pages/panel atom/primary-button.component/primary-button.component';

const meta: Meta<PrimaryButtonComponent> = {
  title: 'Atoms/PrimaryButton',
  component: PrimaryButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [PrimaryButtonComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<PrimaryButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Submit',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Submit',
    disabled: true,
  },
};

export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <upov-primary-button
        [label]="label"
        [disabled]="disabled">
      </upov-primary-button>
    `,
  }),
};
