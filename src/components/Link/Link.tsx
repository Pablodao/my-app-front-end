import {forwardRef, HTMLProps, memo} from "react";
import {StyledLink} from "./styles";

export interface Props extends Omit<HTMLProps<HTMLAnchorElement>, "ref"| "as" > {}




const Link = forwardRef<HTMLAnchorElement, Props>(

    (
        { children, href, ...props}: Props,
        ref
    ): JSX.Element => {
        if (!href) {
            return <></>
        }

    return (
        <StyledLink ref={ref} href={href} {...props}>
            {children}
        </StyledLink>
    );
    }
);

export default memo(Link)