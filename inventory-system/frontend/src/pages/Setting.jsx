import React, { useState } from "react";

const InventorySettings = () => {
  const [formData, setFormData] = useState({
    warehouseName: "",
    stockThreshold: 10,
    emailNotifications: true,
    lowStockAlerts: true,
    backupFrequency: "daily",
    darkMode: false,
    reportFrequency: "weekly",
    integrationApiKey: "",
    enableIntegrations: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSettingsUpdate = (e) => {
    e.preventDefault();
    console.log("Settings Updated:", formData);
    alert("Settings updated successfully!");
  };

  return (
    <div className="space-y-3">
      {/* Warehouse Configuration */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-6">
          Warehouse Configuration
        </h2>
        <form onSubmit={handleSettingsUpdate} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="warehouseName"
              className="block text-xs font-medium text-gray-600"
            >
              Warehouse Name
            </label>
            <input
              type="text"
              id="warehouseName"
              name="warehouseName"
              value={formData.warehouseName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your warehouse name"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="stockThreshold"
              className="block text-sm font-medium text-gray-600"
            >
              Low Stock Threshold
            </label>
            <input
              type="number"
              id="stockThreshold"
              name="stockThreshold"
              value={formData.stockThreshold}
              onChange={handleInputChange}
              className="w-full p-3 border text-xs border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E.g., 10 units"
              required
            />
          </div>
        </form>
      </div>

      {/* Notifications */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-6">
          Notifications & Alerts
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-600">
              Enable Email Notifications
            </span>
            <input
              type="checkbox"
              id="emailNotifications"
              name="emailNotifications"
              checked={formData.emailNotifications}
              onChange={handleInputChange}
              className="w-4 h-4 rounded-lg focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-600">
              Enable Low Stock Alerts
            </span>
            <input
              type="checkbox"
              id="lowStockAlerts"
              name="lowStockAlerts"
              checked={formData.lowStockAlerts}
              onChange={handleInputChange}
              className="w-4 h-4 rounded-lg text-xs focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Reporting Preferences */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-6">
          Reporting Preferences
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="reportFrequency"
              className="block text-xs font-medium text-gray-600"
            >
              Report Frequency
            </label>
            <select
              id="reportFrequency"
              name="reportFrequency"
              value={formData.reportFrequency}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
      </div>

      {/* Data Backup */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-6">
          Data Backup Settings
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="backupFrequency"
              className="block text-xs font-medium text-gray-600"
            >
              Backup Frequency
            </label>
            <select
              id="backupFrequency"
              name="backupFrequency"
              value={formData.backupFrequency}
              onChange={handleInputChange}
              className="w-full p-3 border text-xs border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
      </div>

      {/* User Interface Preferences */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-6">
          User Interface Preferences
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-600">
              Enable Dark Mode
            </span>
            <input
              type="checkbox"
              id="darkMode"
              name="darkMode"
              checked={formData.darkMode}
              onChange={handleInputChange}
              className="w-4 h-4 rounded-lg focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventorySettings;
