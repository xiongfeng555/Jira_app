/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-12 14:04:21
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-13 14:25:35
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\utils\use-kanban.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useQuery } from "react-query";

import { Task } from "types/task";
import { useHttp } from "./http";

export const useTasks = (params?: Partial<Task>) => {
  const client = useHttp();
  return useQuery(["tasks", params], () => {
    return client("tasks", {
      data: params,
    });
  });
};
