import React from "react";
import { Drawer, Button } from "antd";

export default function ProjectModel(props: {
  projectModalOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer
      visible={props.projectModalOpen}
      width="100%"
      height={"100vh"}
      onClose={props.onClose}
    >
      <h1>ProjectModel</h1>
      <Button onClick={props.onClose}>关闭</Button>
    </Drawer>
  );
}
