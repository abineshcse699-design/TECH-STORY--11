// ===============================
// panel.stories.ts
// ===============================
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Panel } from '../../app/cards/panel/panel';

const meta: Meta<Panel> = {
  title: 'Components/UpovPanel',
  component: Panel,
  decorators: [
    moduleMetadata({
      imports: [Panel], // standalone component
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Panel>;


// ===============================
// Default (Collapsed)
// ===============================
export const Default: Story = {
  render: () => ({
    props: {
      panelOpenState: false,
    },
    template: `
      <upov-panel></upov-panel>
    `,
  }),
};


// ===============================
// Expanded State
// ===============================
export const Expanded: Story = {
  render: () => ({
    template: `
      <upov-panel></upov-panel>
    `,
  }),
  play: async ({ canvasElement }) => {
    const panel = canvasElement.querySelector('mat-expansion-panel');
    panel?.classList.add('mat-expanded');
  },
};


// ===============================
// Centered Layout Preview
// ===============================
export const CenteredPreview: Story = {
  render: () => ({
    template: `
      <div style="height:100vh; display:flex; justify-content:center; align-items:center; background:#f5f5f5;">
        <upov-panel></upov-panel>
      </div>
    `,
  }),
};


// ===============================
// Multiple Panels Grid
// ===============================
export const GridLayout: Story = {
  render: () => ({
    template: `
      <div style="display:grid; gap:24px;">
        <upov-panel></upov-panel>
        <upov-panel></upov-panel>
      </div>
    `,
  }),
};
