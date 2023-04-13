import type { AppProps } from "next/app";
import themes from "../styles/themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import Page from "../components/Page/Page";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider theme={themes.light}>
            <GlobalStyle />
            <Page>
                <Component {...pageProps} />
            </Page>
        </ThemeProvider>
    );
}
export default MyApp;
