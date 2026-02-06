import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../../pages/components/Atoms/button.component/button.component';
import { IconComponent } from '../../pages/components/Atoms/icon.component/icon.component';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, IconComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Reusable button atom.

## Features
- Optional icon
- Disabled state
- Content projection support
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: 'text',
      description: 'Material icon name',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-button [disabled]="disabled">
        Click Me
      </app-button>
    `,
  }),
};

export const WithIcon: Story = {
  args: {
    icon: 'filter_list',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-button [icon]="icon">
        Show Filters
      </app-button>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-button [disabled]="disabled">
        Disabled Button
      </app-button>
    `,
  }),
};
