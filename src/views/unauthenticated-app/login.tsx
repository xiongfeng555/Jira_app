import { useAuth } from "context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from ".";

export default function LoginScreen() {
  const { login } = useAuth();
  const onSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={onSubmit} autoComplete="off">
      <Form.Item name={"username"}>
        <Input type="text" id="username" placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item name={"password"}>
        <Input type="password" id="password" placeholder="请输入密码" />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
}
