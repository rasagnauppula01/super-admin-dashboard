import { useState } from "react";

const initialPermissions = {
  Admin: ["Manage Users", "Edit Content", "View Reports"],
  Editor: ["Edit Content", "View Reports"],
  User: ["View Reports"],
};

function RolePermissions() {
  const [permissions, setPermissions] = useState(initialPermissions);

  const handleAddPermission = (role, permission) => {
    setPermissions((prev) => ({
      ...prev,
      [role]: [...prev[role], permission],
    }));
  };

  return (
    <div className="p-4 bg-gray-900">
      <h2 className="text-xl font-bold">Role-Based Permissions</h2>
      
      <div className="mt-4">
        {Object.keys(permissions).map((role) => (
          <div key={role} className="bg-white p-4 shadow rounded mb-4">
            <h3 className="font-semibold">{role}</h3>
            <ul className="mt-2">
              {permissions[role].map((perm, index) => (
                <li key={index} className="text-gray-700">{perm}</li>
              ))}
            </ul>
            <button 
              className="mt-2 text-blue-600"
              onClick={() => handleAddPermission(role, "New Permission")}
            >
              + Add Permission
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RolePermissions;
