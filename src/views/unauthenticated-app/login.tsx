import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

export default function LoginScreen() {
  const { login } = useAuth();
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>&nbsp;
        <input type="password" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
}
