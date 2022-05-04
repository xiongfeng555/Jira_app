import styled from "@emotion/styled";
import { useAuth } from "context/auth-context";
import React from "react";
import ProjectScreen from "screens/project-list";
import { Row } from "../../components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Dropdown, Menu } from "antd";
export default function AuthenticatedApp() {
  const { logout, user } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={2}>
          <SoftwareLogo width={"18rem"} color={"rgb(38,132,255)"} />
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={"logout"}>
                  <a onClick={logout}>登出</a>
                </Menu.Item>
              </Menu>
            }
          >
            <a onClick={(e) => e.preventDefault()}>Hi,{user?.name}</a>
          </Dropdown>
        </HeaderRight>
      </Header>
      <main>
        <ProjectScreen />
      </main>
    </Container>
  );
}
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
