import { useState, useEffect } from "react";
interface Persons {
  name: string;
  age: number;
}
const isFalsy = (target: unknown): boolean => {
  return target === 0 ? false : !target;
};
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useDebounce = <T>(value: T, delay: number = 200): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useArray = <T>(persons: T[]) => {
  const [list, setList] = useState(persons);
  const clear = () => {
    setList([]);
  };
  const removeIndex = (index: number) => {
    if (list.length <= index) {
      return;
    }
    const newList = list.filter((person, personIndex) => personIndex !== index);
    setList(newList);
  };
  const add = (person: T) => {
    setList([...list, person]);
  };
  return {
    value: list,
    clear,
    removeIndex,
    add,
  };
};
