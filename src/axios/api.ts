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
      setToken(resp.data.token);
    } catch (e: any) {
      onLogOut();
    }
  };
  secureApi.interceptors.request.use(async (req) => {
    if (!token) {
      await refrechReq();
      return req;
    }
    if (token) {
      const decoded: jwt = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
      if (decoded.exp < currentTime) {
        await refrechReq();
      }
    }
    return req;
  });
  return secureApi;
};
