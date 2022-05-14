/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-04-28 16:42:36
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-14 15:28:25
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./wdyr";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { loadServer, DevTools } from "jira-dev-tool";
import AppProvider from "./context/index";
import "antd/dist/antd.less";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
loadServer(() => {
  root.render(
    <Router>
      <AppProvider>
        <DevTools />
        <App />
      </AppProvider>
    </Router>
  );
});
store.subscribe(() => {
  loadServer(() => {
    root.render(
      <Router>
        <AppProvider>
          <DevTools />
          <App />
        </AppProvider>
      </Router>
    );
  });
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
