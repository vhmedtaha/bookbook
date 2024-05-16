import { createContext, useState } from "react";

export const userContext = createContext(0);

export default function ContextProvider(props) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  function setUserData() {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }

  return (
    <userContext.Provider
      value={{ user, setUser, token, setToken, setUserData }}
    >
      {props.children}
    </userContext.Provider>
  );
}
