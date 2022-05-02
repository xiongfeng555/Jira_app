import React, { FormEvent } from "react";

export default function LoginScreen() {
  const baseURL = process.env.REACT_APP_API_URL;
  const login = (params: { username: string; password: string }): void => {
    fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then(async (response) => {
      if (response.ok) {
        console.log("ok");
        if (response.status === 200) {
          console.log(200);
        } else {
          console.log(400);
        }
      }
    });
  };
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
