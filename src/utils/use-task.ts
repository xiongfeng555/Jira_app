/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-12 14:04:21
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-16 16:55:38
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\utils\use-kanban.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { QueryKey, useMutation, useQuery } from "react-query";

import { Task } from "types/task";
import { useHttp } from "./http";
import { useAddConfig } from "./use-optimise-options";

export const useTasks = (params?: Partial<Task>) => {
  const client = useHttp();
  return useQuery(["tasks", params], () => {
    return client("tasks", {
      data: params,
    });
  });
};
export const useAddTask = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation((params: Partial<Task>) => {
    return client(`tasks`, {
      method: "POST",
      data: params,
    });
  }, useAddConfig(queryKey));
};
