
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Pages
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Cart from "./pages/Cart";
import SearchResults from "./pages/SearchResults";
import WhatsAppOrder from "./pages/WhatsAppOrder";

// Admin Pages
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminPainters from "./pages/admin/AdminPainters";
import AdminPlumbers from "./pages/admin/AdminPlumbers";
import AdminReviews from "./pages/admin/AdminReviews";

// Components
import { Toaster } from "./components/ui/toaster";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:categoryId" element={<Products />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceType" element={<Services />} />
              <Route path="/services/:serviceType/:professionalId" element={<ServiceDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/whatsapp-order" element={<WhatsAppOrder />} />
            </Route>
            
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="login" element={<AdminLogin />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="painters" element={<AdminPainters />} />
              <Route path="plumbers" element={<AdminPlumbers />} />
              <Route path="reviews" element={<AdminReviews />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
