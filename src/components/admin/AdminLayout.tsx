
import { useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Users, Wrench, Palette, Home, LogOut } from "lucide-react";
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

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
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
          <Link to="/admin/products">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-lightblue/20">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Products
            </Button>
          </Link>
          <Link to="/admin/painters">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-lightblue/20">
              <Palette className="mr-2 h-5 w-5" />
              Painters
            </Button>
          </Link>
          <Link to="/admin/plumbers">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-lightblue/20">
              <Wrench className="mr-2 h-5 w-5" />
              Plumbers
            </Button>
          </Link>
          <div className="pt-4 mt-4 border-t border-white/20 hidden md:block">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:bg-lightblue/20"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </div>
        </nav>

        <div className="absolute bottom-4 left-4 right-4 text-xs text-white/70 hidden md:block">
          <p>Admin Panel v1.0</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
