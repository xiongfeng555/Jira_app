import React from "react";
import { User } from "./Search";
import { Table, TableProps } from "antd";
import dayjs from "dayjs";
export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
  ownerId: number;
}
interface ListProps extends TableProps<Project> {
  users: User[];
}
const List = ({ users, ...props }: ListProps) => {
  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th>名称</th>
    //       <th>负责人</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {projects.map((item) => {
    //       return (
    //         <tr key={item.id}>
    //           <td>{item.name}</td>
    //           <td>
    //             {users.find((user) => user.id === item.personId)?.name ||
    //               "未知"}
    //           </td>
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </table>
    <Table
      pagination={false}
      columns={[
        {
          title: "项目名称",
          dataIndex: "name",
        },
        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "无"}
              </span>
            );
          },
          sorter: (a, b) => a.created - b.created,
        },
      ]}
      {...props}
    ></Table>
  );
};

export default List;
