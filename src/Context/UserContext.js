import React, { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  return <UserContext value={[user, setUser]}>{children}</UserContext>;
}
