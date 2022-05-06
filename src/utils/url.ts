import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
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
