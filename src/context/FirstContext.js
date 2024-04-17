import { createContext, useState } from "react";

export const FirstCotext = createContext(null);

const FirstContextProvider = (props) => {
  const [userName, setUserName] = useState("Codehub Myanmar");
  const liveIn = "Bkk";
  return (
    <FirstCotext.Provider value={{ userName, liveIn }}>
      {props.children}
    </FirstCotext.Provider>
  );
};

export default FirstContextProvider;
