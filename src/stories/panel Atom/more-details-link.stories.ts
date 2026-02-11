import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MoreDetailsLinkComponent } from '../../pages/panel atom/more-details-link.component/more-details-link.component';

const meta: Meta<MoreDetailsLinkComponent> = {
  title: 'Atoms/MoreDetailsLink',
  component: MoreDetailsLinkComponent,
  decorators: [
    moduleMetadata({
      imports: [MoreDetailsLinkComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    expanded: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<MoreDetailsLinkComponent>;

export const Collapsed: Story = {
  args: { expanded: false },
};

export const Expanded: Story = {
  args: { expanded: true },
};
