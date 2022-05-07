/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-07 10:02:44
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-07 13:57:35
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\components\id-select.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Select } from "antd";
import React from "react";
import { Raw } from "types";
type SelectProps = React.ComponentProps<typeof Select>;

interface IdSelectProps
  extends Omit<
    SelectProps,
    "value" | "onChange" | "defaultOptonName" | "options"
  > {
  value: Raw | null | undefined;
  onChange: (value?: number | string) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}
/**
 * @description:
 * value 可以传入多种类型的值
 * onChange 只会回调number|undefined累心
 * 当isNaN(Number(value))为true的时候，代表选择默认类型
 * 当选择默认类型的时候，onChange会回调undefined
 * @param {IdSelectProps} props
 * @return {*}
 */
export default function IdSelect(props: IdSelectProps) {
  const { value, onChange, defaultOptionName, options, ...rest } = props;
  return (
    <Select
      value={options?.length ? toNumber(value) : 0}
      onChange={(value) => onChange(toNumber(value) || "")}
      {...rest}
    >
      {defaultOptionName ? (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option key={option.id} value={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
}

const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));
