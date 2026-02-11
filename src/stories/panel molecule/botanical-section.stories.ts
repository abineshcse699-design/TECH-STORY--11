import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BotanicalSectionComponent } from '../../pages/panel molecule/botanical-section.component/botanical-section.component';

const meta: Meta<BotanicalSectionComponent> = {
  title: 'Molecules/BotanicalSection',
  component: BotanicalSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [BotanicalSectionComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    botanicalText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<BotanicalSectionComponent>;

export const Default: Story = {
  args: {
    botanicalText:
      'Pyrus communis L., Pyrus domestica Medik., Pyrus elata Rubtzov.',
  },
};

export const LongText: Story = {
  args: {
    botanicalText:
      'Pyrus communis L., Pyrus asiae-mediae (Popov) Maleev, Pyrus balansae Decne., Pyrus bourgaeana Decne., Pyrus domestica Medik., Hybrids between Pyrus communis and P. ussuriensis.',
  },
};

export const PreviewBox: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="width:800px;border:1px solid #eee;">
        <upov-botanical-section
          [botanicalText]="botanicalText">
        </upov-botanical-section>
      </div>
    `,
  }),
};
