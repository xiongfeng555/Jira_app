/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-06 10:14:06
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 10:20:00
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\project\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import EpicScreen from "screens/epic";
import KanPanScreen from "screens/kanpan";
export default function ProjectScreen() {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={"kanpan"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        <Route path="/kanpan" element={<KanPanScreen />}></Route>
        <Route path="/epic" element={<EpicScreen />}></Route>
        <Route
          path="/"
          element={<Navigate to={"kanpan"} replace={true} />}
        ></Route>
      </Routes>
    </div>
  );
}
