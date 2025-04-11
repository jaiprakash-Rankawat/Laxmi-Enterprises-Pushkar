
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Cart from "./pages/Cart";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";
import CartSidebar from "./components/cart/CartSidebar";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminPainters from "./pages/admin/AdminPainters";
import AdminPlumbers from "./pages/admin/AdminPlumbers";
import SearchResults from "./pages/SearchResults";
import WhatsAppOrder from "./pages/WhatsAppOrder";

const queryClient = new QueryClient();

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="products" element={<AdminProducts />} />
                  <Route path="painters" element={<AdminPainters />} />
                  <Route path="plumbers" element={<AdminPlumbers />} />
                </Route>
                
                {/* Public Routes */}
                <Route path="/" element={
                  <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-1">
                      <Index />
                    </main>
                    <Footer />
                    <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                  </div>
                } />
                <Route path="*" element={
                  <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:categoryId" element={<Products />} />
                        <Route path="/product/:productId" element={<ProductDetail />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/services/:serviceType/:serviceId" element={<ServiceDetail />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/whatsapp-order" element={<WhatsAppOrder />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </main>
                    <Footer />
                    <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                  </div>
                } />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
