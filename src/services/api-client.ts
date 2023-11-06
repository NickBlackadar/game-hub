import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2f756dec81784ee484756c7f2f1bb5a6",
  },
});
