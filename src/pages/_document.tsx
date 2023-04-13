import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
    DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        return await Document.getInitialProps(ctx);
    }

    render(): JSX.Element {
        return (
            <Html
                lang="en"
                className="wf-inter-n5-active wf-inter-n7-active wf-inter-n3-active wf-inter-n6-active wf-active font-serif"
            >
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />

                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="description"
                        content="Web site created using create-react-app"
                    />
                    <title>My-App-Title</title>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
