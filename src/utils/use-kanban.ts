/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-12 14:04:21
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-16 14:23:22
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\utils\use-kanban.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useMutation, useQuery, QueryKey } from "react-query";
import { Kanban } from "types/kanban";
import { useHttp } from "./http";
import { useAddConfig } from "./use-optimise-options";

export const useKanbans = (params?: Partial<Kanban>) => {
  const client = useHttp();
  return useQuery(["kanbans", params], () => {
    return client("kanbans", {
      data: params,
    });
  });
};
export const useAddKanban = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation((params: Partial<Kanban>) => {
    return client(`kanbans`, {
      method: "POST",
      data: params,
    });
  }, useAddConfig(queryKey));
};
