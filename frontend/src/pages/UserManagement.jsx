import React, { useEffect, useState } from "react";
import { Search, Edit, Trash2 } from "lucide-react";
import Modal from "../components/Modal";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // User form states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  // Fetch users
  const getUsers = () => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle opening the add modal
  const handleAdd = () => {
    setName("");
    setUsername("");
    setRole("");
    setStatus("");
    setIsAddModalOpen(true);
  };

  // Handle adding a new user
  const addUser = (event) => {
    event.preventDefault();
    const newUser = { name, username, role, status };

    axios
      .post("http://localhost:5000/users", newUser)
      .then(() => {
        getUsers();
        setIsAddModalOpen(false);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  // Handle editing a user
  const handleEdit = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setUsername(user.username);
    setRole(user.role);
    setStatus(user.status);
    setIsEditModalOpen(true);
  };

  // Update user
  const updateUser = (event) => {
    event.preventDefault();
    const updatedUser = { name, username, role, status };

    axios
      .put(`http://localhost:5000/users/${selectedUser.id}`, updatedUser)
      .then(() => {
        getUsers();
        setIsEditModalOpen(false);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  // Handle deleting a user
  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="container bg-white rounded-lg p-5 shadow-md">
        <div className="flex flex-wrap items-center space-x-2">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search users..."
            className="border border-gray-300 text-sm rounded-lg p-2 flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-3 px-4 rounded-lg"
          >
            Add User
          </button>
        </div>
      </div>

      <div className="container bg-white rounded-lg shadow-md p-5 mt-3 mx-auto">
        <table className="min-w-full table-auto text-xs text-gray-600">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-left">Name</th>
              <th className="border-b px-4 py-2 text-left">Username</th>
              <th className="border-b px-4 py-2 text-left">User Role</th>
              <th className="border-b px-4 py-2 text-left">Status</th>
              <th className="border-b px-4 py-2 text-left">Last Login</th>
              <th className="border-b px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="border-b px-4 py-2">{user.name}</td>
                <td className="border-b px-4 py-2">{user.username}</td>
                <td className="border-b px-4 py-2">{user.role}</td>
                <td className="border-b px-4 py-2">{user.status}</td>
                <td className="border-b px-4 py-2">{user.lastLogin}</td>
                <td className="border-b px-4 py-2 text-center">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-500 hover:underline"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <h2 className="text-xs font-semibold mb-4">Add New User</h2>
        <form onSubmit={addUser}>
          <div className="mb-2">
            <label className="text-xs font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-xs font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-xs font-medium text-gray-700">
              User Role
            </label>
            <select
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="text-xs font-medium text-gray-700">Status</label>
            <select
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white text-xs py-2 px-4 rounded-md"
              onClick={() => setIsAddModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs py-2 px-4 rounded-md"
            >
              Add User
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit User Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <h2 className="text-xs font-semibold mb-4">Edit User</h2>
        <form onSubmit={updateUser}>
          <div className="mb-2">
            <label className="text-xs font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-xs font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-xs font-medium text-gray-700">
              User Role
            </label>
            <select
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="text-xs font-medium text-gray-700">Status</label>
            <select
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-xs"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white text-xs py-2 px-4 rounded-md"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs py-2 px-4 rounded-md"
            >
              Update User
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UserManagement;
