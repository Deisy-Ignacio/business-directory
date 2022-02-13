import HTTP from "axios";
import { BASE_URL, API_KEY } from "utils";

const axios = HTTP.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json", "x-api-key": API_KEY },
});

export default axios;
