import React from "react";
import { Input, Select, Form } from "antd";
export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}
interface SearchProps {
  params: {
    name: string;
    personId: string;
  };
  users: User[];
  setParams: (params: SearchProps["params"]) => void;
}
export default function search(props: SearchProps) {
  const { params, setParams, users } = props;
  return (
    <Form layout="inline" style={{ marginBottom: "2rem" }}>
      <Form.Item>
        <Input
          type="text"
          onChange={(evt) =>
            setParams({
              ...params,
              name: evt.target.value,
            })
          }
          placeholder="项目名称"
        />
      </Form.Item>
      <Form.Item>
        <Select
          defaultValue="负责人"
          onChange={(value) =>
            setParams({
              ...params,
              personId: value,
            })
          }
        >
          <Select.Option value="">负责人</Select.Option>
          {users.map((item) => {
            return (
              <Select.Option value={item.id} key={item.id}>
                {item.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </Form>
  );
}
