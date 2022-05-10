import { Project } from "screens/project-list/List";
import { SET_PROJECT_LIST } from "../contant";
const initState: Project[] | [] = [];
export default function projectListReducer(
  state: typeof initState = initState,
  actions: { data: Project[]; type: string }
) {
  const { data, type } = actions;
  switch (type) {
    case SET_PROJECT_LIST:
      return [...data];
    default:
      return state;
  }
}
