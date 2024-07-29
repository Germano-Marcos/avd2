import axios from "axios";

const provaFetch = axios.create({
  baseURL: "http://18.231.106.218:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default provaFetch;