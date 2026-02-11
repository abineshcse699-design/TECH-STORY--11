import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { SubmitButtonComponent } from '../../pages/submit-button.component/submit-button.component';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<SubmitButtonComponent> = {
  title: 'Atoms/Submit Button',
  component: SubmitButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [SubmitButtonComponent, MatIconModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    click: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<SubmitButtonComponent>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Centered: Story = {
  render: () => ({
    template: `
      <div style="display:flex;justify-content:center;padding:40px;">
        <app-submit-button></app-submit-button>
      </div>
    `,
  }),
};

export const Playground: Story = {};
