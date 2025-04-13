
import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { products, categories, getProductsByCategory } from "@/data/products";
import ProductList from "@/components/products/ProductList";
import { Button } from "@/components/ui/button";
import ProductsBreadcrumb from "@/components/products/ProductsBreadcrumb";
import ProductSorting, { SortOption } from "@/components/products/ProductSorting";
import ProductFilters from "@/components/products/ProductFilters";
import ProductPagination from "@/components/products/ProductPagination";

const Products = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // State
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(categoryId);
  const [displayProducts, setDisplayProducts] = useState(products);
  const [currentCategory, setCurrentCategory] = useState<string | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [sortOption, setSortOption] = useState<SortOption>(
    (searchParams.get("sort") as SortOption) || "name-asc"
  );
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get("page") || "1", 10));
  
  // Constants
  const itemsPerPage = 12;

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    
    params.set("sort", sortOption);
    
    if (currentPage > 1) {
      params.set("page", currentPage.toString());
    } else {
      params.delete("page");
    }
    
    setSearchParams(params, { replace: true });
  }, [searchTerm, sortOption, currentPage, setSearchParams, searchParams]);

  // Update products when category changes
  useEffect(() => {
    setCurrentPage(1); // Reset pagination when category changes
    
    if (categoryId) {
      setSelectedCategory(categoryId);
      const filteredProducts = getProductsByCategory(categoryId);
      setDisplayProducts(filteredProducts.length ? filteredProducts : []);
      
      const category = categories.find(cat => cat.id === categoryId);
      setCurrentCategory(category?.name);
    } else {
      setSelectedCategory(undefined);
      setDisplayProducts(products);
      setCurrentCategory(undefined);
    }
  }, [categoryId]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage(1); // Reset pagination when changing category
    const filteredProducts = getProductsByCategory(catId);
    setDisplayProducts(filteredProducts);
    
    const category = categories.find(cat => cat.id === catId);
    setCurrentCategory(category?.name);
  };

  const showAllProducts = () => {
    setSelectedCategory(undefined);
    setDisplayProducts(products);
    setCurrentCategory(undefined);
    setCurrentPage(1); // Reset pagination
  };

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...displayProducts];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return 0;
      }
    });
    
    return result;
  }, [displayProducts, searchTerm, sortOption]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProducts.slice(start, start + itemsPerPage);
  }, [filteredAndSortedProducts, currentPage, itemsPerPage]);

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <ProductsBreadcrumb categoryName={currentCategory} />
        
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-navy mb-2">
            {currentCategory ? currentCategory : "All Products"}
          </h1>
          <p className="text-gray-600">
            {currentCategory 
              ? `Browse our selection of ${currentCategory}` 
              : "Browse our entire product catalog"
            }
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-8 overflow-x-auto bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex space-x-2 pb-2">
            <Button
              variant={selectedCategory === undefined ? "default" : "outline"}
              onClick={showAllProducts}
              className={selectedCategory === undefined 
                ? "bg-navy text-white hover:bg-lightblue"
                : "text-navy border-navy hover:bg-navy hover:text-white"
              }
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                className={`whitespace-nowrap ${
                  selectedCategory === category.id 
                    ? "bg-navy text-white hover:bg-lightblue" 
                    : "text-navy border-navy hover:bg-navy hover:text-white"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Search and Sort */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="w-full md:w-1/2">
            <ProductFilters 
              onSearchChange={setSearchTerm}
              initialSearch={searchTerm}
            />
          </div>
          <div className="flex justify-end items-center">
            <ProductSorting 
              currentSort={sortOption} 
              onSortChange={setSortOption} 
            />
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4 text-gray-600">
          Showing {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'product' : 'products'}
        </div>

        {/* Products List */}
        <ProductList products={paginatedProducts} />
        
        {/* Pagination */}
        <ProductPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Products;
