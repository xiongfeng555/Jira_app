import React, { useState, useEffect } from "react";
import { cleanObject, useDebounce } from "utils";
import List from "./List";
import Search from "./Search";
import qs from "qs";
export default function ProjectScreen() {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParams = useDebounce(params);
  const baseURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    fetch(
      `${baseURL}/projects?${qs.stringify(cleanObject(debouncedParams))}`
    ).then(async (response) => {
      setProjects(await response.json());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParams]);
  useEffect(() => {
    fetch(`${baseURL}/users`).then(async (response) => {
      setUsers(await response.json());
    });
  }, []);
  return (
    <div>
      <Search params={params} setParams={setParams} users={users} />
      <List projects={projects} users={users} />
    </div>
  );
}
