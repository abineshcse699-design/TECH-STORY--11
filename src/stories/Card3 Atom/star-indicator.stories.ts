import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { StarIndicatorComponent } from '../../pages/Card3 Atom/star-indicator.componen/star-indicator.componen';

const meta: Meta<StarIndicatorComponent> = {
  title: 'Atoms/Star Indicator',
  component: StarIndicatorComponent,
  decorators: [
    moduleMetadata({
      imports: [StarIndicatorComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    star: {
      control: 'boolean',
      description: 'Controls visibility of star indicator',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Displays (*) when star is true.

### Usage
\`\`\`html
<app-star-indicator [star]="true"></app-star-indicator>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<StarIndicatorComponent>;

export const Visible: Story = {
  args: {
    star: true,
  },
};

export const Hidden: Story = {
  args: {
    star: false,
  },
};
