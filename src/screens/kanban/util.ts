/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-12 14:42:06
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-16 16:52:59
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\kanban\util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useMemo } from "react";
import { useLocation } from "react-router";
import { useUrlQueryParm } from "utils/url";
import { useProjectById } from "utils/use-projects";

export const useProjectIdInUrl = () => {
  const { pathname } = useLocation();
  const id = pathname.match(/projects\/(\d+)/)?.[1];
  return Number(id);
};
export const useProjectInUrl = () => useProjectById(useProjectIdInUrl());
export const useKanbanSearchParams = () => ({ projectId: useProjectIdInUrl() });
export const useKanbansQueryKey = () => ["kanbans", useKanbanSearchParams];
export const useTasksSearchParams = () => {
  const [param] = useUrlQueryParm(["name", "typeId", "processorId", "tagId"]);
  // const personId = useProjectIdInUrl();
  return useMemo(
    () => ({
      typeId: Number(param.typeId) || undefined,
      processorId: Number(param.processorId) || undefined,
      tagId: Number(param.tagId) || undefined,
      name: param.name,
    }),
    [param]
  );
};

export const useTasksQueryKey = () => ["tasks", useTasksSearchParams()];
