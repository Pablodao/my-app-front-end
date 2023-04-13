import { HTMLProps, memo } from "react";
import { PageWrapper } from "./styles";

export interface Props extends HTMLProps<HTMLDivElement> {}

function Page({ children }: Props): JSX.Element {
    return (
        <div>
            <PageWrapper>{children}</PageWrapper>
        </div>
    );
}

export default memo(Page);
