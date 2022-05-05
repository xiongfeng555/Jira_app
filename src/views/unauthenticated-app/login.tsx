import { useAuth } from "context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from ".";
import { useAsync } from "utils/use-async";

export default function LoginScreen({
  onError,
}: {
  onError: (error: Error) => void;
}) {
  const { login } = useAuth();
  const { run, isLoading } = useAsync();
  const onSubmit = async (values: { username: string; password: string }) => {
    try {
      await run(login(values));
    } catch (error) {
      console.log("我是：", error);
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
      <Form.Item>
        <LongButton htmlType="submit" type="primary" loading={isLoading}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
}
