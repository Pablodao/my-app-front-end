import ButtonLink, {Props} from "./ButtonLink";
import type {Story} from "@storybook/react";

export default {
    component: ButtonLink,
    title: "General/ButtonLink",
    args: {
        href: "/"
    }
}

const Template: Story<Props> = (args) => <ButtonLink {...args}>ButtonLink</ButtonLink>

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary"
};


