import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from ".";

export default function LoginScreen() {
  const { register } = useAuth();
  const onSubmit = (values: { username: string; password: string }) => {
    register(values);
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
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
}
