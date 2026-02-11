import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { LabelComponent } from '../../pages/label.component/label.component';

const meta: Meta<LabelComponent> = {
  title: 'Atoms/Label',
  component: LabelComponent,
  decorators: [
    moduleMetadata({
      imports: [LabelComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Typography label used for form fields and informational sections.

### Features
- Default and small size
- Genie typography alignment
- Neutral grey color
        `,
      },
    },
  },
  argTypes: {
    text: { control: 'text' },
    small: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<LabelComponent>;

export const Default: Story = {
  args: {
    text: 'Main Common Name(s):',
    small: false,
  },
};

export const Small: Story = {
  args: {
    text: 'Related Links',
    small: true,
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:12px;">
        <app-label text="Default Label"></app-label>
        <app-label text="Small Label" [small]="true"></app-label>
      </div>
    `,
  }),
};

export const Playground: Story = {
  args: {
    text: 'Editable Label',
    small: false,
  },
};
