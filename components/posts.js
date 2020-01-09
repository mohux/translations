import { useMobxStores } from "~/stores";
import { observer } from "mobx-react";

const DisplayContent = () => {
  const { postsStore } = useMobxStores();
  return <div>
    {postsStore.data.map((post,idx) => <div key={idx}>{idx + 1} - {post.title}</div>)}
  </div>;
};

export default observer(DisplayContent);
