import React from "react";
import { UserProvider } from "../../Context/UserContext";

export default function Dashboard() {
  return (
    <div>
      <UserProvider>
        <h2>Welcome back.</h2>
      </UserProvider>
    </div>
  );
}
