import { useState, useEffect } from "react";

function AssignTask({ isOpen, onClose, task, setTasks }) {
  const [formData, setFormData] = useState({ title: "", assignedTo: "", status: "Pending", deadline: "" });

  useEffect(() => {
    if (task) {
      setFormData(task);
    } else {
      setFormData({ title: "", assignedTo: "", status: "Pending", deadline: "" });
    }
  }, [task]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(prev => {
      if (task) {
        return prev.map(t => t.id === task.id ? formData : t);
      } else {
        return [...prev, { ...formData, id: Date.now() }];
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold">{task ? "Edit Task" : "Assign Task"}</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block mb-2">Title:</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />

          <label className="block mt-4 mb-2">Assigned To:</label>
          <input 
            type="text" 
            name="assignedTo" 
            value={formData.assignedTo} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />

          <label className="block mt-4 mb-2">Status:</label>
          <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <label className="block mt-4 mb-2">Deadline:</label>
          <input 
            type="date" 
            name="deadline" 
            value={formData.deadline} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />

          <div className="flex justify-end mt-4">
            <button type="button" className="bg-gray-400 px-4 py-2 rounded mr-2" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              {task ? "Update" : "Assign"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AssignTask;
