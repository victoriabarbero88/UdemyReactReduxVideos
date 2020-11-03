import axios from "axios";

const KEY = "AIzaSyAowVdTc25NkOq9v_q0IXzGGOnK5s7PYSE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
