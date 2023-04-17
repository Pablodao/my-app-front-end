import {forwardRef, HTMLProps, memo} from "react";
import {Paragraph} from "../Typography/Typography";
import {StyledButton} from "./styles";
export interface Props
extends Omit<HTMLProps<HTMLButtonElement>, "type" | "ref" | "as"> {
    variant?: "primary" | "secondary";
    type?: "submit" | "button";
}

export interface $StyledButtonProps {
    $variant: Props["variant"];
}

const Button = forwardRef<HTMLButtonElement, Props>(
    (
        {variant = "primary", type, children, ...props }: Props,
        ref
    ): JSX.Element => {
        return (
            <StyledButton $variant={variant} type={type} ref={ref} {...props}>
                <Paragraph>{children}</Paragraph>
            </StyledButton>
        )
    }
)


export default memo(Button)