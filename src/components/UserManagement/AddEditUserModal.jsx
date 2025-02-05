import { useState, useEffect } from "react";

function AddEditUserModal({ isOpen, onClose, user, setUsers }) {
  const [formData, setFormData] = useState({ name: "", role: "User", status: "Active" });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({ name: "", role: "User", status: "Active" });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers(prev => {
      if (user) {
        return prev.map(u => u.id === user.id ? formData : u);
      } else {
        return [...prev, { ...formData, id: Date.now() }];
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold">{user ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block mb-2">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />

          <label className="block mt-4 mb-2">Role:</label>
          <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="User">User</option>
          </select>

          <label className="block mt-4 mb-2">Status:</label>
          <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div className="flex justify-end mt-4">
            <button type="button" className="bg-gray-400 px-4 py-2 rounded mr-2" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              {user ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEditUserModal;
