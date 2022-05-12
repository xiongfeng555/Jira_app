/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-04-28 20:16:47
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 13:51:27
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\project-list\Search.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Input, Form } from "antd";
import IdSelect from "components/id-select";
import { User } from "../../types/User";
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
