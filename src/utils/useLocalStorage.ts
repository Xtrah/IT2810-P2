/* eslint-disable no-console */
import { useState } from "react";

// Inspired by https://usehooks.com/useLocalStorage/

function useLocalStorage<T>(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Set initial value to session or a specified initial value
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Return a function to set local storage
  const setValue = (value: T) => {
    try {
      // Save state
      setStoredValue(value);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
