
import React, { useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, Users, Wrench, Palette, 
  Home, LogOut, Star, FileBarChart 
} from "lucide-react";
import { shopInfo } from "@/data/services";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    if (!isLoggedIn && !location.pathname.includes("/admin/login")) {
      navigate("/admin/login");
    }
  }, [navigate, location]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  // Hide admin sidebar on mobile devices for security (not a replacement for authentication)
  // Use a React state for window width to support SSR and dynamic resizing
  const [isDesktop, setIsDesktop] = React.useState(true);
  React.useEffect(() => {
    const updateWidth = () => setIsDesktop(window.innerWidth >= 768);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      {isDesktop && (
        <aside className="w-full md:w-64 bg-navy text-white p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">{shopInfo.name}</h2>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={handleLogout}
            >
              <LogOut size={20} />
            </Button>
          </div>
          <nav className="space-y-2">
            <Link to="/admin/dashboard">
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-lightblue/20">
                <Home className="mr-2 h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <div className="pt-2 pb-2">
              <p className="text-xs uppercase text-white/50 font-semibold px-4 py-1">Inventory</p>
            </div>
            <Link to="/admin/products">
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-lightblue/20">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Products
              </Button>
            </Link>
          </nav>
        </aside>
      )}
      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
