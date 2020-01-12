import axios from "axios";
const token = "token code";

const instance = axios.create({
  baseURL: "https://example.domain.com/api",
  headers: {
    token
  }
});
export default instance;
