function TaskReports({ tasks }) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Task Reports</h2>
        
        <table className="min-w-full bg-white mt-4 shadow-md rounded">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Title</th>
              <th className="p-2">Assigned To</th>
              <th className="p-2">Status</th>
              <th className="p-2">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <tr key={task.id} className="border-t">
                  <td className="p-2">{task.title}</td>
                  <td className="p-2">{task.assignedTo}</td>
                  <td className="p-2">{task.status}</td>
                  <td className="p-2">{task.deadline}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">No tasks available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default TaskReports;
  