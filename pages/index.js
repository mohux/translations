import Head from "next/head";
import { getInitialLocale } from "../locales/config";
import { useRouter } from "next/dist/client/router";
const Index = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace(`/${getInitialLocale()}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
