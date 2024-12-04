import React, { useState } from 'react';

const Products = () => {
  // Sample data for products
  const [products, setProducts] = useState([
    { id: 1, name: 'Brown Rice', photo: 'https://via.placeholder.com/50', stocks: 20 },
    { id: 2, name: 'Coco Pandan', photo: 'https://via.placeholder.com/50', stocks: 15 },
    { id: 3, name: 'Sinandomeng', photo: 'https://via.placeholder.com/50', stocks: 8 },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // State for the new product form inputs
  const [newProduct, setNewProduct] = useState({
    name: '',
    photo: '',
    stocks: '',
  });

  // Handle form input changes for new product
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Add new product
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name.trim() !== '' && newProduct.photo.trim() !== '' && newProduct.stocks.trim() !== '') {
      const newId = products.length + 1;
      setProducts([
        ...products,
        {
          id: newId,
          name: newProduct.name,
          photo: newProduct.photo,
          stocks: parseInt(newProduct.stocks),
        },
      ]);
      setNewProduct({ name: '', photo: '', stocks: '' }); // Reset the form
    }
  };

  // Handle delete product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Handle search functionality
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Product Management</h1>

      {/* Search Bar and Add Product Button */}
      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search Products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 w-1/3 border border-gray-300 rounded-md"
        />
        <button
          onClick={() => document.getElementById('add-product-modal').style.display = 'block'}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>

      {/* Products Table */}
      <div>
        <h2 className="text-xl font-medium mb-4">Products List</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">ID</th>
              <th className="px-4 py-2 border-b text-left">Photo</th>
              <th className="px-4 py-2 border-b text-left">Product Name</th>
              <th className="px-4 py-2 border-b text-left">Stocks</th>
              <th className="px-4 py-2 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{product.id}</td>
                <td className="px-4 py-2 border-b">
                  <img src={product.photo} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
                </td>
                <td className="px-4 py-2 border-b">{product.name}</td>
                <td className="px-4 py-2 border-b">{product.stocks}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
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

      {/* Add Product Modal */}
      <div
        id="add-product-modal"
        className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center "
        onClick={(e) => {
          if (e.target.id === 'add-product-modal') {
            document.getElementById('add-product-modal').style.display = 'none';
          }
        }}
      >
        <div className="bg-white p-8 rounded-lg w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
          <form onSubmit={handleAddProduct} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="photo" className="block text-sm font-semibold">Product Photo URL</label>
              <input
                type="url"
                id="photo"
                name="photo"
                value={newProduct.photo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="stocks" className="block text-sm font-semibold">Stocks</label>
              <input
                type="number"
                id="stocks"
                name="stocks"
                value={newProduct.stocks}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Products;
