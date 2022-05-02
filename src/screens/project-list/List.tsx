import React from "react";
import { User } from "./Search";
interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}
interface ListProps {
  users: User[];
  projects: Project[];
}
const List = (props: ListProps) => {
  const { projects, users } = props;
  console.log(projects);
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                {users.find((user) => user.id === item.personId)?.name ||
                  "未知"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
