import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { AuthCard } from '../../stories/auth-card.component/auth-card.component';

const meta: Meta<AuthCard> = {
  title: 'Components/AuthCard',
  component: AuthCard,
  decorators: [
    moduleMetadata({
      imports: [AuthCard],
    }),
    applicationConfig({
      providers: [],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AuthCard>;

/**
 * With Image (Matches Screenshot)
 */
export const WithImage: Story = {
  render: () => ({
    template: `
      <div style="
        background-color: #efefef;
        padding: 40px;
        min-height: 100vh;
      ">
        <upov-auth-card
          category="ANANA"
          botanicalName="Ananas Mill."
          primaryName="Pineapple"
          family="Bromeliaceae"
          imageUrl="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400"
          [updated]="true">
        </upov-auth-card>
      </div>
    `,
  }),
};

/**
 * No Image State
 */
export const NoImage: Story = {
  render: () => ({
    template: `
      <div style="
        background-color: #efefef;
        padding: 40px;
        min-height: 100vh;
      ">
        <upov-auth-card
          category="ANANA"
          botanicalName="Ananas Mill."
          primaryName="Pineapple"
          family="Bromeliaceae"
          [updated]="true">
        </upov-auth-card>
      </div>
    `,
  }),
};
