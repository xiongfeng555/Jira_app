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
        <Route path="/" element={<Navigate to={"kanpan"} />}></Route>
      </Routes>
    </div>
  );
}
