import React, { useEffect, useState } from "react";
import axios from "axios";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch suppliers data
  useEffect(() => {
    axios
      .get("http://localhost:5000/suppliers")
      .then((response) => {
        setSuppliers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching suppliers:", error);
      });
  }, []);

  // Filter suppliers by search term
  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Suppliers</h2>
        <div className="flex space-x-2 my-4">
          <input
            type="text"
            placeholder="Search Suppliers..."
            className="border border-gray-300 text-sm rounded-lg p-2 flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="min-w-full table-auto text-xs text-gray-600">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">ID</th>
              <th className="border-b px-4 py-2">Supplier Name</th>
              <th className="border-b px-4 py-2">Contact</th>
              <th className="border-b px-4 py-2">Address</th>
              <th className="border-b px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSuppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td className="border-b px-4 py-2">{supplier.id}</td>
                <td className="border-b px-4 py-2">{supplier.name}</td>
                <td className="border-b px-4 py-2">{supplier.contact}</td>
                <td className="border-b px-4 py-2">{supplier.address}</td>
                <td className="border-b px-4 py-2">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-sm text-xs">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded-sm text-xs ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suppliers;
