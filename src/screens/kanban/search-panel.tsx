/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-13 15:15:00
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-13 16:08:02
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\screens\kanban\search-panel.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Input } from "antd";
import { Row } from "components/lib";
import TaskTypeSelect from "components/task-type-select";
import UserSelect from "components/user-select";
import React from "react";
import { useSetUrlSearchParam } from "utils/url";
import { useTasksSearchParams } from "./util";

export default function SearchPanel() {
  const searchParam = useTasksSearchParams();
  const setSearchParam = useSetUrlSearchParam();
  const reset = () => {
    setSearchParam({
      typeId: undefined,
      processorId: undefined,
      tagId: undefined,
      name: undefined,
    });
  };
  return (
    <Row marginBottom={40} gap={true}>
      <Input
        style={{ width: "20rem" }}
        placeholder="任务名"
        value={searchParam.name}
        onChange={(evt: any) => setSearchParam({ name: evt.target.value })}
      />
      <UserSelect
        defaultOptionName="经办人"
        value={searchParam.processorId}
        onChange={(value) => setSearchParam({ processorId: value })}
      />
      <TaskTypeSelect
        defaultOptionName="类型"
        value={searchParam.typeId}
        onChange={(value) => setSearchParam({ typeId: value })}
      />
      <Button type="primary" onClick={reset}>
        清楚筛选器
      </Button>
    </Row>
  );
}
