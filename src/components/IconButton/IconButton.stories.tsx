import IconButton, {Props} from "./IconButton";
import type {Story} from "@storybook/react";
import {FaAd} from "react-icons/fa";

export default {
    component: IconButton,
    title: "General/IconButton"
};

const Template: Story<Props> = (args => (
    <IconButton {...args}>Button</IconButton>
))

export const Default = Template.bind({});
Default.args = {
    icon: <FaAd/>,
    label: "Label"
};