import { useState } from "react";

interface State<D> {
  error: Error | null;
  data: D | null;
  stats: "idle" | "loading" | "error" | "success";
}
const defaultState: State<null> = {
  error: null,
  data: null,
  stats: "idle",
};
export const useAsync = <D>(initState?: State<D>) => {
  const [state, setState] = useState<State<D>>({
    ...defaultState,
    ...initState,
  });
  const setData = (data: D) => {
    setState({
      data,
      error: null,
      stats: "success",
    });
  };
  const setError = (error: Error) => {
    setState({
      error,
      data: null,
      stats: "error",
    });
  };
  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error("请传入一个promise对象");
    }
    setState({
      ...state,
      stats: "loading",
    });
    return promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        return Promise.reject(error);
      });
  };

  return {
    isLoading: state.stats === "loading",
    isSuccess: state.stats === "success",
    isError: state.stats === "error",
    isIdle: state.stats === "idle",
    run,
    setData,
    setError,
    ...state,
  };
};
