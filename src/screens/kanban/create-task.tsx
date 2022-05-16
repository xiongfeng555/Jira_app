/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-16 16:49:33
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-16 18:09:36
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\kanban\create-task.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { useAddTask } from "utils/use-task";
import { useProjectIdInUrl, useTasksQueryKey } from "./util";

export default function CreateTask({ kanbanId }: { kanbanId: number }) {
  const [name, setName] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const { mutateAsync } = useAddTask(useTasksQueryKey());
  const projectId = useProjectIdInUrl();
  const submit = () => {
    if (!name) {
      return;
    }
    mutateAsync({
      name,
      kanbanId,
      projectId,
    });
    setInputMode(false);
    setName("");
  };
  useEffect(() => {
    setName("");
  }, [inputMode]);
  const toggle = () => setInputMode(!inputMode);
  if (!inputMode) {
    return <div onClick={toggle}>+创建事务</div>;
  }
  return (
    <Input
      type="text"
      placeholder="事务名称"
      onBlur={toggle}
      value={name}
      onChange={(evt) => setName(evt.target.value)}
      onPressEnter={submit}
      autoFocus={true}
    />
  );
}
