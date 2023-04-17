import Button, {Props} from "./Button";
import type {Story} from "@storybook/react";

export default {
    component: Button,
    title: "General/Button"
}

const Template: Story<Props> = (args) => <Button {...args}>Button</Button>;

    export const Primary = Template.bind({});
    Primary.args= {
        variant:"primary",
    }

    export const Secondary = Template.bind({});
    Secondary.args= {
        variant:"secondary",
    }