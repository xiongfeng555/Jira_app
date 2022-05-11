import React, { useEffect } from "react";
import { Drawer, Button, Spin, Form, Input } from "antd";
import { useProjectModal } from "utils/use-projectModal";
import IdSelect from "components/id-select";
import { useAddProject, useEditProject } from "utils/use-edit-project";
import { useForm } from "antd/lib/form/Form";
import { DisplayError } from "components/lib";

export default function ProjectModel(props: {
  projectModalOpen: boolean;
  onClose: () => void;
}) {
  const { close, editingProject, isLoading } = useProjectModal();
  const [form] = useForm();
  const useMutateProject = editingProject ? useEditProject : useAddProject;
  const { mutateAsync, error, isLoading: mutateLoading } = useMutateProject();
  const title = editingProject ? "编辑项目" : "创建项目";
  const onFinish = (values: any) => {
    mutateAsync({ ...editingProject, ...values }).then(() => {
      form.resetFields();
      close();
    });
  };
  useEffect(() => {
    form.setFieldsValue(editingProject);
  }, [editingProject, form]);
  return (
    <Drawer
      visible={props.projectModalOpen}
      width="100%"
      height={"100vh"}
      onClose={close}
      forceRender={true}
    >
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <>
          <h1>{title}</h1>
          <DisplayError error={error} />
          <Form
            form={form}
            layout="vertical"
            style={{ width: "40rem" }}
            onFinish={onFinish}
          >
            <Form.Item
              label="名称"
              name={"name"}
              rules={[{ required: true, message: "请输入项目名称" }]}
            >
              <Input placeholder="请输入项目名称"></Input>
            </Form.Item>
            <Form.Item
              label="部门"
              name={"organization"}
              rules={[{ required: true, message: "请输入部门名称" }]}
            >
              <Input placeholder="请输入部门名称"></Input>
            </Form.Item>
            <Form.Item label="负责人" name={"personId"}>
              <IdSelect defaultOptionName="负责人"></IdSelect>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={mutateLoading}>
                {editingProject ? "保存" : "提交"}
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </Drawer>
  );
}
