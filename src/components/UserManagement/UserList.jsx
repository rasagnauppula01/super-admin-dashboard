import { useState } from "react";
import AddEditUserModal from "./AddEditUserModal";

const usersData = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
];

function UserList() {
  const [users, setUsers] = useState(usersData);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">User Management</h2>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => { setSelectedUser(null); setModalOpen(true); }}
        >
          Add User
        </button>
      </div>
      
      <table className="min-w-full bg-white mt-4 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.status}</td>
              <td className="p-2">
                <button className="text-blue-600 mr-2" onClick={() => handleEdit(user)}>Edit</button>
                <button className="text-red-600" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <AddEditUserModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          user={selectedUser} 
          setUsers={setUsers} 
        />
      )}
    </div>
  );
}

export default UserList;
