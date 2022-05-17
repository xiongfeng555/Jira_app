/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-13 15:57:10
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-17 14:01:46
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\components\task-type-select.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import IdSelect from "./id-select";
import { useTaskTypes } from "utils/task-type";
export default function TaskTypeSelect(
  props: React.ComponentProps<typeof IdSelect>
) {
  const { data: taskTypes } = useTaskTypes();
  return <IdSelect options={taskTypes || []} {...props} />;
}
