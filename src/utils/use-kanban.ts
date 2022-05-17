/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-12 14:04:21
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-17 16:21:29
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\utils\use-kanban.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useMutation, useQuery, QueryKey } from "react-query";
import { useKanbansQueryKey } from "screens/kanban/util";
import { Kanban } from "types/kanban";
import { useHttp } from "./http";
import { useAddConfig, useDeleteConfig } from "./use-optimise-options";

export const useKanbans = (params?: Partial<Kanban>) => {
  const client = useHttp();
  return useQuery(useKanbansQueryKey(), () => {
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
export const useDeleteKanban = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation((params: { id: number }) => {
    return client(`kanbans/${params.id}`, {
      method: "DELETE",
    });
  }, useDeleteConfig(queryKey));
};
