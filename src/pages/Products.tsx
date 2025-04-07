
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products, categories, getProductsByCategory } from "@/data/products";
import ProductList from "@/components/products/ProductList";
import { Button } from "@/components/ui/button";

const Products = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(categoryId);
  const [displayProducts, setDisplayProducts] = useState(products);
  const [currentCategory, setCurrentCategory] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (categoryId) {
      setSelectedCategory(categoryId);
      setDisplayProducts(getProductsByCategory(categoryId));
      
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
    setDisplayProducts(getProductsByCategory(catId));
    
    const category = categories.find(cat => cat.id === catId);
    setCurrentCategory(category?.name);
  };

  const showAllProducts = () => {
    setSelectedCategory(undefined);
    setDisplayProducts(products);
    setCurrentCategory(undefined);
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
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
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            <Button
              variant={selectedCategory === undefined ? "default" : "outline"}
              onClick={showAllProducts}
              className={selectedCategory === undefined ? "bg-navy" : ""}
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                className={`whitespace-nowrap ${
                  selectedCategory === category.id ? "bg-navy" : ""
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <ProductList products={displayProducts} />
      </div>
    </div>
  );
};

export default Products;
