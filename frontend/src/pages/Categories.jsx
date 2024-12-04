import React, { useState } from 'react';

const Categories = () => {
  // Sample data for categories
  const [categories, setCategories] = useState([
    { id: 1, name: 'Tools' },
    { id: 2, name: 'Equipment' },
    { id: 3, name: 'Consumables' },
  ]);

  // State for the new category input
  const [newCategory, setNewCategory] = useState('');

  // Handle the input change for new category
  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };

  // Add new category
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim() !== '') {
      const newId = categories.length + 1;
      setCategories([...categories, { id: newId, name: newCategory }]);
      setNewCategory(''); // Reset the input field
    }
  };

  // Delete category
  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-8">Category Management</h1>

      {/* Add New Category Form */}
      <div className="mb-8 bg-white rounded-lg p-10">
        <h2 className="text-sm font-medium mb-4">Add New Category</h2>
        <form onSubmit={handleAddCategory} className="space-y-4">
          <div>
            <label htmlFor="category" className="block text-sm font-semibold mb-2">Category Name</label>
            <input
              type="text"
              id="category"
              value={newCategory}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white text-xs p-2 rounded-md hover:bg-green-600"
          >
            Add Category
          </button>
        </form>
      </div>

      {/* Categories List Table */}
      <div className="bg-white p-10 rounded-lg">
        <h2 className="text-sm font-medium mb-4">Categories List</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-xs text-left">Category Name</th>
              <th className="px-4 py-2 border-b text-xs text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-100">
                <td className="px-4 text-xs py-2 border-b">{category.name}</td>
                <td className="px-4 text-xs py-2 border-b">
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
