import React, { useState, useEffect } from "react";
import { X } from "lucide-react"; // Close icon

const AddProduct = ({ closeModal }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    inStock: "",
    buyingPrice: "",
    sellingPrice: "",
    dateAdded: "", // We'll set this automatically
    photo: null,
  });

  // Predefined categories for the dropdown
  const categories = ["Electronics", "Furniture", "Clothing", "Tools", "Other"];

  useEffect(() => {
    // Set the default value for the "Date Added" field to today's date
    const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
    setNewProduct((prev) => ({ ...prev, dateAdded: currentDate }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewProduct((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like sending data to the server
    console.log("New product data:", newProduct);
    closeModal(); // Close the modal after submitting
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 max-w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xs font-semibold">Add Product</h2>
          <button onClick={closeModal}>
            <X size={20} className="text-gray-600 hover:text-gray-900" />
          </button>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          {/* Choose photo */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700">Choose Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full p-2 border text-xs border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Category (Dropdown) */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-xs shadow-sm"
              required
            >
              <option value="">Select a Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* In-stock */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700">In Stock</label>
            <input
              type="number"
              name="inStock"
              value={newProduct.inStock}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Buying Price */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700">Buying Price</label>
            <input
              type="number"
              name="buyingPrice"
              value={newProduct.buyingPrice}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Selling Price */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700">Selling Price</label>
            <input
              type="number"
              name="sellingPrice"
              value={newProduct.sellingPrice}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Date Added */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700">Date Added</label>
            <input
              type="date"
              name="dateAdded"
              value={newProduct.dateAdded}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border text-xs border-gray-300 rounded-md shadow-sm"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-between space-x-4 mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="w-full p-2 bg-gray- text-xs text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-xs text-white rounded-md hover:bg-blue-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
