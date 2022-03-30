import { useState, useEffect } from "react";
import React from "react";

function getSavedValue(key, initialValue) {
  const sacedValue = JSON.parse(localStorage.getItem(key));
  if (sacedValue) {
    return sacedValue;
  } else {
    return initialValue;
  }
}

export default function UseLocalStorage(key, initialValue) {
  let [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return [value, setValue];
}
