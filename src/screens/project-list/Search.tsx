import React from "react";
import { Input, Form } from "antd";
import IdSelect from "components/id-select";
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
        <IdSelect
          value={params.personId}
          defaultOptionName="负责人"
          options={users}
          onChange={(value) => {
            setParams({
              ...params,
              personId: String(value),
            });
          }}
        ></IdSelect>
      </Form.Item>
    </Form>
  );
}
