import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { LinkTextComponent } from '../../pages/molecules/link-text.component/link-text.component';

const meta: Meta<LinkTextComponent> = {
  title: 'Atoms/LinkText',
  component: LinkTextComponent,
  decorators: [
    moduleMetadata({
      imports: [LinkTextComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LinkTextComponent>;

export const Default: Story = {
  render: () => ({
    template: `<app-link-text>Delete Application</app-link-text>`,
  }),
};
