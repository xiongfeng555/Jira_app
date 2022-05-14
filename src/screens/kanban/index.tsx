/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-06 11:01:04
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-14 16:03:27
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\kanban\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "@emotion/styled";
import { ScreenContainer } from "components/lib";
import React from "react";
import { Kanban } from "types/kanban";
import { useDocumentTitle } from "utils";
import { useKanbans } from "utils/use-kanban";
import KanbanColunm from "./kanban-colunm";
import SearchPanel from "./search-panel";
import { useProjectInUrl } from "./util";

export default function KanPanScreen() {
  useDocumentTitle("看板列表");
  const { data: kanbans } = useKanbans();
  const { data: currentProject } = useProjectInUrl();
  return (
    <ScreenContainer>
      <h1 style={{ fontWeight: "bolder" }}>{currentProject?.name}看板</h1>
      <SearchPanel />
      <Container>
        {kanbans?.map((kanban: Kanban) => {
          return <KanbanColunm kanban={kanban} key={kanban.id}></KanbanColunm>;
        })}
      </Container>
    </ScreenContainer>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
`;
