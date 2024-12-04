import React, { useState } from 'react';

const Setting = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submit for updating profile
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Perform logic to update profile here
    console.log('Profile Updated:', formData);
  };

  // Handle form submit for password change
  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Perform password change logic here
    if (formData.newPassword === formData.confirmPassword) {
      console.log('Password Updated:', formData);
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Settings</h1>

      {/* Profile Update Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>

      {/* Password Change Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-semibold">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-sm font-semibold">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Change Password
          </button>
        </form>
      </div>

      {/* System Preferences Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">System Preferences</h2>
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="notifications" className="block text-sm font-semibold">Enable Notifications</label>
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              className="w-6 h-6"
            />
          </div>
          <div>
            <label htmlFor="darkMode" className="block text-sm font-semibold">Enable Dark Mode</label>
            <input
              type="checkbox"
              id="darkMode"
              name="darkMode"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>

      {/* Other Settings Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Other Settings</h2>
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="language" className="block text-sm font-semibold">Language</label>
            <select
              id="language"
              name="language"
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div>
            <label htmlFor="timezone" className="block text-sm font-semibold">Timezone</label>
            <select
              id="timezone"
              name="timezone"
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="GMT">GMT</option>
              <option value="EST">EST</option>
              <option value="PST">PST</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
