import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MainInfoRowComponent } from '../../pages/panel molecule/main-info-row.component/main-info-row.component';

const meta: Meta<MainInfoRowComponent> = {
  title: 'Molecules/MainInfoRow',
  component: MainInfoRowComponent,
  decorators: [
    moduleMetadata({
      imports: [MainInfoRowComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<MainInfoRowComponent>;

export const Default: Story = {
  args: {
    name: 'European Pear',
    codes: 'PYRUS_COM; PYRUS_BCO; PYRUS_CPB; PYRUS_CUS',
  },
};
