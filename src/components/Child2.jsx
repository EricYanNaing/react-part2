import React, { useContext } from "react";
import { FirstCotext } from "../context/FirstContext";

const Child2 = () => {
  const { liveIn } = useContext(FirstCotext);
  return (
    <div>
      Child2
      <h3>{liveIn}</h3>
    </div>
  );
};

export default Child2;
