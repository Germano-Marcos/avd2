import axios from "axios";

const provaFetch = axios.create({
  baseURL: "http://18.231.30.104:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default provaFetch;