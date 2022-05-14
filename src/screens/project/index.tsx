/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-06 10:14:06
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-14 16:04:40
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\project\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "@emotion/styled";
import { Menu } from "antd";
import { ScreenContainer } from "components/lib";
import React from "react";
import { Link, Routes, Route, Navigate, useLocation } from "react-router-dom";
import EpicScreen from "screens/epic";
import KanPanScreen from "screens/kanban";
const useRouteType = () => {
  const unit = useLocation().pathname?.split("/");
  return unit[unit.length - 1];
};
export default function ProjectScreen() {
  const routeType = useRouteType();
  return (
    <ScreenContainer>
      <Container>
        <Aside>
          <Menu mode="inline" selectedKeys={[routeType]}>
            <Menu.Item key={"kanban"}>
              <Link to={"kanban"}>看板</Link>
            </Menu.Item>
            <Menu.Item key={"epic"}>
              <Link to={"epic"}>任务组</Link>
            </Menu.Item>
          </Menu>
        </Aside>
        <Main>
          <Routes>
            <Route path="/kanban" element={<KanPanScreen />}></Route>
            <Route path="/epic" element={<EpicScreen />}></Route>
            <Route
              path="/"
              element={<Navigate to={"kanban"} replace={true} />}
            ></Route>
          </Routes>
        </Main>
      </Container>
    </ScreenContainer>
  );
}

const Aside = styled.div`
  display: flex;
  background-color: rgb(244, 245, 247);
`;
const Main = styled.main`
  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.1);
  display: flex;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  height: 100%;
`;
