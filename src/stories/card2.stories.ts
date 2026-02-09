import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { Card2 } from '../app/cards/card2/card2';

const meta: Meta<Card2> = {
  title: 'Components/ApplicationCard',
  component: Card2,
  decorators: [
    moduleMetadata({
      imports: [Card2],
    }),
    applicationConfig({
      providers: [],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Application Card component displaying:

- International Reference Number (IRN)
- Current status badge
- Secondary actions (Delete, Copy, Download)
- Primary actions (Edit, Pay, Sign)

## Usage

\`\`\`typescript
import { Card2 } from 'upov-ui';

@Component({
  standalone: true,
  imports: [Card2],
  template: \`
    <app-card2></app-card2>
  \`
})
export class MyComponent {}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    irnNumber: {
      control: 'text',
      description: 'International Reference Number displayed in the card',
    },
    status: {
      control: 'text',
      description: 'Current application status',
    },
  },
};

export default meta;
type Story = StoryObj<Card2>;

export const Default: Story = {
  args: {
    irnNumber: 'XU_30202600000002 (NLI)',
    status: 'Pending revision',
  },
};
export const Approved: Story = {
  args: {
    irnNumber: 'XU_30202600000045 (EU)',
    status: 'Approved',
  },
};
export const Rejected: Story = {
  args: {
    irnNumber: 'XU_30202600000100 (US)',
    status: 'Rejected',
  },
};
export const LongIRN: Story = {
  args: {
    irnNumber: 'XU_30202600000002_EXTREMELY_LONG_REFERENCE_NUMBER_TEST_CASE_001',
    status: 'Pending revision',
  },
};
export const NarrowContainer: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 600px; border: 1px dashed #ccc; padding: 16px;">
        <app-card2
          [irnNumber]="irnNumber"
          [status]="status">
        </app-card2>
      </div>
    `,
  }),
  args: {
    irnNumber: 'XU_30202600000002 (NLI)',
    status: 'Pending revision',
  },
};
export const MultipleCards: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px;">
        <app-card2></app-card2>
        <app-card2></app-card2>
        <app-card2></app-card2>
      </div>
    `,
  }),
};
