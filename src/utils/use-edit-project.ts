/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-07 15:01:40
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-07 15:14:45
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\utils\use-edit-project.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Project } from "screens/project-list/List";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useEditProject = () => {
  const { run } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    return run(
      client(`projects/${params.id}`, {
        method: "PATCH",
        data: params,
      })
    );
  };
  return {
    mutate,
  };
};

export const useAddProject = () => {
  const { run } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    return run(
      client(`projects/${params.id}`, {
        method: "POST",
        data: params,
      })
    );
  };
  return {
    mutate,
  };
};