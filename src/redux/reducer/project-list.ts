/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-11 16:01:55
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 13:51:01
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\redux\reducer\project-list.ts
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
const initState: Project[] | [] = [];
export default function projectListReducer(
  state: typeof initState = initState,
  actions: { data: any; type: string }
) {
  const { data, type } = actions;
  switch (type) {
    case SET_PROJECT_LIST:
      return [...(data as Project[])];
    case PATCH_LIST_FAVORITE:
      const target = state.find((project) => project.id === data);
      if (target) {
        target.pin = !target?.pin;
      }
      return [...state];
    case DELETE_PROJECT:
      const index = state.findIndex((project) => project.id === data);
      if (index > -1) {
        state.splice(index, 1);
      }
      return [...state];
    case ADD_PROJECT_ITEM:
      return [...state, data];
    case EDIT_PROJECT_ITEM:
      const findIndex = state.findIndex((project) => project.id === data.id);
      state.splice(findIndex, 1, data);
      return [...state];
    default:
      return state;
  }
}
