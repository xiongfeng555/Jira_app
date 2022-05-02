import * as auth from "../utils/auth-provider";
import React, { ReactNode, useContext, useState } from "react";
import { User } from "screens/project-list/Search";
import { http } from "utils/http";
interface userForm {
  username: string;
  password: string;
}
const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const res = await http("me", { token });
    user = res.user;
  }
  return user;
};
const AuthContext = React.createContext<{
  user: User | null;
  login: (data: userForm) => Promise<void>;
  register: (data: userForm) => Promise<void>;
  logout: () => Promise<void>;
} | null>(null);
AuthContext.displayName = "AuthContext";
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: userForm) =>
    auth.login(form).then((user) => setUser(user));
  const register = (form: userForm) =>
    auth.register(form).then((user) => setUser(user));
  const logout = () => auth.logout().then(() => setUser(null));
  bootstrapUser().then((user) => setUser(user));
  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
}
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
