import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IconComponent } from '../../pages/components/Atoms/icon.component/icon.component';

const meta: Meta<IconComponent> = {
  title: 'Atoms/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [IconComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Material icon name',
    },
  },
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    name: 'filter_list',
  },
};

export const MultipleIcons: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:16px;">
        <app-icon name="filter_list"></app-icon>
        <app-icon name="view_column"></app-icon>
        <app-icon name="more_horiz"></app-icon>
        <app-icon name="delete"></app-icon>
      </div>
    `,
  }),
};
