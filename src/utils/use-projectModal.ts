/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-10 14:10:50
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 14:31:47
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\utils\use-projectModal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useCallback } from "react";
import { useUrlQueryParm } from "./url";

export const useProjectModal = () => {
  const [{ projectCreate }, setProjectOpen] = useUrlQueryParm([
    "projectCreate",
  ]);
  const open = useCallback(() => {
    setProjectOpen({
      projectCreate: true,
    });
  }, [setProjectOpen]);
  const close = useCallback(
    () =>
      setProjectOpen({
        projectCreate: "",
      }),
    [setProjectOpen]
  );
  return {
    projectModalOpen: projectCreate === "true",
    open,
    close,
  };
};