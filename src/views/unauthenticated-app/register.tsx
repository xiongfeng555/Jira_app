import { useAuth } from "context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from ".";

export default function LoginScreen({
  onError,
}: {
  onError: (error: Error) => void;
}) {
  const { register } = useAuth();
  const onSubmit = async ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    if (cpassword !== values.password) {
      onError(new Error("请确认两次密码相同"));
      return;
    }
    try {
      await register(values);
    } catch (error) {
      onError(error as Error);
    }
  };
  return (
    <Form onFinish={onSubmit} autoComplete="off">
      <Form.Item name={"username"}>
        <Input type="text" id="username" placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item name={"password"}>
        <Input type="password" id="password" placeholder="请输入密码" />
      </Form.Item>
      <Form.Item name={"cpassword"}>
        <Input type="password" id="cpassword" placeholder="请确认密码" />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
}
