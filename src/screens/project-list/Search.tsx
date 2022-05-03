import React from "react";
import { Input, Select } from "antd";
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
    <div>
      <Input
        style={{ width: "50%", margin: "20px -4px 40px 0" }}
        type="text"
        onChange={(evt) =>
          setParams({
            ...params,
            name: evt.target.value,
          })
        }
      />
      &nbsp;
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
    </div>
  );
}
