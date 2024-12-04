import React, { useState } from 'react';

const UserManagement = () => {
  // Sample data for users
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'User' },
    { id: 3, name: 'Mark Johnson', email: 'markjohnson@example.com', role: 'User' },
  ]);

  // States for the form inputs
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'User',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  // Add new user to the list
  const handleAddUser = (e) => {
    e.preventDefault();
    const newId = users.length + 1;
    setUsers([...users, { id: newId, ...newUser }]);
    setNewUser({ name: '', email: '', role: 'User' }); // Reset form
  };

  // Handle delete user
  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="">
      <h1 className="text-sm font-semibold mb-5">User Management</h1>
      {/* Add New User Form */}
      <div className="mb-8 bg-white p-6 rounded-xl">
        <h2 className="text-xs font-medium mb-4">Add New User</h2>
        <form onSubmit={handleAddUser} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newUser.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-xs font-semibold">Role</label>
            <select
              id="role"
              name="role"
              value={newUser.role}
              onChange={handleChange}
              className="w-full p-2 border text-xs border-gray-300 rounded-md"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-xs p-2 rounded-md hover:bg-blue-600"
          >
            Add User
          </button>
        </form>
      </div>

      {/* Users Table */}
      <div className="bg-white p-6 rounded-xl">
        <h2 className="text-xs font-medium mb-4">Users List</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-xs text-left">Name</th>
              <th className="px-4 py-2 border-b text-xs text-left">Email</th>
              <th className="px-4 py-2 border-b text-xs text-left">Role</th>
              <th className="px-4 py-2 border-b text-xs text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 text-xs border-b">{user.name}</td>
                <td className="px-4 py-2 text-xs border-b">{user.email}</td>
                <td className="px-4 py-2 text-xs border-b">{user.role}</td>
                <td className="px-4 py-2 text-xs border-b">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-500 text-xs hover:text-red-700"
                  >
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

export default UserManagement;
