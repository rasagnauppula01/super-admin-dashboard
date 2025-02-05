import { useState } from "react";

function SendNotification({ setNotifications }) {
  const [formData, setFormData] = useState({ message: "", recipient: "All" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNotification = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split("T")[0],
    };
    setNotifications((prev) => [...prev, newNotification]);
    setFormData({ message: "", recipient: "All" });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-bold">Send Notification</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block mb-2">Message:</label>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <label className="block mt-4 mb-2">Recipient:</label>
        <select name="recipient" value={formData.recipient} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="All">All</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
        </select>

        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendNotification;
