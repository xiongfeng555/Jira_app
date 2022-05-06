import React, { useState, useEffect } from "react";
import { cleanObject, useDebounce } from "utils";
import List from "./List";
import Search from "./Search";
import { useHttp } from "utils/http";
import { Typography } from "antd";
import styled from "@emotion/styled";
import { useAsync } from "utils/use-async";
import { Project } from "./List";
import { useUrlQueryParm } from "utils/url";
export default function ProjectListScreen() {
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
      <h1>项目列表</h1>
      <Search params={params} setParams={setParams} users={users} />
      <Typography.Text type="danger">
        {error ? error.message : null}
      </Typography.Text>
      <List dataSource={projects || []} users={users} loading={isLoading} />
    </Container>
  );
}
const Container = styled.div`
  padding: 2rem;
`;
