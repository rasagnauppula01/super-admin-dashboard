import { useState } from "react";
import AddEditContent from "./AddEditContent";

const initialContent = [
  { id: 1, title: "Our Services", description: "We offer top-quality solutions.", status: "Published" },
  { id: 2, title: "About Us", description: "Learn more about our company.", status: "Draft" },
];

function ContentList() {
  const [content, setContent] = useState(initialContent);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleEdit = (item) => {
    setSelectedContent(item);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setContent(content.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Content Management</h2>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => { setSelectedContent(null); setModalOpen(true); }}
        >
          Add Content
        </button>
      </div>
      
      <table className="min-w-full bg-white mt-4 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {content.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-2">{item.title}</td>
              <td className="p-2">{item.status}</td>
              <td className="p-2">
                <button className="text-blue-600 mr-2" onClick={() => handleEdit(item)}>Edit</button>
                <button className="text-red-600" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <AddEditContent 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          contentData={selectedContent} 
          setContent={setContent} 
        />
      )}
    </div>
  );
}

export default ContentList;
