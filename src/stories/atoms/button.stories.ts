import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../../pages/molecules/button.component/button.component';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, ButtonComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Reusable button atom from the design system.

## Usage

\`\`\`html
<app-button variant="primary">
  Save
</app-button>
\`\`\`

### Variants
- text
- outline
- primary
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outline', 'primary'],
    },
    disabled: { control: 'boolean' },
    clicked: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: { variant: 'primary' },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant">Primary</app-button>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;">
        <app-button variant="text">Text</app-button>
        <app-button variant="outline">Outline</app-button>
        <app-button variant="primary">Primary</app-button>
      </div>
    `,
  }),
};

export const Playground: Story = {
  args: { variant: 'primary', disabled: false },
};
