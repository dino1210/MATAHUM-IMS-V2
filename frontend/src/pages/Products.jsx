import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit, Trash2, Plus } from "lucide-react"; // Reverted to original icons
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import DeleteProduct from "../components/DeleteProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const openEditModal = (product) => {
    setCurrentProduct(product);
    setShowEditModal(true);
  };

  const openDeleteModal = (product) => {
    setCurrentProduct(product);
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setShowDeleteModal(false);
    setCurrentProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search products..."
            className="p-2 border rounded text-xs"
          />
          <button
            onClick={openAddModal}
            className="p-2 bg-blue-500 text-white rounded flex items-center text-xs"
          >
            <Plus className="mr-2" /> Add Product
          </button>
        </div>
      </div>

      <table className="table-auto bg-white w-full border-collapse text-xs">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Photo</th>
            <th className="border px-4 py-2">Product Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">In-Stock</th>
            <th className="border px-4 py-2">Buying Price</th>
            <th className="border px-4 py-2">Selling Price</th>
            <th className="border px-4 py-2">Date Added</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">
                <img src={product.photo} alt={product.name} className="w-12 h-12 object-cover" />
              </td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2">
                ₱{product.buying_price.toLocaleString()}
              </td>
              <td className="border px-4 py-2">
                ₱{product.selling_price.toLocaleString()}
              </td>
              <td className="border px-4 py-2">{new Date(product.date_added).toLocaleDateString()}</td>
              <td className="border px-4 py-2 flex space-x-2">
                <button
                  onClick={() => openEditModal(product)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Edit size={20} />
                </button>
                <button
                  onClick={() => openDeleteModal(product)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Product Modal */}
      {showAddModal && (
        <AddProduct closeModal={closeModal} />
      )}

      {/* Edit Product Modal */}
      {showEditModal && currentProduct && (
        <EditProduct closeModal={closeModal} product={currentProduct} />
      )}

      {/* Delete Product Modal */}
      {showDeleteModal && currentProduct && (
        <DeleteProduct closeModal={closeModal} product={currentProduct} />
      )}
    </div>
  );
};

export default Products;
