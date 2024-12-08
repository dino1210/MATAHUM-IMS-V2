import React, { useEffect, useState } from "react";
import { Users, Tag, Box, ShoppingCart } from "lucide-react"; // Import Lucide icons
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; // For charts

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({});
  const [lowStock, setLowStock] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [recentSales, setRecentSales] = useState([]);

  useEffect(() => {
    // Fetch dashboard data from the backend (assuming the backend is already set up)
    fetch("http://localhost:5000/api/dashboard")
      .then((response) => response.json())
      .then((data) => {
        setDashboardData(data);
        setLowStock(data.lowStock);
        setRecentActivities(data.activities);
        setRecentSales(data.recentSales);
      });
  }, []);

  return (
    <div className="space-y-6">
      {/* Boxes for Users, Categories, Products, Sales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-sm text-gray-600 font-semibold">Users</h3>
            <p className="text-xl font-semibold">{dashboardData.users}</p>
          </div>
          <Users className="text-blue-500 text-4xl" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-sm text-gray-600 font-semibold">Categories</h3>
            <p className="text-xl font-semibold">{dashboardData.categories}</p>
          </div>
          <Tag className="text-green-500 text-4xl" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-sm text-gray-600 font-semibold">Products</h3>
            <p className="text-xl font-semibold">{dashboardData.products}</p>
          </div>
          <Box className="text-yellow-500 text-4xl" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-sm text-gray-600 font-semibold">Sales</h3>
            <p className="text-xl font-semibold">${dashboardData.sales}</p>
          </div>
          <ShoppingCart className="text-red-500 text-4xl" />
        </div>
      </div>

      {/* Inventory by Category Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-sm font-semibold mb-4">Inventory by Category</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dashboardData.inventoryChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="stock" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Low Stock Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-sm font-semibold mb-4">Low Stock Alerts</h3>
        {lowStock.length > 0 ? (
          <ul className="space-y-2">
            {lowStock.map((product, index) => (
              <li key={index} className="text-sm text-gray-700">
                <span>{product.product_name}</span> (Stock: {product.stocks})
              </li>
            ))}
          </ul>
        ) : (
          <p>No low stock products</p>
        )}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-sm font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-2">
          {recentActivities.length > 0 ? (
            recentActivities.map((activity, index) => (
              <li key={index} className="text-sm text-gray-700">
                {activity.description}{" "}
                <span className="text-gray-500">
                  ({new Date(activity.timestamp).toLocaleString()})
                </span>
              </li>
            ))
          ) : (
            <p>No recent activity</p>
          )}
        </ul>
      </div>

      {/* Recent Sales Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-sm font-semibold mb-4">Recent Sales</h3>
        {recentSales.length > 0 ? (
          <ul className="space-y-2">
            {recentSales.map((sale, index) => (
              <li key={index} className="text-sm text-gray-700">
                <span>{sale.product_name}</span> - ${sale.amount}{" "}
                <span className="text-gray-500">
                  ({new Date(sale.timestamp).toLocaleString()})
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recent sales</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
