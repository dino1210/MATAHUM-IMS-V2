import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    user_count: 0,
    category_count: 0,
    product_count: 0,
    total_sales: 0,
  });
  const [recentSales, setRecentSales] = useState([]);
  const [lowStock, setLowStock] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await axios.get('http://localhost:5000/api/dashboard');
        setStats(statsRes.data.stats);

        const salesRes = await axios.get('http://localhost:5000/api/sales/recent');
        setRecentSales(salesRes.data);

        const lowStockRes = await axios.get('http://localhost:5000/api/inventory/low-stock');
        setLowStock(lowStockRes.data);

        const recentProductsRes = await axios.get('http://localhost:5000/api/inventory/recent');
        setRecentProducts(recentProductsRes.data);

        setLoading(false);
      } catch (err) {
        setError('Failed to load data. Please try again.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-base font-medium">Users</h2>
          <p className="text-3xl font-semibold">{stats.user_count}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-base font-medium">Categories</h2>
          <p className="text-3xl font-semibold">{stats.category_count}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-base font-medium">Products</h2>
          <p className="text-3xl font-semibold">{stats.product_count}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h2 className="text-base font-medium">Total Sales</h2>
          <p className="text-3xl font-semibold">₱{stats.total_sales}</p>
        </div>
      </div>

      {/* Dashboard Sections */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Sales */}
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Sales</h2>
          <table className="table-auto w-full text-sm">
            <thead>
              <tr>
                <th className="border px-3 py-2 text-left">Product</th>
                <th className="border px-3 py-2 text-left">Quantity</th>
                <th className="border px-3 py-2 text-left">Total</th>
                <th className="border px-3 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentSales.map((sale) => (
                <tr key={sale.id}>
                  <td className="border px-3 py-2">{sale.product}</td>
                  <td className="border px-3 py-2">{sale.quantity}</td>
                  <td className="border px-3 py-2">₱{sale.total_amount}</td>
                  <td className="border px-3 py-2">{new Date(sale.sale_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Low Stock Alert</h2>
          <table className="table-auto w-full text-sm">
            <thead>
              <tr>
                <th className="border px-3 py-2 text-left">Product</th>
                <th className="border px-3 py-2 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {lowStock.map((product) => (
                <tr key={product.id}>
                  <td className="border px-3 py-2">{product.name}</td>
                  <td className="border px-3 py-2 text-red-600">{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recently Added Products */}
      <div className="bg-white p-5 rounded-lg shadow mt-6">
        <h2 className="text-lg font-semibold mb-4">Recently Added Products</h2>
        <table className="table-auto w-full text-sm">
          <thead>
            <tr>
              <th className="border px-3 py-2 text-left">Name</th>
              <th className="border px-3 py-2 text-left">Category</th>
              <th className="border px-3 py-2 text-left">Quantity</th>
              <th className="border px-3 py-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {recentProducts.map((product) => (
              <tr key={product.id}>
                <td className="border px-3 py-2">{product.name}</td>
                <td className="border px-3 py-2">{product.category}</td>
                <td className="border px-3 py-2">{product.quantity}</td>
                <td className="border px-3 py-2">₱{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
