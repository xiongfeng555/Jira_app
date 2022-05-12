import { Project } from "screens/project-list/List";
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
