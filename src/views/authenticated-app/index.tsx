/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-02 14:48:07
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 18:02:47
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\views\authenticated-app\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "@emotion/styled";
import { useAuth } from "context/auth-context";
import React from "react";
import ProjectListScreen from "screens/project-list";
import { Row } from "../../components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";
import { useDocumentTitle } from "utils";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import ProjectScreen from "screens/project";
import ProjectModel from "screens/project-list/project-model";
import ProjectPopover from "screens/project-list/project-popover";
import { useProjectModal } from "utils/use-projectModal";
export default function AuthenticatedApp() {
  useDocumentTitle("jira列表页", false);
  const modalProps = useProjectModal();
  return (
    <Container>
      <ProjectModel
        projectModalOpen={modalProps.projectModalOpen}
        onClose={modalProps.close}
      />
      <PageHeader openProjectModal={modalProps.open} />
      <main>
        <Routes>
          <Route
            path="/projects"
            element={<ProjectListScreen {...modalProps} />}
          ></Route>
          <Route
            path={"/projects/:projectId/*"}
            element={<ProjectScreen />}
          ></Route>
          <Route
            path="/"
            element={<Navigate to={"/projects"}></Navigate>}
          ></Route>
        </Routes>
      </main>
    </Container>
  );
}
const PageHeader = (props: { openProjectModal: () => void }) => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={2}>
        <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
          <SoftwareLogo width={"18rem"} color={"rgb(38,132,255)"} />
        </Link>
        <ProjectPopover open={props.openProjectModal} />
        <span>用户</span>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={"logout"}>
                <Button type={"link"} onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type={"link"} onClick={(e) => e.preventDefault()}>
            Hi,{user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
`;
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
