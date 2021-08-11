import { useState } from "react";
// import { useSelector } from "react-redux";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UserDashboard from "./UserDashboard";

export default function Dashboard() {
  // implement in near future
  // const user = useSelector((state) => state.user);
  const [role, setRole] = useState('admin')
  return (
    <div className="text-center h-screen">
      {
        !role && <>
          <h1 className="text-2xl text-grey-600">Select user role (temporary)</h1>
          <button className="bg-green-400 p-2 rounded-md mx-10" onClick={() => setRole('admin')}>Admin</button>
          <button className="bg-red-400 p-2 rounded-md mx-10" onClick={() => setRole('user')}>User</button>
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
