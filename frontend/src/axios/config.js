import axios from "axios";

const provaFetch = axios.create({
  baseURL: "http://54.233.12.207:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default provaFetch;