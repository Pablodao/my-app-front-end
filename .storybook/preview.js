import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";

import GlobalStyle from "../src/styles/global.ts";
import appThemes from "../src/styles/themes";

const Wrapper = ({ children }) => (
    <ThemeProvider theme={appThemes.light}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
        default: "white",
        values: [
            {
                name: "white",
                value: "#FFFFFF",
            },
            {
                name: "black",
                value: "#000000",
            },
            {
                name: "lightPurple",
                value: "#DEE3FD",
            },
            {
                name: "whisper",
                value: "#F8F7F5",
            },
        ],
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);
