import Document, { Head, Main, NextScript } from "next/document";
// import Manifest from 'next-manifest/manifest';
export default class EKafu extends Document {
  render() {
    const lang = this.props.__NEXT_DATA__.props.lang;

    return (
      <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
