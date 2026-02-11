import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TypeMethodComponent } from '../../pages/Card3 Atom/type-method.component/type-method.component';

const meta: Meta<TypeMethodComponent> = {
  title: 'Atoms/Type Method',
  component: TypeMethodComponent,
  decorators: [
    moduleMetadata({
      imports: [TypeMethodComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    method: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
Displays characteristic type and method side-by-side.

### Usage
\`\`\`html
<app-type-method type="QN" method="MG/VG"></app-type-method>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TypeMethodComponent>;

export const Default: Story = {
  args: {
    type: 'QN',
    method: 'MG/VG',
  },
};

export const QLExample: Story = {
  args: {
    type: 'QL',
    method: 'VG',
  },
};
