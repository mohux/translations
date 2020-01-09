import { useMobxStores } from "~/stores/index";
import Posts from "~/components/posts";
import { withLocale, useLocale } from "~/locales";
import Layout from "~/components/layout";
import { Button } from "reactstrap";
const Index = () => {
  const { postsStore } = useMobxStores();
  const { translate } = useLocale();
  const showMoreHandler = () => {
    postsStore.loadMore();
  };
  return (
    <Layout>
      <Button onClick={showMoreHandler}>
      {translate({ key: "home" })}
      </Button>
      <Posts />
    </Layout>
  );
};

Index.getInitialProps = async ({ mobxStore }) => {
  await mobxStore.postsStore.fetchPosts();
  return {
    done: true
  };
};
export default withLocale(Index);
