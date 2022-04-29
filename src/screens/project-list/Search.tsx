import React from "react";
export interface User {
  id: number;
  name: string;
}
interface SearchProps {
  params: {
    name: string;
    personId: string;
  };
  users: User[];
  setParams: (params: SearchProps["params"]) => void;
}
export default function search(props: SearchProps) {
  const { params, setParams, users } = props;
  return (
    <div>
      <input
        type="text"
        onChange={(evt) =>
          setParams({
            ...params,
            name: evt.target.value,
          })
        }
      />
      &nbsp;
      <select
        onChange={(evt) =>
          setParams({
            ...params,
            personId: evt.target.value,
          })
        }
      >
        <option value="">负责人</option>
        {users.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
