import { useStaticRendering } from "mobx-react";
import PostsStore from "./postsStore";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

let store;

export default (initialData = { postsStore: {} }) => {
  if (isServer) {
    return {
      postsStore: new PostsStore(initialData.postsStore)
    };
  }
  if (!store) {
    store = {
      postsStore: new PostsStore(initialData.postsStore)
    };
  }
  return store;
};
const StoreContext = React.createContext();

export function StoreProvider(props) {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
}

export function useMobxStores() {
  return React.useContext(StoreContext);
}
