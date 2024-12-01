import React from "react";
import axios from "axios";

const DeleteProduct = ({ productId, onClose, onProductDeleted }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      alert("Product deleted successfully!");
      onProductDeleted(); // Trigger parent update after deletion
      onClose();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-xl font-semibold">Delete Product</h2>
        <p>Are you sure you want to delete this product?</p>
        <div className="flex justify-between mt-4">
          <button type="button" onClick={onClose} className="bg-gray-300 p-2 rounded">Cancel</button>
          <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
