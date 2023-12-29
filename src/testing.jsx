import React from "react";
import { useState } from "react";

const testing = () => {
  const [disc, setDisc] = useState(100);

  function handleClick() {
    return setDisc(disc + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>{disc}</button>
    </div>
  );
};

export default testing;
