/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-06 14:12:23
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-13 15:32:18
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\utils\url.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useMemo } from "react";
import { useSearchParams, URLSearchParamsInit } from "react-router-dom";
import { cleanObject } from "utils";

export const useUrlQueryParm = <K extends string>(keys: K[]) => {
  const [searchParam, setSearchParam] = useSearchParams();
  return [
    useMemo(() => {
      return keys.reduce((pre, key) => {
        return { ...pre, [key]: searchParam.get(key) || "" };
      }, {} as { [key in K]: string });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParam]),
    (params: Partial<{ [key in K]: unknown }>) => {
      const o = cleanObject({ ...Object.fromEntries(searchParam), ...params });
      return setSearchParam(o);
    },
  ] as const;
};

export const useSetUrlSearchParam = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  return (params: { [key in string]: unknown }) => {
    const o = cleanObject({
      ...Object.fromEntries(searchParams),
      ...params,
    }) as URLSearchParamsInit;
    return setSearchParam(o);
  };
};
