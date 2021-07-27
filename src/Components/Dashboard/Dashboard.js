import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h2>Welcome Back {user.name}</h2>
      <button>Set User</button>
    </div>
  );
}
