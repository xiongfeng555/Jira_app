/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-04-28 20:16:30
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 13:51:39
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\project-list\List.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { User } from "../../types/User";
import { Button, Dropdown, Menu, Modal, Table, TableProps } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Pin from "components/pin";
import { useDeleteProject, useEditProject } from "utils/use-edit-project";
import store from "redux/store";

import {
  createPatchListFavoriteAction,
  createDeleteProjectAction,
} from "../../redux/actions";
import { Project } from "../../types/Project";
interface ListProps extends TableProps<Project> {
  users: User[];
  projectModalOpen: boolean;
  open: () => void;
  startEdit: (id: number) => void;
  editingProject: Project;
  close: () => void;
  isLoading: boolean;
}
const List = ({ users, ...props }: ListProps) => {
  const { mutate } = useEditProject();
  const { projectLists } = store.getState();
  const { mutateAsync } = useDeleteProject();
  const deleteProject = (id: number) => {
    return () => {
      Modal.confirm({
        title: "您确定删除这个项目吗？",
        icon: <ExclamationCircleOutlined />,
        content: "点击确定删除",
        cancelText: "取消",
        okText: "确定",
        onOk() {
          store.dispatch(createDeleteProjectAction(id));
          mutateAsync(id);
        },
      });
    };
  };
  return (
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
                  await store.dispatch(
                    createPatchListFavoriteAction(project.id)
                  );
                  await mutate({ id: project.id, pin });
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
          title: "操作",
          render(value, project) {
            return (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key={"edit"}>
                      <Button
                        style={{ padding: "0px" }}
                        type="link"
                        onClick={() => {
                          props.startEdit(project.id);
                        }}
                      >
                        编辑
                      </Button>
                    </Menu.Item>
                    <Menu.Item key={"delete"}>
                      <Button
                        style={{ padding: "0px" }}
                        type="link"
                        onClick={deleteProject(project.id)}
                      >
                        删除
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
