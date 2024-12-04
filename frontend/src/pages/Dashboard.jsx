import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Dashboard Title */}
      <h2 className="text-base font-bold">Inventory Dashboard</h2>

      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Total Stock */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold">Total Stock</h3>
          <p className="text-lg">150 items</p>
        </div>
        {/* Low Stock Alerts */}
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-sm font-semibold">Low Stock Alerts</h3>
          <p className="text-lg">5 items</p>
        </div>
        {/* Total Value */}
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-sm font-semibold">Total Value</h3>
          <p className="text-lg">$12,500</p>
        </div>
      </div>

      {/* Inventory Distribution Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-sm font-semibold">Inventory by Category</h3>
        {/* Replace with actual chart */}
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Chart Placeholder</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-sm font-semibold">Recent Activity</h3>
        <ul className="space-y-2">
          <li className="text-xs">Added "Product A" to the inventory.</li>
          <li className="text-xs">Checked out "Tool B".</li>
          <li className="text-xs">Restocked "Consumable C".</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
