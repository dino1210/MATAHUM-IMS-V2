import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import { Search, Edit, Trash2 } from "lucide-react";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // New state to toggle between add/edit mode
  const [editProduct, setEditProduct] = useState(null); // Store the product being edited
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [product_name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stocks, setStocks] = useState(0);
  const [buying_price, setBPrice] = useState(0);
  const [selling_price, setSPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products and categories
  const getProducts = () => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

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
    getProducts();
    getCategories();
  }, []);

  const addProduct = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("category", category);
    formData.append("stocks", stocks);
    formData.append("buying_price", buying_price);
    formData.append("selling_price", selling_price);
    formData.append("image", image);

    axios
      .post("http://localhost:5000/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        getProducts();
        closeModal();
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const editProductHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("category", category);
    formData.append("stocks", stocks);
    formData.append("buying_price", buying_price);
    formData.append("selling_price", selling_price);
    formData.append("image", image);

    axios
      .put(`http://localhost:5000/products/${editProduct.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        getProducts();
        closeModal();
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:5000/products/${productId}`)
      .then(() => {
        getProducts();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) =>
    a.product_name.localeCompare(b.product_name)
  );

  return (
    <div className="container mx-auto">
      <div className="container bg-white rounded-lg p-5 shadow-md">
        <div className="flex flex-wrap space-x-4 items-center">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 text-sm rounded-lg p-2 flex-grow"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            onClick={() => {
              setIsEditMode(false);
              openModal();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-3 px-4 rounded-lg"
          >
            Add Product
          </button>
        </div>

        {/* Modal for adding/editing a product */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xs font-semibold mb-4">
            {isEditMode ? "Edit Product" : "Add New Product"}
          </h2>
          <form onSubmit={isEditMode ? editProductHandler : addProduct}>
            <div className="">
              <div className="mb-1">
                <label className="text-xs font-medium text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
                  value={product_name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="mb-1">
                <label className="block text-xs font-medium text-gray-700">
                  Category
                </label>
                <select
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
                  onChange={(event) => setCategory(event.target.value)}
                  value={category}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-1">
                <label className="block text-xs font-medium text-gray-700">
                  Stocks
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
                  value={stocks}
                  onChange={(event) => setStocks(event.target.value)}
                />
              </div>

              <div className="mb-1">
                <label className="block text-xs font-medium text-gray-700">
                  Buying Price
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
                  value={buying_price}
                  onChange={(event) => setBPrice(event.target.value)}
                />
              </div>

              <div className="mb-1">
                <label className="block text-xs font-medium text-gray-700">
                  Selling Price
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
                  value={selling_price}
                  onChange={(event) => setSPrice(event.target.value)}
                />
              </div>

              <div className="mb-1">
                <label className="block text-xs font-medium text-gray-700">
                  Image
                </label>
                <input
                  type="file"
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs p-2 mt-1 rounded-md"
              >
                {isEditMode ? "Update Product" : "Add Product"}
              </button>
            </div>
          </form>
        </Modal>
      </div>

      {/* Product table */}
      <div className="mt-3 bg-white rounded-lg shadow-sm mx-auto p-5">
        <table className="min-w-full table-auto text-xs text-gray-600">
          <thead>
            <tr>
              <th className="border-b px-4 py-2"></th>
              <th className="border-b px-4 py-2">ID</th>
              <th className="border-b px-4 py-2">Product Name</th>
              <th className="border-b px-4 py-2">Category</th>
              <th className="border-b px-4 py-2">Stocks</th>
              <th className="border-b px-4 py-2">Buying Price</th>
              <th className="border-b px-4 py-2">Selling Price</th>
              <th className="border-b px-4 py-2">Date Added</th>
              <th className="border-b px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product) => (
              <tr key={product.id}>
                <td className="border-b p-4">
                  {product.image ? (
                    <img
                      src={`http://localhost:5000/${product.image}`}
                      alt={product.product_name}
                      className="w-14 h-14 ml-5 rounded-lg object-cover shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="border-b px-4 py-2 text-center">{product.id}</td>
                <td className="border-b px-4 py-2 text-center">
                  {product.product_name}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {product.category}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {product.stocks}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {product.buying_price}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {product.selling_price}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {new Date(product.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td className="border-b px-4 py-2 text-center space-x-1">
                  <Edit
                    className="text-blue-500 cursor-pointer inline-block w-auto h-5"
                    onClick={() => openModal("edit", product)}
                  />
                  <Trash2
                    className="text-red-500 cursor-pointer inline-block w-auto h-5"
                    onClick={() => openModal("delete", product)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
