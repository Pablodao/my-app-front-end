import {forwardRef, HTMLProps, memo} from "react";
import {StyledButtonLink} from "./styles";
import {Paragraph} from "../Typography/Typography";

export interface Props
    extends Omit<HTMLProps<HTMLAnchorElement>, "ref" | "as"> {

    variant?: "primary" | "secondary"
}

export interface $StyledButtonLinkProps {
    $variant: Props["variant"];
}

const ButtonLink = forwardRef<HTMLAnchorElement, Props>(
    (
        {variant = "primary", children, href, ...props}: Props,
        ref
    ): JSX.Element => {
        if (!href) {
            return <></>
        }

        return (
            <StyledButtonLink $variant={variant} href={href} ref={ref} {...props}>
                <Paragraph>
                    <a>{children}</a>
                </Paragraph>

            </StyledButtonLink>
        )
    }
);
export default memo(ButtonLink)