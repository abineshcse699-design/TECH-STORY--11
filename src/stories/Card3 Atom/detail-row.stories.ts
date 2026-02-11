import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DetailRowComponent } from '../../pages/Card3 Atom/detail-row.component/detail-row.component';

const meta: Meta<DetailRowComponent> = {
  title: 'Atoms/Detail Row',
  component: DetailRowComponent,
  decorators: [
    moduleMetadata({
      imports: [DetailRowComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variety: { control: 'text' },
    note: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
Displays a single row inside expanded characteristic details.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<DetailRowComponent>;

export const Default: Story = {
  args: {
    label: 'Medium',
    variety: 'Gala, Pinova',
    note: '5',
  },
};

export const EmptyVariety: Story = {
  args: {
    label: 'Absent',
    variety: '',
    note: '1',
  },
};
