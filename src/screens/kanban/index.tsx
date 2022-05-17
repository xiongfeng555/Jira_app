/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-06 11:01:04
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-17 14:02:59
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\kanban\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-06 11:01:04
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-14 16:03:27
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\kanban\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "@emotion/styled";
import { Spin } from "antd";
import { ScreenContainer } from "components/lib";
import React from "react";
import { Kanban } from "types/kanban";
import { useDocumentTitle } from "utils";
import { useKanbans } from "utils/use-kanban";
import { useTasks } from "utils/use-task";
import CreateKanban from "./create-kanban";
import KanbanColunm from "./kanban-colunm";
import SearchPanel from "./search-panel";
import TaskModal from "./task-modal";
import { useKanbanSearchParams, useProjectInUrl } from "./util";

export default function KanPanScreen() {
  useDocumentTitle("看板列表");
  const { data: kanbans, isLoading: kanbanLoading } = useKanbans(
    useKanbanSearchParams()
  );
  const { data: currentProject } = useProjectInUrl();
  const { isLoading: tasksLoading } = useTasks(useKanbanSearchParams());
  const isLoading = kanbanLoading || tasksLoading;
  return (
    <ScreenContainer>
      <h1 style={{ fontWeight: "bolder" }}>{currentProject?.name}看板</h1>
      <SearchPanel />

      {isLoading ? (
        <Spin size="large" />
      ) : (
        <ColumnsContainer>
          {kanbans?.map((kanban: Kanban) => {
            return (
              <KanbanColunm kanban={kanban} key={kanban.id}></KanbanColunm>
            );
          })}{" "}
          <CreateKanban />
        </ColumnsContainer>
      )}
      <TaskModal />
    </ScreenContainer>
  );
}

export const ColumnsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  flex: 1;
`;
