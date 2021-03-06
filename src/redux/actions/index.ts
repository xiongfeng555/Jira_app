/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-10 09:31:03
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 09:48:52
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\redux\actions\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Project } from "types/Project";
import {
  SET_PROJECT_LIST,
  PATCH_LIST_FAVORITE,
  DELETE_PROJECT,
  EDIT_PROJECT_ITEM,
  ADD_PROJECT_ITEM,
} from "../contant";

export const createSetProjectListActions = (projectList: Project[] | []) => ({
  data: projectList,
  type: SET_PROJECT_LIST,
});

export const createPatchListFavoriteAction = (id: number) => ({
  data: id,
  type: PATCH_LIST_FAVORITE,
});

export const createDeleteProjectAction = (id: number) => ({
  data: id,
  type: DELETE_PROJECT,
});

export const createEditProjectAction = (project: Project) => ({
  data: project,
  type: EDIT_PROJECT_ITEM,
});

export const createAddProjectAction = (project: Project) => ({
  data: project,
  type: ADD_PROJECT_ITEM,
});
