import React, { useState } from "react";

const Reports = () => {
  const [exportOption, setExportOption] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [category, setCategory] = useState("");

  const handleExport = () => {
    if (exportOption) {
      alert(`Data exported as ${exportOption}`);
    } else {
      alert("Please select an export format.");
    }
  };

  // Sample data based on selected filters (this could be dynamic data in a real application)
  const summaryData = {
    dailySales:
      category === "rice" ? 8000 : category === "sacks" ? 1500 : 10000,
    monthlySales:
      category === "rice" ? 120000 : category === "sacks" ? 25000 : 150000,
    totalTransactions: category === "rice" ? 15 : category === "sacks" ? 5 : 20,
  };

  return (
    <div className="container mx-auto space-y-3">
      {/* Filters Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">Filters</h2>
        <form className="space-y-4">
          <div className="flex flex-wrap gap-6">
            <div className="flex-1">
              <label
                htmlFor="dateFrom"
                className="text-xs font-medium text-gray-600"
              >
                Date From
              </label>
              <input
                type="date"
                id="dateFrom"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="mt-1 block w-full text-xs border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="dateTo"
                className="text-xs font-medium text-gray-600"
              >
                Date To
              </label>
              <input
                type="date"
                id="dateTo"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="mt-1 block w-full text-xs border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="category"
                className="text-xs font-medium text-gray-600"
              >
                Product Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full text-xs border border-gray-300 rounded-md p-2"
              >
                <option value="">All</option>
                <option value="rice">Rice</option>
                <option value="sacks">Empty Sacks</option>
              </select>
            </div>
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium py-2 px-4 rounded-lg mt-4"
          >
            Apply Filters
          </button>
        </form>
      </div>

      {/* Dynamic Summary Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">Summary</h2>
        <div className="flex flex-wrap gap-6">
          <div className="bg-gray-100 p-4 rounded-lg text-sm flex-1">
            <h3 className="text-xs font-medium text-gray-600">
              Total Sales (Daily)
            </h3>
            <p className="text-blue-600 font-bold mt-1">
              ₱{summaryData.dailySales.toLocaleString()}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm flex-1">
            <h3 className="text-xs font-medium text-gray-600">
              Total Sales (Monthly)
            </h3>
            <p className="text-blue-600 font-bold mt-1">
              ₱{summaryData.monthlySales.toLocaleString()}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-sm flex-1">
            <h3 className="text-xs font-medium text-gray-600">
              Total Transactions
            </h3>
            <p className="text-blue-600 font-bold mt-1">
              {summaryData.totalTransactions}
            </p>
          </div>
        </div>
      </div>

      {/* Export Data Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Export Data
        </h2>
        <div className="flex items-center space-x-4">
          <select
            className="p-2 text-xs border border-gray-300 rounded-md"
            value={exportOption}
            onChange={(e) => setExportOption(e.target.value)}
          >
            <option value="">Select Format</option>
            <option value="csv">CSV</option>
            <option value="pdf">PDF</option>
            <option value="excel">Excel</option>
          </select>
          <button
            onClick={handleExport}
            className="bg-green-500 hover:bg-green-600 text-white text-xs font-medium py-2 px-4 rounded-lg"
          >
            Export
          </button>
        </div>
      </div>

      {/* Daily and Monthly Reports (Removed Containers) */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          Daily Report
        </h2>
        <table className="min-w-full table-auto text-sm text-gray-600">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-xs text-left">Date</th>
              <th className="border-b px-4 py-2 text-xs text-left">Category</th>
              <th className="border-b px-4 py-2 text-xs text-left">
                Total Sales (₱)
              </th>
              <th className="border-b px-4 py-2 text-xs text-left">
                Transactions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b px-4 py-2">2024-12-13</td>
              <td className="border-b px-4 py-2">{category || "All"}</td>
              <td className="border-b px-4 py-2">
                ₱{summaryData.dailySales.toLocaleString()}
              </td>
              <td className="border-b px-4 py-2">
                {summaryData.totalTransactions}
              </td>
            </tr>
            {/* Additional rows can be dynamically generated here */}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          Monthly Report
        </h2>
        <table className="min-w-full table-auto text-sm text-gray-600">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-xs text-left">Month</th>
              <th className="border-b px-4 py-2 text-xs text-left">Category</th>
              <th className="border-b px-4 py-2 text-xs text-left">
                Total Sales (₱)
              </th>
              <th className="border-b px-4 py-2 text-xs text-left">
                Transactions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b px-4 py-2">December 2024</td>
              <td className="border-b px-4 py-2">{category || "All"}</td>
              <td className="border-b px-4 py-2">
                ₱{summaryData.monthlySales.toLocaleString()}
              </td>
              <td className="border-b px-4 py-2">
                {summaryData.totalTransactions}
              </td>
            </tr>
            {/* Additional rows can be dynamically generated here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
