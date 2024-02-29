import { API_URL } from "@/utils/config";
import axios from "axios";

export default axios.create({
  baseURL: API_URL,
});
