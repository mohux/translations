import Document, { Head, Main, NextScript } from "next/document";
export default class EvexDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
                    <link rel="stylesheet" href="/lib/boostrap-ar.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
