import { observable, action, decorate } from "mobx";
import Axios from "axios";

class PostsStore {
  @observable data = [];

  constructor(initialData = {}) {
    this.data = initialData.data;
  }

  @action loadMore = () => {
    this.data = [...this.data, ...this.data.slice(0, 10)];
  };
  @action fetchPosts = async () => {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.data = response.data.slice(0, 10);
  };
}
// decorate(PostsStore, {
//   data: observable,
//   fetchPosts: action,
//   loadMore: action
// });
export default PostsStore;
