import Layout from "~/components/layout";
import { useLocale, withLocale } from "~/locales";
import MetaHead from "~/components/shared/meta";
const About = () => {
  const { translate } = useLocale();
  return (
    <Layout>
      <MetaHead
        title={translate({ key: "about" })}
        ogTitle={translate({ key: "about" })}
        ogDescription={translate({ key: "about" })}
      />
      <div>{translate({ key: "about" })}</div>
    </Layout>
  );
};

export default withLocale(About);
