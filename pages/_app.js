import App from "next/app";
import { directions } from '../locales/translation';
import { withLocale } from "~/locales";
import Head from 'next/head';
import Layout from "~/components/layout";
import { Fragment } from "react";
import { PUBLIC_URL } from '../env';
class MyApp extends App {
    static async getInitialProps(context) {
        const props = await App.getInitialProps(context);
        const lang = context.ctx.query.lang;
        const path = context.ctx.asPath;
        return {
            ...props,
            lang,
            path,
        };
    }

    render() {
        const { Component, pageProps, lang, path } = this.props;
        const WebLayout = path === '/' ? Fragment : Layout;
        return (
            <WebLayout>
                <Head>
                    {directions[lang] === "rtl" ? (
                        <link type="text/css" rel="stylesheet" href={`${PUBLIC_URL}/bootstrap/bootstrap-rtl.min.css`} hrefLang={lang} />
                    ) :
                        (
                            <link type="text/css" rel="stylesheet" href={`${PUBLIC_URL}/bootstrap/bootstrap.min.css`} hrefLang={lang} />
                        )}
                </Head>
                <Component   {...pageProps} />
            </WebLayout>
        );
    }
}
export default withLocale(MyApp);
