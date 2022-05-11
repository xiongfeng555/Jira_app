import { Project } from "screens/project-list/List";
import {
  SET_PROJECT_LIST,
  PATCH_LIST_FAVORITE,
  DELETE_PROJECT,
} from "../contant";
const initState: Project[] | [] = [];
export default function projectListReducer(
  state: typeof initState = initState,
  actions: { data: Project[] | number; type: string }
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
    default:
      return state;
  }
}
