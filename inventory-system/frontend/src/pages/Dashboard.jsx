import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Box,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Package,
  User,
  Users,
} from "lucide-react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Sample chart data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12000, 15000, 18000, 13000, 16000, 19000],
        backgroundColor: "rgba(37, 99, 235, 0.6)", // Blue
        borderRadius: 8,
      },
      {
        label: "Purchases",
        data: [8000, 11000, 13000, 9500, 11000, 14000],
        backgroundColor: "rgba(234, 88, 12, 0.6)", // Orange
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales and Purchases (Monthly)",
      },
    },
  };

  return (
    <div className="space-y-3">
      {/* Sales Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="text-blue-500" />
              <h3 className="text-sm font-semibold text-gray-700">
                Sales Overview
              </h3>
            </div>
            <p className="text-lg font-bold text-gray-700">786</p>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <p>Revenue</p>
            <p className="text-gray-700">17584</p>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <p>Cost</p>
            <p className="text-gray-700">12487</p>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <p>Profit</p>
            <p className="text-gray-700">5097</p>
          </div>
        </div>

        {/* Purchase Overview */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Package className="text-purple-500" />
              <h3 className="text-sm font-semibold text-gray-700">
                Purchase Overview
              </h3>
            </div>
            <p className="text-lg font-bold text-gray-700">45</p>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <p>No of Purchases</p>
            <p className="text-gray-700">786</p>
          </div>
        </div>
      </div>

      {/* Inventory Summary and Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <Box className="text-green-500" />
            <h3 className="text-sm font-semibold text-gray-700">
              Inventory Summary
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-500">
              <p>Quantity in Hand</p>
              <p className="text-gray-700">214</p>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <p>Will be Received</p>
              <p className="text-gray-700">44</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="text-yellow-500" />
            <h3 className="text-sm font-semibold text-gray-700">
              Product Details
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-500">
              <p>Low Stock Items</p>
              <p className="text-gray-700">5</p>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <p>Item Group</p>
              <p className="text-gray-700">3</p>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <p>No of Items</p>
              <p className="text-gray-700">42</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="text-teal-500" />
            <h3 className="text-sm font-semibold text-gray-700">No of Users</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-500">
              <p>Total Customers</p>
              <p className="text-gray-700">102</p>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <p>Total Suppliers</p>
              <p className="text-gray-700">2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sales and Purchase Statistics */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">
          Sales and Purchase Statistics
        </h3>
        <div className="w-full">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
