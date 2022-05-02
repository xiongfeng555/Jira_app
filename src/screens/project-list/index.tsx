import React, { useState, useEffect } from "react";
import { cleanObject, useDebounce } from "utils";
import List from "./List";
import Search from "./Search";
import { useHttp } from "utils/http";
export default function ProjectScreen() {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParams = useDebounce(params);
  const client = useHttp();
  useEffect(() => {
    // fetch(
    //   `${baseURL}/projects?${qs.stringify(cleanObject(debouncedParams))}`
    // ).then(async (response) => {
    //   setProjects(await response.json());
    // });
    client("projects", {
      data: cleanObject(debouncedParams),
    }).then((data) => setProjects(data));
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
    <div>
      <Search params={params} setParams={setParams} users={users} />
      <List projects={projects} users={users} />
    </div>
  );
}
