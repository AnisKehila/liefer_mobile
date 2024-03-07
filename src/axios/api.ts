import { useAuth } from "@/contexts/AuthContext";
import { API_URL } from "@/utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

export default axios.create({
  baseURL: API_URL,
});

export const useApi = (): AxiosInstance => {
  const { token, setToken, onLogOut } = useAuth();
  const secureApi = axios.create({
    baseURL: API_URL,
    headers: { Authorization: `Bearer ${token}` },
  });
  const refrechReq = async () => {
    const refrechToken = await AsyncStorage.getItem("refreshToken");

    try {
      const resp = await axios.get(API_URL + "/user/refresh", {
        headers: {
          cookie: refrechToken,
        },
      });
      return resp.data.token;
    } catch (e: any) {
      onLogOut();
      return;
    }
  };
  secureApi.interceptors.request.use(async (req) => {
    if (!token) {
      const token = (await refrechReq()) as string;
      setToken(token);
      req.headers.Authorization = `Bearer ${token}`;
      return req;
    }
    if (token) {
      const decoded: jwt = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
      if (decoded.exp < currentTime) {
        const token = (await refrechReq()) as string;
        setToken(token);
        req.headers.Authorization = `Bearer ${token}`;
        return req;
      }
    }
    return req;
  });
  return secureApi;
};
