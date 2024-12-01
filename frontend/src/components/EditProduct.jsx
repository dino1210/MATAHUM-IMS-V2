import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProduct = ({ productId, onClose }) => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    stock: "",
    buyingPrice: "",
    sellingPrice: "",
    photo: ""
  });

  useEffect(() => {
    // Fetch the product data by ID
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:5000/products/${productId}`, product);
      alert("Product updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-xl font-semibold">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
          </div>
          <div>
            <label>Stock</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
          </div>
          <div>
            <label>Buying Price</label>
            <input
              type="number"
              name="buyingPrice"
              value={product.buyingPrice}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
          </div>
          <div>
            <label>Selling Price</label>
            <input
              type="number"
              name="sellingPrice"
              value={product.sellingPrice}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
          </div>
          <div>
            <label>Photo</label>
            <input
              type="file"
              onChange={(e) => setProduct({ ...product, photo: e.target.files[0] })}
              className="p-2 border rounded"
            />
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="bg-gray-300 p-2 rounded">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
