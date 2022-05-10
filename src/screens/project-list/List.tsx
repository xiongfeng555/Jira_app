/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-04-28 20:16:30
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 10:28:12
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\project-list\List.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { User } from "./Search";
import { Button, Dropdown, Menu, Table, TableProps } from "antd";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Pin from "components/pin";
import { useEditProject } from "utils/use-edit-project";
import store from "redux/store";
import { useProjects } from "utils/use-projects";
export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
  ownerId: number;
  pin: boolean;
}
interface ListProps extends TableProps<Project> {
  users: User[];
  open: (isOpen: boolean) => void;
}
const List = ({ users, ...props }: ListProps) => {
  const { mutate } = useEditProject();
  const { projectLists } = store.getState();
  const questLists = useProjects();
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
      dataSource={projectLists}
      pagination={false}
      columns={[
        {
          title: <Pin checked={true} />,
          render(value, project) {
            return (
              <Pin
                checked={project.pin}
                onCheckedChange={async (pin) => {
                  await mutate({ id: project.id, pin });
                  questLists();
                }}
              />
            );
          },
        },
        {
          title: "项目名称",
          render(value, project, index) {
            return <Link to={project.id + ""}>{project.name}</Link>;
          },
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
        {
          title: "编辑",
          render(value, project) {
            return (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key={"edit"}>
                      <Button
                        style={{ padding: "0px" }}
                        type="link"
                        onClick={() => props.open(true)}
                      >
                        编辑
                      </Button>
                    </Menu.Item>
                  </Menu>
                }
              >
                <Button style={{ padding: "0px" }} type="link">
                  ...
                </Button>
              </Dropdown>
            );
          },
        },
      ]}
      {...props}
    ></Table>
  );
};

export default List;
