import {forwardRef, HTMLProps, ReactNode, useState} from "react";

import {Caption} from "../Typography/Typography";

import {Container, Tooltip, Button, StyledIcon} from "./styles";

export interface Props
    extends Omit<HTMLProps<HTMLButtonElement>, "ref" | "as" | "type" | "label"> {
    label?: string;
    icon: ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, Props>(
    ({icon, label, ...props}: Props, ref) => {
        const [hovered, setHovered] = useState(false)

        return (
            <Container>
                {hovered && label ? (
                    <Tooltip>
                        <Caption>{label}</Caption>
                    </Tooltip>
                ) : null}
                <Button
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    type="button"
                    ref={ref}
                    {...props}
                >
                    <StyledIcon> {icon} </StyledIcon>

                </Button>
            </Container>)
    })

export default IconButton