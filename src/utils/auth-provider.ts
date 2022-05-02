import { User } from "screens/project-list/Search";

const provider_token = "__auth_provider_token__";
const baseURL = process.env.REACT_APP_API_URL;
export const getToken = (token: string) =>
  window.localStorage.getItem(provider_token);
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(provider_token, user.token || "");
  return user;
};
export const login = (data: { username: string; password: string }) =>
  window
    .fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(async (response) => {
      return handleUserResponse(await response.json());
    });
export const register = (data: { username: string; password: string }) =>
  window
    .fetch(`${baseURL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(async (response) => {
      return handleUserResponse(await response.json());
    });

export const logout = async () =>
  window.localStorage.removeItem(provider_token);
