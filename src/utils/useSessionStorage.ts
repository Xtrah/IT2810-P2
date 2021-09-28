/* eslint-disable no-console */
import { useState } from "react";

// Inspired by https://usehooks.com/useLocalStorage/

function useSessionStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState<string>(() => {
    // Set initial value to session or a specified initial value
    try {
      // Get from local storage by key
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Return a function to set session storage
  const setValue = (value: string) => {
    try {
      // Save state
      setStoredValue(value);
      // Save to local storage
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useSessionStorage;
