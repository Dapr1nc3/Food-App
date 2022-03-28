import React, { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  const sacedValue = JSON.parse(localStorage.getItem(key));
  if (sacedValue) {
    return sacedValue;
  } else {
    return initialValue;
  }
}

export default function useLocalStorage(key, initialValue) {
  let [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return [value, setValue];
}
