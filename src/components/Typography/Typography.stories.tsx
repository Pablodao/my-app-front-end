import type { Meta, Story } from "@storybook/react";

import { Headline, Title, Paragraph, Caption, Link } from "./Typography";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Typography/Default",
} as Meta;

const Template: Story = (args) => (
  <div {...args}>
    <Headline>Headline</Headline>
    <Title>Title</Title>
    <Paragraph>Paragraph</Paragraph>
    <p>
      <Caption>Caption</Caption>
    </p>
    <Link>Link</Link>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
