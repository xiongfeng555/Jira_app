/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-12 14:55:18
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-13 16:12:36
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\kanban\kanban-colunm.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Kanban } from "types/kanban";
import { Task } from "types/task";
import { useTasks } from "utils/use-task";
import taskIcon from "../../assets/task.svg";
import bugIcon from "../../assets/bug.svg";
import { useTaskTypes } from "utils/task-type";
import styled from "@emotion/styled";
import { Card } from "antd";
import { useTasksSearchParams } from "./util";

const TaskTypeIcon = ({ id }: { id: number }) => {
  const { data: taskTypes } = useTaskTypes();
  const name = taskTypes?.find((taskType) => taskType.id === id)?.name;
  if (!name) {
    return null;
  }
  return (
    <img
      src={name === "task" ? taskIcon : bugIcon}
      alt=""
      width={"15px"}
      style={{ marginLeft: "3px" }}
    />
  );
};

export default function KanbanColunm({
  kanban,
  key,
}: {
  kanban: Kanban;
  key: number;
}) {
  const { data: allTasks } = useTasks(useTasksSearchParams());
  const tasks = allTasks?.filter((task: Task) => task.kanbanId === kanban.id);
  return (
    <Container>
      <h3 style={{ fontWeight: "bolder" }}>{kanban.name}</h3>
      <TasksContainer>
        {tasks?.map((task: any) => {
          return (
            <Card key={task.id} style={{ marginBottom: "0.5rem" }}>
              {task.name}
              <TaskTypeIcon id={task.typeId} />
            </Card>
          );
        })}
      </TasksContainer>
    </Container>
  );
}
const Container = styled.div`
  min-width: 27rem;
  border-radius: 6px;
  background-color: rgb(244, 245, 247);
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0.7rem 1rem;
  margin-right: 1.5rem;
`;

const TasksContainer = styled.div`
  overflow: scroll;
  flex: 1;
  ::-webkit-scrollbar {
    display: none;
  }
`;
