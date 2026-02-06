import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DividerComponent } from '../../pages/components/Atoms/divider.component/divider.component';

const meta: Meta<DividerComponent> = {
  title: 'Atoms/Divider',
  component: DividerComponent,
  decorators: [
    moduleMetadata({
      imports: [DividerComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DividerComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div>
        <p>Above Divider</p>
        <app-divider></app-divider>
        <p>Below Divider</p>
      </div>
    `,
  }),
};
