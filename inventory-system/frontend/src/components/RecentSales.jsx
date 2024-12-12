const DashboardOverview = () => {
    return (
      <div className="grid grid-cols-4 gap-6 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold">5</h2>
          <p className="text-gray-500">Users</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold">3</h2>
          <p className="text-gray-500">Categories</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold">31</h2>
          <p className="text-gray-500">Products</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold">16</h2>
          <p className="text-gray-500">Sales</p>
        </div>
      </div>
    );
  };
  