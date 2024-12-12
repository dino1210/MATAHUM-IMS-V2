import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
  FileChartColumn,
  Users, // User Management Icon
  User, // Customers Icon
  Truck, // Suppliers Icon
} from "lucide-react";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
import Help from "./pages/Help";
import Setting from "./pages/Setting";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";

export default function App() {
  return (
    <Router>
      <main className="App">
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              path="/"
            />
            {/* Updated User Management Icon */}
            <SidebarItem
              icon={<Users size={20} />}
              text="User Management"
              path="/user-management"
            />
            <SidebarItem
              icon={<Boxes size={20} />}
              text="Categories"
              path="/categories"
            />
            <SidebarItem
              icon={<Package size={20} />}
              text="Products"
              path="/products"
            />
            <SidebarItem
              icon={<User size={20} />}
              text="Customers"
              path="/customers"
            />
            <SidebarItem
              icon={<Truck size={20} />}
              text="Suppliers"
              path="/suppliers"
            />
            <SidebarItem
              icon={<Receipt size={20} />}
              text="Sales"
              path="/sales"
            />
            <SidebarItem
              icon={<FileChartColumn size={20} />}
              text="Reports"
              path="/reports"
            />
            <SidebarItem
              icon={<Settings size={20} />}
              text="Setting"
              path="/setting"
            />
            <SidebarItem
              icon={<LifeBuoy size={20} />}
              text="Help"
              path="/help"
            />
          </Sidebar>

          {/* Main Content */}
          <main className="flex-1 bg-gray-100 p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/help" element={<Help />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/suppliers" element={<Suppliers />} />
            </Routes>
          </main>
        </div>
      </main>
    </Router>
  );
}
