import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { CountryCard } from '../../stories/country-card.component/country-card.component';

const meta: Meta<CountryCard> = {
  title: 'Components/CountryCard',
  component: CountryCard,
  decorators: [
    moduleMetadata({
      imports: [CountryCard],
    }),
    applicationConfig({
      providers: [],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A card component designed to display country office information including
flag, contact person, phone, email, and office details.

## Usage in Consumer App

\`\`\`typescript
import { CountryCard } from 'upov-ui';

@Component({
  imports: [CountryCard],
  template: \`
    <upov-country-card
      [name]="'Australia'"
      [code]="'AU'"
      [flag]="'https://flagcdn.com/w80/au.png'"
      [person]="'James Donovan'"
      [phone]="'+54 11 4349 1354'"
      [email]="'j.donovan@australia.pvp.com'"
      [office]="'Plant Breeder's Rights'">
    </upov-country-card>
  \`
})
export class MyComponent {}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    name: { control: 'text' },
    code: { control: 'text' },
    flag: { control: 'text' },
    person: { control: 'text' },
    phone: { control: 'text' },
    email: { control: 'text' },
    office: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<CountryCard>;

export const Complete: Story = {
  args: {
    name: 'European Union (Community Plant Variety Office)',
    code: 'EUI',
    flag: 'https://flagcdn.com/w80/eu.png',
    person: 'Mariano Mangieri',
    phone: '+54 11 4349 1354',
    email: 'mariano.mangieri@australia.pvp.com',
    office: 'Plant Variety Protection Office',
  },
};

export const Australia: Story = {
  args: {
    name: 'Australia',
    code: 'AU',
    flag: 'https://flagcdn.com/w80/au.png',
    person: 'James Donovan',
    phone: '+54 11 4349 1354',
    email: 'j.donovan@australia.pvp.com',
    office: 'Plant Breeder\'s Rights',
  },
};

export const Minimal: Story = {
  args: {
    name: 'Bulgaria',
    code: 'BG',
    flag: 'https://flagcdn.com/w80/bg.png',
    phone: '+359 2 873 51 75',
    email: 'bpo@bg.net',
    office: 'State Patent Office',
  },
};

/**
 * Australia Card (Matches Design Screenshot)
 */
export const AustraliaDesignPreview: Story = {
  render: () => ({
    template: `
      <div style="
        background: #f3f3f3;
        padding: 40px;
        display: flex;
        justify-content: center;
      ">
        <upov-country-card
          name="Australia"
          code="AU"
          flag="https://flagcdn.com/w80/au.png"
          person="James Donovan"
          phone="+54 11 4349 1354"
          email="j.donovan@australia.pvp.com"
          office="Plant Breeder's Rights"
        >
        </upov-country-card>
      </div>
    `,
  }),
};

/**
 * Full Layout Preview (Matches Screenshot)
 */
export const ScreenshotLayout: Story = {
  render: () => ({
    template: `
      <div style="
        background: #f3f3f3;
        padding: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        width: fit-content;
      ">

        <!-- European Union -->
        <upov-country-card
          name="European Union (Community Plant Variety Office)"
          code="EUI"
          flag="https://flagcdn.com/w80/eu.png"
          person="Mariano Mangieri"
          phone="+54 11 4349 1354"
          email="mariano.mangieri@australia.pvp.com"
          office="Plant Variety Protection Office"
        ></upov-country-card>

        <!-- Australia -->
        <upov-country-card
          name="Australia"
          code="AU"
          flag="https://flagcdn.com/w80/au.png"
          person="James Donovan"
          phone="+54 11 4349 1354"
          email="j.donovan@australia.pvp.com"
          office="Plant Breeder's Rights"
        ></upov-country-card>

        <!-- Bulgaria -->
        <upov-country-card
          name="Bulgaria"
          code="BG"
          flag="https://flagcdn.com/w80/bg.png"
          phone="+359 2 873 51 75"
          email="bpo@bg.net"
          office="State Patent Office"
        ></upov-country-card>

      </div>
    `,
  }),
};
/**
 * 4 Cards Layout (Last Card Half Visible)
 */
export const FourCardsWithHalfPreview: Story = {
  render: () => ({
    template: `
      <div style="
        background: #f3f3f3;
        padding: 40px;
        display: flex;
        justify-content: center;
      ">
        <div style="
          width: 1180px;
          overflow: hidden;
        ">
          <div style="
            display: grid;
            grid-template-columns: 567px 567px;
            gap: 24px;
            width: max-content;
          ">

            <!-- Card 1 -->
            <upov-country-card
              name="European Union (Community Plant Variety Office)"
              code="EUI"
              flag="https://flagcdn.com/w80/eu.png"
              person="Mariano Mangieri"
              phone="+54 11 4349 1354"
              email="mariano.mangieri@australia.pvp.com"
              office="Plant Variety Protection Office"
            ></upov-country-card>

            <!-- Card 2 -->
            <upov-country-card
              name="Australia"
              code="AU"
              flag="https://flagcdn.com/w80/au.png"
              person="James Donovan"
              phone="+54 11 4349 1354"
              email="j.donovan@australia.pvp.com"
              office="Plant Breeder's Rights"
            ></upov-country-card>

            <!-- Card 3 -->
            <upov-country-card
              name="Bulgaria"
              code="BG"
              flag="https://flagcdn.com/w80/bg.png"
              phone="+359 2 873 51 75"
              email="bpo@bg.net"
              office="State Patent Office"
            ></upov-country-card>

            <!-- Card 4 (Half Visible Australia) -->
            <upov-country-card
              name="Australia"
              code="AU"
              flag="https://flagcdn.com/w80/au.png"
              person="James Donovan"
              phone="+54 11 4349 1354"
              email="j.donovan@australia.pvp.com"
              office="Plant Breeder's Rights"
            ></upov-country-card>

          </div>
        </div>
      </div>
    `,
  }),
};
/**
 * 4 Cards Layout (Last Card Full Width)
 */
export const FourCardsCustomLayout: Story = {
  render: () => ({
    template: `
      <div style="
        background: #f3f3f3;
        padding: 40px;
        display: flex;
        justify-content: center;
      ">

        <div style="
          display: grid;
          grid-template-columns: 567px 567px;
          gap: 24px;
        ">

          <!-- Card 1 -->
          <upov-country-card
            name="European Union (Community Plant Variety Office)"
            code="EUI"
            flag="https://flagcdn.com/w80/eu.png"
            person="Mariano Mangieri"
            phone="+54 11 4349 1354"
            email="mariano.mangieri@australia.pvp.com"
            office="Plant Variety Protection Office"
          ></upov-country-card>

          <!-- Card 2 -->
          <upov-country-card
            name="Australia"
            code="AU"
            flag="https://flagcdn.com/w80/au.png"
            person="James Donovan"
            phone="+54 11 4349 1354"
            email="j.donovan@australia.pvp.com"
            office="Plant Breeder's Rights"
          ></upov-country-card>

          <!-- Card 3 -->
          <upov-country-card
            name="Bulgaria"
            code="BG"
            flag="https://flagcdn.com/w80/bg.png"
            phone="+359 2 873 51 75"
            email="bpo@bg.net"
            office="State Patent Office"
          ></upov-country-card>

          <!-- Empty spacer to push next card full width -->
          <div></div>

          <!-- Card 4 (Full Width) -->
          <upov-country-card
            style="grid-column: 1 / span 2;"
            name="Australia"
            code="AU"
            flag="https://flagcdn.com/w80/au.png"
            person="James Donovan"
            phone="+54 11 4349 1354"
            email="j.donovan@australia.pvp.com"
            office="Plant Breeder's Rights"
          ></upov-country-card>

        </div>

      </div>
    `,
  }),
};
/**
 * 4 Cards Layout (All Same Size – 4th Fixed)
 */
export const FourCardsFixed: Story = {
  render: () => ({
    template: `
      <div style="
        background: #f3f3f3;
        padding: 40px;
        display: flex;
        justify-content: center;
      ">

        <div style="
          display: grid;
          grid-template-columns: 567px 567px;
          gap: 24px;
        ">

          <!-- Card 1 -->
          <upov-country-card
            name="European Union (Community Plant Variety Office)"
            code="EUI"
            flag="https://flagcdn.com/w80/eu.png"
            person="Mariano Mangieri"
            phone="+54 11 4349 1354"
            email="mariano.mangieri@australia.pvp.com"
            office="Plant Variety Protection Office"
          ></upov-country-card>

          <!-- Card 2 -->
          <upov-country-card
            name="Australia"
            code="AU"
            flag="https://flagcdn.com/w80/au.png"
            person="James Donovan"
            phone="+54 11 4349 1354"
            email="j.donovan@australia.pvp.com"
            office="Plant Breeder's Rights"
          ></upov-country-card>

          <!-- Card 3 -->
          <upov-country-card
            name="Bulgaria"
            code="BG"
            flag="https://flagcdn.com/w80/bg.png"
            phone="+359 2 873 51 75"
            email="bpo@bg.net"
            office="State Patent Office"
          ></upov-country-card>

          <!-- Card 4 -->
          <upov-country-card
            style="
              width: 267px;
              height: 126px;
            "
            name="Australia"
            code="AU"
            flag="https://flagcdn.com/w80/au.png"
            person="James Donovan"
            phone="+54 11 4349 1354"
            email="j.donovan@australia.pvp.com"
            office="Plant Breeder's Rights"
          ></upov-country-card>

        </div>

      </div>
    `,
  }),
};
