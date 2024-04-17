import React, { useContext } from "react";
import { FirstCotext } from "../context/FirstContext";

const Child3 = () => {
  const { userName } = useContext(FirstCotext);
  return (
    <div>
      Child3
      <br />
      <span>{userName}</span>
    </div>
  );
};

export default Child3;
