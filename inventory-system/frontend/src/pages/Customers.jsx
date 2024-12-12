import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import { Search, Edit, Trash2 } from "lucide-react";

const Customers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // New state for add/edit mode
  const [editCustomer, setEditCustomer] = useState(null); // Store the customer being edited
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [customer_name, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch customers
  const getCustomers = () => {
    axios
      .get("http://localhost:5000/customers")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
  };

  useEffect(() => {
    getCustomers();
  }, []);

  // Pagination logic
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  const currentCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const addCustomer = (event) => {
    event.preventDefault();
    const customerData = {
      customer_name,
      email,
      phone,
      address,
    };

    axios
      .post("http://localhost:5000/customers", customerData)
      .then(() => {
        getCustomers();
        closeModal();
      })
      .catch((error) => {
        console.error("Error adding customer:", error);
      });
  };

  const editCustomerHandler = (event) => {
    event.preventDefault();
    const customerData = {
      customer_name,
      email,
      phone,
      address,
    };

    axios
      .put(`http://localhost:5000/customers/${editCustomer.id}`, customerData)
      .then(() => {
        getCustomers();
        closeModal();
      })
      .catch((error) => {
        console.error("Error updating customer:", error);
      });
  };

  const deleteCustomer = (customerId) => {
    axios
      .delete(`http://localhost:5000/customers/${customerId}`)
      .then(() => {
        getCustomers();
      })
      .catch((error) => {
        console.error("Error deleting customer:", error);
      });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mx-auto">
      {/* Statistics Section */}
      <div className="flex justify-between mb-4">
        <div className="bg-blue-100 p-3 rounded-md text-blue-700 text-xs">
          <p>Total Customers: {customers.length}</p>
        </div>
      </div>

      {/* Search and Add Customer Section */}
      <div className="flex flex-wrap space-x-4 items-center mb-4">
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
          Add Customer
        </button>
      </div>

      {/* Modal for adding/editing a customer */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xs font-semibold mb-4">
          {isEditMode ? "Edit Customer" : "Add New Customer"}
        </h2>
        <form onSubmit={isEditMode ? editCustomerHandler : addCustomer}>
          <div className="space-y-3">
            <div>
              <label className="block text-xs">Customer Name</label>
              <input
                type="text"
                value={customer_name}
                onChange={(e) => setCustomerName(e.target.value)}
                className="border text-sm rounded-lg p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-xs">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border text-sm rounded-lg p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-xs">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border text-sm rounded-lg p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-xs">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border text-sm rounded-lg p-2 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white text-xs py-2 px-4 rounded-lg mt-3"
            >
              {isEditMode ? "Update Customer" : "Add Customer"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Customer Table */}
      <div className="mt-3 bg-white rounded-lg shadow-sm mx-auto p-5">
        <table className="min-w-full table-auto text-xs text-gray-600">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">ID</th>
              <th className="border-b px-4 py-2">Customer Name</th>
              <th className="border-b px-4 py-2">Email</th>
              <th className="border-b px-4 py-2">Phone</th>
              <th className="border-b px-4 py-2">Address</th>
              <th className="border-b px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.id}>
                <td className="border-b px-4 py-2 text-center">
                  {customer.id}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {customer.customer_name}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {customer.email}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {customer.phone}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {customer.address}
                </td>
                <td className="border-b px-4 py-2 text-center space-x-1">
                  <Edit
                    className="text-blue-500 cursor-pointer inline-block w-auto h-5"
                    onClick={() => {
                      setIsEditMode(true);
                      setCustomerName(customer.customer_name);
                      setEmail(customer.email);
                      setPhone(customer.phone);
                      setAddress(customer.address);
                      setEditCustomer(customer);
                      openModal();
                    }}
                  />
                  <Trash2
                    className="text-red-500 cursor-pointer inline-block w-auto h-5"
                    onClick={() => deleteCustomer(customer.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between mt-3">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="bg-blue-500 text-white text-xs py-2 px-4 rounded-lg"
          >
            Previous
          </button>
          <span className="text-xs py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="bg-blue-500 text-white text-xs py-2 px-4 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customers;
