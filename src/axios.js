import axios from "axios";

const instance = axios.get({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
