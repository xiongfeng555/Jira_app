/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-08 16:52:12
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-08 18:31:45
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\utils\use-projects.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect } from "react";
import { Project } from "screens/project-list/List";
import { useHttp } from "./http";
import { useAsync } from "./use-async";
export const useProjects = () => {
  const { run, data, ...rest } = useAsync<Project[]>();
  const client = useHttp();
  useEffect(() => {
    run(client("projects"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    data,
    ...rest,
  };
};
