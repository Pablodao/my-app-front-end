import Link, {Props} from "./Link"
import type {Story} from "@storybook/react"

export default {
    component: Link,
    title: "General/Link",
    args:{
        href: "/"
    }
}

export const Default: Story<Props> = (args) =>  <Link {...args}>Link</Link>


