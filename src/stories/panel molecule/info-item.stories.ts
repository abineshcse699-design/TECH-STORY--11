import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { InfoItemComponent } from '../../pages/panel molecule/info-item.component/info-item.component';

const meta: Meta<InfoItemComponent> = {
  title: 'Molecules/InfoItem',
  component: InfoItemComponent,
  decorators: [
    moduleMetadata({
      imports: [InfoItemComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InfoItemComponent>;

export const Default: Story = {
  args: {
    label: 'Main Common Name(s):',
    value: 'European Pear',
  },
};
