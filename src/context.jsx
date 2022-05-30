import { createContext, useState } from "react";

// Create new context:
export const userContext = createContext();
// Create new provider component:
export const NewProvider = (props) => {
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  return (
    <userContext.Provider value={{ userId, setUserId, token, setToken }}>
      {props.children}
    </userContext.Provider>
  );
};
