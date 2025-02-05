import { useState } from "react";

const initialEarnings = [
  { id: 1, name: "John Doe", amount: 5000, role: "Employee", status: "Paid" },
  { id: 2, name: "Jane Smith", amount: 3000, role: "Third-Party", status: "Pending" },
];

function EarningsList() {
  const [earnings, setEarnings] = useState(initialEarnings);

  const handleUpdateStatus = (id, newStatus) => {
    setEarnings(earnings.map((entry) => (entry.id === id ? { ...entry, status: newStatus } : entry)));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Earnings Management</h2>

      <table className="min-w-full bg-white mt-4 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Amount ($)</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {earnings.map((entry) => (
            <tr key={entry.id} className="border-t">
              <td className="p-2">{entry.name}</td>
              <td className="p-2">{entry.role}</td>
              <td className="p-2">{entry.amount}</td>
              <td className="p-2">{entry.status}</td>
              <td className="p-2">
                {entry.status === "Pending" && (
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => handleUpdateStatus(entry.id, "Paid")}
                  >
                    Mark as Paid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EarningsList;
