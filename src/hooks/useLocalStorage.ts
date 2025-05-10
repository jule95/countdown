import { useState, useEffect } from 'react';

// https://designcode.io/react-hooks-handbook-uselocalstorage-hook
const useLocalStorage = <TType>(key: string, defaultValue: TType) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || defaultValue as string);
    } catch {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
