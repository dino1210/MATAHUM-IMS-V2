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
  FileChartColumn 
} from "lucide-react";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import Categories from "./pages/Categories";
import Statistics from "./pages/Statistics";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
import Help from "./pages/Help";
import Setting from "./pages/Setting"


export default function App() {
  return (
    <Router>
      <main className="App">
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar>
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" path="/" />
            <SidebarItem icon={<UserCircle size={20} />} text="User Management" path="/user-management" />
            <SidebarItem icon={<Boxes size={20} />} text="Categories" path="/categories" />
            <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" path="/statistics" />
            <SidebarItem icon={<Package size={20} />} text="Products" path="/products" />
            <SidebarItem icon={<Receipt size={20} />} text="Sales" path="/sales" />
            <SidebarItem icon={<FileChartColumn size={20} />} text="Reports" path="/reports" />
            <hr className="my-3" />
            <SidebarItem icon={<Settings size={20} />} text="Setting" path="/setting" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" path="/help" />
          </Sidebar>

          {/* Main Content */}
          <main className="flex-1 bg-gray-100 p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/products/" element={<Products />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </main>
        </div>
      </main>
    </Router>
  );
}
