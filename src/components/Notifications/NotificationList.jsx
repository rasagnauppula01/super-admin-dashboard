import { useState } from "react";

const initialNotifications = [
  { id: 1, message: "System maintenance scheduled for Feb 10", recipient: "All", date: "2025-02-05" },
  { id: 2, message: "New task assigned: Update website content", recipient: "John Doe", date: "2025-02-06" },
];

function NotificationList() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDelete = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Notifications</h2>

      <table className="min-w-full bg-white mt-4 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Message</th>
            <th className="p-2">Recipient</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notifications.length > 0 ? (
            notifications.map((notif) => (
              <tr key={notif.id} className="border-t">
                <td className="p-2">{notif.message}</td>
                <td className="p-2">{notif.recipient}</td>
                <td className="p-2">{notif.date}</td>
                <td className="p-2">
                  <button className="text-red-600" onClick={() => handleDelete(notif.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-4 text-center text-gray-500">No notifications available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default NotificationList;
