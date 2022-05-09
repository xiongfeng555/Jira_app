/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-07 14:46:45
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-07 14:53:43
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\components\pin.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Rate } from "antd";
interface pinProps extends React.ComponentProps<typeof Rate> {
  checked: boolean;
  onCheckedChange?: (value: boolean) => void;
}
export default function Pin(props: pinProps) {
  const { checked, onCheckedChange, ...rest } = props;
  return (
    <Rate
      count={1}
      value={checked ? 1 : 0}
      onChange={(num) => onCheckedChange?.(!!num)}
      {...rest}
    ></Rate>
  );
}
