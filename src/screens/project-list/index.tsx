/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-04-28 19:58:28
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 09:36:01
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\project-list\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from "react";
import List from "./List";
import Search from "./Search";
import { useHttp } from "utils/http";
import { Button, Typography } from "antd";
import styled from "@emotion/styled";
import { useAsync } from "utils/use-async";
import { Project } from "./List";
import { useUrlQueryParm } from "utils/url";
import { Row } from "components/lib";
import { useProjects } from "utils/use-projects";
import { projectModalProps } from "utils/use-projectModal";
export default function ProjectListScreen(props: projectModalProps) {
  const [params, setParams] = useUrlQueryParm(["name", "personId"]);
  const [users, setUsers] = useState([]);
  const { isLoading, error, run } = useAsync<Project[]>();
  const client = useHttp();
  const questLists = useProjects();
  useEffect(() => {
    run(questLists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    client("users").then((data) => setUsers(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Row between={true}>
        <h1>项目列表</h1>
        <Button onClick={() => props.open()}>创建项目</Button>
      </Row>
      <Search params={params} setParams={setParams} users={users} />
      <Typography.Text type="danger">
        {error ? error.message : null}
      </Typography.Text>
      <List users={users} loading={isLoading} {...props} />
    </Container>
  );
}
const Container = styled.div`
  padding: 2rem;
`;
