import React, { useState } from "react";

function UseLocalStorage() {
  const [Name, setName] = useState("");

  return (
    <div className="App">
      {Name}
      <input
        name="Name"
        id="name"
        data-tid="avy"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default UseLocalStorage;
