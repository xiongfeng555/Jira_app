/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-13 15:43:42
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-13 16:04:40
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\components\use-select.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import { User } from "types/User";
import { useHttp } from "utils/http";
import IdSelect, { IdSelectProps } from "./id-select";

interface UserSelectProps extends IdSelectProps {}
export default function UserSelect(props: UserSelectProps) {
  const client = useHttp();
  const [users, setUsers] = useState<User[] | undefined>(undefined);
  useEffect(() => {
    client("users").then((users) => setUsers(users));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <IdSelect {...props} options={users}>
      use-select
    </IdSelect>
  );
}
