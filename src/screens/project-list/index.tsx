/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-04-28 19:58:28
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-08 19:00:46
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\project-list\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from "react";
import { cleanObject, useDebounce } from "utils";
import List from "./List";
import Search from "./Search";
import { useHttp } from "utils/http";
import { Button, Typography } from "antd";
import styled from "@emotion/styled";
import { useAsync } from "utils/use-async";
import { Project } from "./List";
import { useUrlQueryParm } from "utils/url";
import { Row } from "components/lib";
export default function ProjectListScreen(props: {
  open: (isOpen: boolean) => void;
}) {
  const [params, setParams] = useUrlQueryParm(["name", "personId"]);
  const [users, setUsers] = useState([]);
  const debouncedParams = useDebounce(params);
  const { isLoading, run, error, data: projects } = useAsync<Project[]>();
  const client = useHttp();
  useEffect(() => {
    // fetch(
    //   `${baseURL}/projects?${qs.stringify(cleanObject(debouncedParams))}`
    // ).then(async (response) => {
    //   setProjects(await response.json());
    // });
    run(
      client("projects", {
        data: cleanObject(debouncedParams),
      })
    );
    // client("projects", {
    //   data: cleanObject(debouncedParams),
    // })
    //   .then((data) => setProjects(data))
    //   .catch((error) => {
    //     setProjects([]);
    //     setError(error);
    //   })
    //   .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParams]);
  useEffect(() => {
    // fetch(`${baseURL}/users`).then(async (response) => {
    //   setUsers(await response.json());
    // });
    client("users").then((data) => setUsers(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Row between={true}>
        <h1>项目列表</h1>
        <Button onClick={() => props.open(true)}>创建项目</Button>
      </Row>

      <Search params={params} setParams={setParams} users={users} />
      <Typography.Text type="danger">
        {error ? error.message : null}
      </Typography.Text>
      <List
        dataSource={projects || []}
        users={users}
        loading={isLoading}
        open={props.open}
      />
    </Container>
  );
}
const Container = styled.div`
  padding: 2rem;
`;
