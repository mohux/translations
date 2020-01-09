import React from "react";
import Error from "next/error";
import { isAllowedLocale, fallbackLocale } from "./config";
import { LocaleProvider } from "./localeContext";

export default WrappedPage => {
  const WithLocale = ({ locale, ...pageProps }) => {
    if (!locale) {
      // no valid locale detected
      return <Error statusCode={404} />;
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    );
  };

  WithLocale.getInitialProps = async ctx => {
    // retrieve initial props of the wrapped component
    let pageProps = {};
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }

    if (
      typeof ctx.query.lang !== "string" ||
      !isAllowedLocale(ctx.query.lang)
    ) {
      // in case the value of 'lang' is not a valid locale return it as undefined
      return { ...pageProps, locale: undefined };
    }

    // the locale is valid
    return { ...pageProps, locale: ctx.query.lang };
  };

  return WithLocale;
};
