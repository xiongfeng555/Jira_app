import { Input } from "antd";
import React, { useState } from "react";
import { useAddKanban } from "utils/use-kanban";
import { useKanbansQueryKey, useProjectIdInUrl } from "./util";
import { Container } from "./kanban-colunm";
import { useQueryClient } from "react-query";

export default function CreateKanban() {
  const [name, setName] = useState("");
  const projectId = useProjectIdInUrl();
  const queryClient = useQueryClient();
  const { mutateAsync } = useAddKanban(useKanbansQueryKey());
  const submit = async () => {
    if (!name) {
      return;
    }
    await mutateAsync({ name, projectId });
    queryClient.invalidateQueries("kanbans");
    setName("");
  };
  return (
    <Container>
      <Input
        size="large"
        placeholder="新建看板名称"
        onPressEnter={submit}
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
    </Container>
  );
}
