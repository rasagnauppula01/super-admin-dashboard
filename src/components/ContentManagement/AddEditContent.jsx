import { useState, useEffect } from "react";

function AddEditContent({ isOpen, onClose, contentData, setContent }) {
  const [formData, setFormData] = useState({ title: "", description: "", status: "Draft" });

  useEffect(() => {
    if (contentData) {
      setFormData(contentData);
    } else {
      setFormData({ title: "", description: "", status: "Draft" });
    }
  }, [contentData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContent(prev => {
      if (contentData) {
        return prev.map(item => item.id === contentData.id ? formData : item);
      } else {
        return [...prev, { ...formData, id: Date.now() }];
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold">{contentData ? "Edit Content" : "Add Content"}</h2>
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

          <label className="block mt-4 mb-2">Description:</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>

          <label className="block mt-4 mb-2">Status:</label>
          <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>

          <div className="flex justify-end mt-4">
            <button type="button" className="bg-gray-400 px-4 py-2 rounded mr-2" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              {contentData ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEditContent;
