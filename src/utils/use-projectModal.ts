/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-10 14:10:50
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 18:52:40
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\utils\use-projectModal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useCallback } from "react";
import { Project } from "screens/project-list/List";
import { useUrlQueryParm } from "./url";
import { useProjectDetail } from "./use-edit-project";
export type projectModalProps = {
  projectModalOpen: boolean;
  open: () => void;
  startEdit: (id: number) => void;
  editingProject: Project;
  close: () => void;
  isLoading: boolean;
};
export const useProjectModal = () => {
  const [{ projectCreate }, setProjectOpen] = useUrlQueryParm([
    "projectCreate",
  ]);
  const [{ editingProjectId }, setEditProjectId] = useUrlQueryParm([
    "editingProjectId",
  ]);
  const { data: editingProject, isLoading } = useProjectDetail(
    Number(editingProjectId)
  );
  const open = useCallback(() => {
    setProjectOpen({
      projectCreate: true,
    });
  }, [setProjectOpen]);
  const close = useCallback(() => {
    // 这里注意顺序问题 ?
    setEditProjectId({
      editingProjectId: "",
    });
    setProjectOpen({
      projectCreate: "",
    });
  }, [setProjectOpen, setEditProjectId]);
  const startEdit = useCallback(
    (id: number) => {
      setEditProjectId({
        editingProjectId: id,
      });
    },
    [setEditProjectId]
  );
  return {
    projectModalOpen: projectCreate === "true" || Boolean(editingProject),
    open,
    close,
    startEdit,
    editingProject,
    isLoading,
  };
};
