import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Search,
  TrendingUp,
  Calendar,
  DollarSign,
  BarChart,
  FileText,
} from "lucide-react";

const Sales = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dailySalesData = [
    { date: "Dec 1", sales: 1500 },
    { date: "Dec 2", sales: 3000 },
    { date: "Dec 3", sales: 4500 },
    { date: "Dec 4", sales: 2000 },
  ];

  const monthlySalesData = [
    { month: "Jan", sales: 100000 },
    { month: "Feb", sales: 95000 },
    { month: "Mar", sales: 120000 },
    { month: "Apr", sales: 110000 },
  ];

  const overallSales = 1500000;

  const formatCurrency = (amount) => `₱${amount.toLocaleString()}`;

  return (
    <div className="space-y-3">
      {/* Search Input */}
      <div className="bg-white rounded-lg p-5 shadow-md flex items-center space-x-3">
        <Search className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 text-sm rounded-lg p-2 flex-grow focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Overall Sales Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-5 rounded-lg flex flex-col items-center text-center">
          <DollarSign className="text-blue-500 mb-2" size={32} />
          <h3 className="text-xs font-semibold">Total Sales (Today)</h3>
          <p className="text-sm font-bold">{formatCurrency(15000)}</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg flex flex-col items-center text-center">
          <Calendar className="text-green-500 mb-2" size={32} />
          <h3 className="text-xs font-semibold">Total Sales (This Month)</h3>
          <p className="text-sm font-bold">{formatCurrency(450000)}</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg flex flex-col items-center text-center">
          <BarChart className="text-purple-500 mb-2" size={32} />
          <h3 className="text-xs font-semibold">Overall Sales</h3>
          <p className="text-sm font-bold">{formatCurrency(overallSales)}</p>
        </div>
      </div>

      {/* Sales Trend Chart */}
      <div className="bg-white shadow-lg p-5 rounded-lg">
        <h3 className="text-xs font-semibold mb-4 flex items-center space-x-2">
          <TrendingUp className="text-teal-500" />
          <span>Daily Sales Trend</span>
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailySalesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip formatter={(value) => formatCurrency(value)} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Sales Table */}
      <div className="bg-white shadow-lg p-5 rounded-lg">
        <h3 className="text-xs font-semibold mb-4 flex items-center space-x-2">
          <FileText className="text-indigo-500" />
          <span>Monthly Sales Breakdown</span>
        </h3>
        <table className="min-w-full table-auto text-sm text-gray-600">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-left">Month</th>
              <th className="border-b px-4 py-2 text-right">Sales</th>
            </tr>
          </thead>
          <tbody>
            {monthlySalesData.map((data, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-2">{data.month}</td>
                <td className="border-b px-4 py-2 text-right">
                  {formatCurrency(data.sales)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Insights Section */}
      <div className="bg-white shadow-lg p-5 rounded-lg">
        <h3 className="text-xs font-semibold mb-4 flex items-center space-x-2">
          <TrendingUp className="text-yellow-500" />
          <span>Insights & Recommendations</span>
        </h3>
        <ul className="list-disc pl-5 text-xs text-gray-700">
          <li>Focus on promoting high-performing products.</li>
          <li>Consider discounts for low-performing months.</li>
          <li>Monitor daily trends for optimal stock management.</li>
        </ul>
      </div>
    </div>
  );
};

export default Sales;
