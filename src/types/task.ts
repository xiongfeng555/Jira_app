/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-12 13:55:27
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-12 14:00:38
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\types\task.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface Task {
  id: number;
  name: string;
  // 经办人
  processorId: number;
  projectId: number;
  // 任务组
  epicId: number;
  kanbanId: number;
  // bug or task
  typeId: number;
  note: string;
}
