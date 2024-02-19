import React, { useState, useEffect } from "react";

const PREFIX = "my-code-pen";

//This is required to preserve the data when the browser is refreshed.
//A wrapper around useState that reads the localStorage for initial state value. If not available, takes the one provided as parameter.
//Ensures that the state is persisted to localStorage everytime the component is re-rendered, by passing a callback to useEffect.
function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    try {
      if (jsonValue != null) return JSON.parse(jsonValue);
    } catch (err) {
      return initialValue;
    }
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}

export default useLocalStorage;
