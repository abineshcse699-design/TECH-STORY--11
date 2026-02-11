import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HeadingComponent } from '../../pages/molecules/heading.component/heading.component';

const meta: Meta<HeadingComponent> = {
  title: 'Atoms/Heading',
  component: HeadingComponent,
  decorators: [
    moduleMetadata({
      imports: [HeadingComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<HeadingComponent>;

export const Default: Story = {
  args: { text: 'XU_30202600000002 (NLI)' },
};
