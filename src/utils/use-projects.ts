/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-08 16:52:12
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 14:41:38
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\utils\use-projects.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import { useQuery } from "react-query";
import { createSetProjectListActions } from "redux/actions";
import store from "redux/store";
import { Project } from "types/Project";

import { useHttp } from "./http";
import { useUrlQueryParm } from "./url";

export const useProjects = () => {
  const [searchParams] = useUrlQueryParm(["name", "personId"]);
  const client = useHttp();
  return async () => {
    const data = await client("projects", {
      data: searchParams,
    });
    store.dispatch(createSetProjectListActions(data));
    return data;
  };
};
export const useProjectById = (id: number) => {
  const client = useHttp();
  return useQuery("projectId", () => {
    return client(`projects/${id}`);
  });
};
