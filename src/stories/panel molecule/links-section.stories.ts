

import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { LinksSectionComponent } from '../../pages/panel molecule/links-section.component/links-section.component';

const meta: Meta<LinksSectionComponent> = {
  title: 'Molecules/LinksSection',
  component: LinksSectionComponent,
  decorators: [
    moduleMetadata({
      imports: [LinksSectionComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    links: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<LinksSectionComponent>;

export const Default: Story = {
  args: {
    links: [
      'Quantity of plant material required (GN7)',
      'Quantity of plant material required (GN6)',
    ],
  },
};

export const SingleLink: Story = {
  args: {
    links: ['Download UPOV Document'],
  },
};

export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="width:800px;border:1px solid #eee;padding:20px;">
        <upov-links-section
          [links]="links">
        </upov-links-section>
      </div>
    `,
  }),
};
