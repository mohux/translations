import App from "next/app";
import initializeStore, { StoreProvider } from "../stores";
import Head from "next/head";
class MyApp extends App {
  static async getInitialProps(context) {
    const mobxStore = initializeStore();
    context.ctx.mobxStore = mobxStore;
    const props = await App.getInitialProps(context);
    const lang = context.ctx.query.lang;
    return {
      ...props,
      initialMobx: mobxStore,
      lang
    };
  }

  // constructor(props) {
  //   super(props);
  //   const isServer = typeof window === "undefined";
  //   this.mobxStore = isServer
  //     ? props.initialMobx
  //     : initializeStore(props.initialMobx);
  // }
  render() {
    const { Component, pageProps, initialMobx, lang } = this.props;
    const stores = initializeStore(initialMobx);
    return (
      <StoreProvider store={stores}>
        <Head>
        {lang === "ar" ? (
            <link rel="stylesheet" href="/bootstrap/bootstrap-rtl.min.css" />
          ) : (
            <link rel="stylesheet" href="/bootstrap/bootstrap.min.css" />
          )}
        </Head>
        <Component {...pageProps} />
      </StoreProvider>
    );
  }
}
export default MyApp;
