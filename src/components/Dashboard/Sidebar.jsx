import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-svh p-4">
      <h2 className="text-lg font-bold text-emerald-500">Admin Panel</h2>
      <ul className="mt-4 space-y-2">
        <li><Link to="/" className="block p-2 hover:bg-gray-700">Dashboard</Link></li>
        <li><Link to="/users" className="block p-2 hover:bg-gray-700">User Management</Link></li>
        <li><Link to="/content" className="block p-2 hover:bg-gray-700">Content Management</Link></li>
        <li><Link to="/tasks" className="block p-2 hover:bg-gray-700">Task Management</Link></li>
        <li><Link to="/financial/earnings" className="block p-2 hover:bg-gray-700">Financial Management</Link></li>
        <li><Link to="/notifications" className="block p-2 hover:bg-gray-700">Notifications</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
