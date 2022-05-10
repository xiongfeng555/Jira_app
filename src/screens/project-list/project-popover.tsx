/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-08 16:58:54
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 10:15:21
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\project-list\project-popover.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Popover, Typography, List, Divider, Button } from "antd";
import styled from "@emotion/styled";
import store from "redux/store";
export default function ProjectPopover(props: { open: () => void }) {
  const { projectLists } = store.getState();
  const pinnedProjects = projectLists.filter((project) => project.pin);
  // const { data: projects } = useProjects();
  // const pinnedProjects = projects?.filter((project) => project.pin);
  const content = (
    <ContentContainer>
      <Typography.Text type="secondary">收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((project) => (
          <List.Item>
            <List.Item.Meta title={project.name} />
          </List.Item>
        ))}
      </List>
      <Divider />
      <Button type="link" style={{ padding: "0px" }} onClick={props.open}>
        创建项目
      </Button>
    </ContentContainer>
  );
  return (
    <Popover placement="bottom" content={content}>
      <span>项目</span>
    </Popover>
  );
}

const ContentContainer = styled.div`
  min-width: 30rem;
`;
