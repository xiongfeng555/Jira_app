/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-09 10:25:32
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-09 10:48:27
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\utils\use-undo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useCallback, useState } from "react";

export const useUndo = <T>(initData: T) => {
  const [state, setState] = useState<{
    past: T[];
    present: T;
    future: T[];
  }>({
    past: [],
    present: initData,
    future: [],
  });
  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;
  const undo = useCallback(() => {
    if (!canUndo) return;
    const previous = state.past[state.past.length - 1];
    const newPast = state.past.slice(0, state.past.length - 1);
    const newFulture = [state.present, ...state.future];
    setState({
      past: newPast,
      present: previous,
      future: newFulture,
    });
  }, [state, canUndo]);
  const redo = useCallback(() => {
    if (!canRedo) return;
    const future = state.future[0];
    const newFulture = state.future.slice(1);
    const newPast = [...state.past, state.present];
    setState({
      past: newPast,
      present: future,
      future: newFulture,
    });
  }, [state, canRedo]);
  const set = useCallback(
    (newPresent: T) => {
      if (newPresent === state.present) return;
      setState({
        past: [...state.past, state.present],
        present: newPresent,
        future: [],
      });
    },
    [state]
  );
  const reset = useCallback(() => {
    setState({
      past: [],
      present: initData,
      future: [],
    });
  }, [initData]);
  return [{ ...state }, { undo, redo, canRedo, canUndo, set, reset }] as const;
};
