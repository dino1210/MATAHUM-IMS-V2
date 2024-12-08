import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Modal from "../components/Modal";
import axios from "axios";

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch categories from backend
  const getCategories = () => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  // Add a new category
  const addCategory = (event) => {
    event.preventDefault();

    const newCategory = {
      name: newCategoryName,
      description: newCategoryDescription,
    };

    axios
      .post("http://localhost:5000/categories", newCategory)
      .then(() => {
        getCategories(); // Refresh the categories list
        setNewCategoryName("");
        setNewCategoryDescription("");
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <div className="container bg-white rounded-lg p-5 shadow-md">
        <div className="flex flex-wrap items-center space-x-2">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search categories..."
            className="border border-gray-300 text-sm rounded-lg p-2 flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-3 px-4 rounded-lg"
          >
            Add Category
          </button>
        </div>
      </div>

      <div className="container bg-white rounded-lg shadow-md p-5 mt-3 mx-auto">
        <table className="min-w-full table-auto text-xs text-gray-600">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-left">ID</th>
              <th className="border-b px-4 py-2 text-left">Category Name</th>
              <th className="border-b px-4 py-2 text-left">Description</th>
              <th className="border-b px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category) => (
              <tr key={category.id}>
                <td className="border-b px-4 py-2">{category.id}</td>
                <td className="border-b px-4 py-2">{category.name}</td>
                <td className="border-b px-4 py-2">{category.description}</td>
                <td className="border-b px-4 py-2 text-center">
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding a category */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xs font-semibold mb-4">Add New Category</h2>
        <form onSubmit={addCategory}>
          <div className="mb-2">
            <label className="text-xs font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label className="text-xs font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
              value={newCategoryDescription}
              onChange={(e) => setNewCategoryDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white text-xs py-2 px-4 rounded-md"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs py-2 px-4 rounded-md"
            >
              Add Category
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Categories;
