import { Form, Input, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";
import TaskTypeSelect from "components/task-type-select";
import UserSelect from "components/user-select";
import React, { useEffect } from "react";
import { useEditTask } from "utils/use-task";
import { useTasksModal, useTasksQueryKey } from "./util";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
export default function TaskModal() {
  const [form] = useForm();
  const { editingTask, editingTaskId, close } = useTasksModal();
  const { isLoading: editLoading, mutateAsync: editTask } = useEditTask(
    useTasksQueryKey()
  );
  const onCancel = () => {
    close();
    form.resetFields();
  };
  const onOk = async () => {
    await editTask({
      ...editingTask,
      ...form.getFieldsValue(),
    });
    close();
  };
  useEffect(() => {
    form.setFieldsValue(editingTask);
  }, [form, editingTask]);
  return (
    <Modal
      okText={"确认"}
      cancelText={"取消"}
      confirmLoading={editLoading}
      title={"编辑任务"}
      visible={!!editingTaskId}
      onCancel={onCancel}
      onOk={onOk}
      forceRender={true}
    >
      <Form initialValues={editingTask} form={form} {...layout}>
        <Form.Item
          label="任务名"
          name={"name"}
          rules={[{ required: true, message: "请输入任务名" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="经办人" name={"processorId"}>
          <UserSelect defaultOptionName="经办人" />
        </Form.Item>
        <Form.Item label="类型" name={"typeId"}>
          <TaskTypeSelect />
        </Form.Item>
      </Form>
    </Modal>
  );
}
