import React, { useState } from "react";
import Modal from "../components/Modal"; // Import your Modal component

const Add = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Add Button */}
      <button
        className="bg-blue-500 text-white text-xs px-4 py-2 rounded hover:bg-blue-600"
        onClick={openModal}
      >
        Add Item
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-sm font-semibold mb-4">Add New Item</h2>
        <form>
          <label className="block mb-2 text-xs">
            Product Name:
            <input
              type="text"
              className="w-full border rounded px-3 py-2 mt-1"
              placeholder="Enter product name"
            />
          </label>
          <label className="block text-xs">
            Number of Stock:
            <input
              className="w-full border rounded px-3 py-2 mt-1"
              placeholder="Enter number of"
              type="number"
            />
          </label>
          <label className="block text-xs">
            Choose Category:
            <select className="w-full border rounded px-3 py-2 mt-1 mb-2">
              <option></option>
              <option>nigga</option>
              <option>nigga</option>
              <option>nigga</option>
            </select>
          </label>
          <label className="block text-xs">
            Photo:
            <input className="w-full border rounded px-3 py-2 mt-1 mb-4" type="file" id="file-input" name="photo"/>
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white text-xs px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Add;
