import { useState } from "react";
// import { useSelector } from "react-redux";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UserDashboard from "./UserDashboard/UserDashboard";

export default function Dashboard() {
  // implement in near future
  // const user = useSelector((state) => state.user);
  const [role, setRole] = useState('admin')
  return (
    <div className="h-screen text-center">
      {
        !role && <>
          <h1 className="text-2xl text-grey-600">Select user role (temporary)</h1>
          <button className="p-2 mx-10 bg-green-400 rounded-md" onClick={() => setRole('admin')}>Admin</button>
          <button className="p-2 mx-10 bg-red-400 rounded-md" onClick={() => setRole('user')}>User</button>
        </>
      }
      {
        role && role === 'admin' && <AdminDashboard />
      }
      {
        role && role === 'user' && <UserDashboard />
      }
    </div>
  );
}
