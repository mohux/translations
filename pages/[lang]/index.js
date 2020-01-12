import MetaHead from "~/components/shared/meta";
import { useLocale } from "~/locales";
import { PUBLIC_URL } from "~/env";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { logPageView } from "~/helpers/analytics";

const Index = () => {
  useEffect(() => {
    logPageView();
  },[]);

  
  const { translate } = useLocale();
  const router = useRouter();
  return (
    <div>
      <MetaHead
        title={translate({ key: "home" })}
        description={translate({ key: "home" })}
        robots="index, follow"
        ogUrl={PUBLIC_URL + router.asPath}
        keywords={translate({ key: "home" })}
        ogDescription={translate({ key: "home" })}
        ogTitle={translate({ key: "home" })}
      />
      <img
        className="img-fluid"
        src={PUBLIC_URL + "/images/2.jpg"}
        title="Boilerplate"
        alt="Boilerplate"
      />
    </div>
  );
};

export default Index;
