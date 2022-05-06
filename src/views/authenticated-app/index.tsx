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
export default function AuthenticatedApp() {
  useDocumentTitle("jira列表页", false);
  return (
    <Container>
      <PageHeader />
      <main>
        <Routes>
          <Route path="/projects" element={<ProjectListScreen />}></Route>
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
const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={2}>
        <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
          <SoftwareLogo width={"18rem"} color={"rgb(38,132,255)"} />
        </Link>
        <h2>项目</h2>
        <h2>用户</h2>
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
