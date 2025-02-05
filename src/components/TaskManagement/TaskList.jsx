import { useState } from "react";
import AssignTask from "./AssignTask";

const initialTasks = [
  { id: 1, title: "Fix UI Bug", assignedTo: "John Doe", status: "In Progress", deadline: "2025-02-10" },
  { id: 2, title: "Deploy API", assignedTo: "Jane Smith", status: "Completed", deadline: "2025-02-05" },
];

function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Task Management</h2>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => { setSelectedTask(null); setModalOpen(true); }}
        >
          Assign Task
        </button>
      </div>
      
      <table className="min-w-full bg-white mt-4 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Assigned To</th>
            <th className="p-2">Status</th>
            <th className="p-2">Deadline</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t">
              <td className="p-2">{task.title}</td>
              <td className="p-2">{task.assignedTo}</td>
              <td className="p-2">{task.status}</td>
              <td className="p-2">{task.deadline}</td>
              <td className="p-2">
                <button className="text-blue-600 mr-2" onClick={() => handleEdit(task)}>Edit</button>
                <button className="text-red-600" onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <AssignTask 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          task={selectedTask} 
          setTasks={setTasks} 
        />
      )}
    </div>
  );
}

export default TaskList;
