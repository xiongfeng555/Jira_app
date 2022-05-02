import * as auth from "./auth-provider";
import qs from "qs";
import { useAuth } from "context/auth-context";
interface Config extends RequestInit {
  data?: object;
  token?: string;
}
const baseURL = process.env.REACT_APP_API_URL;

export function http(
  endpoint: string,
  { data, token, ...customConfig }: Config = {}
) {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data);
  }
  return window
    .fetch(`${baseURL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}
export const useHttp = () => {
  const { user } = useAuth();
  return (endpoint: string, config?: Config) =>
    http(endpoint, { ...config, token: user?.token });
};
