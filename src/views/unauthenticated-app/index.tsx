import React, { useState } from "react";
import RegisterScreen from "./register";
import LoginScreen from "./login";
import { Button, Card, Divider } from "antd";
import styled from "@emotion/styled";
import logo from "../../assets/logo.svg";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
export default function UnAuthenticatedApp() {
  const [isRegister, setRegister] = useState(false);
  return (
    <Container>
      <Background></Background>
      <Header />
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Divider />
        <a onClick={() => setRegister(!isRegister)} href="javascript:;">
          切换到{isRegister ? "已经有账号了，直接登录" : "没有账号？注册新账号"}
        </a>
      </ShadowCard>
    </Container>
  );
}
export const LongButton = styled(Button)`
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  /* min-height: 100vh; */
  align-items: center;
  flex-direction: column;
`;
const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px;
`;
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  width: 100%;
  padding: 5rem 0;
  background-size: 8rem;
`;
const Title = styled.h2`
  margin-bottom: 3.2rem;
  color: rgb(94, 108, 132);
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: left bottom, right bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;
