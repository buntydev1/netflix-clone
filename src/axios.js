import axios from "axios";

try {
  var instances = axios.get({
    baseURL: "https://api.themoviedb.org/3",
  });
} catch (e) {
  console.log("error", e);
}

export default instances;
