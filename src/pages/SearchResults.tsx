
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import { painters } from "@/data/painters";
import { plumbers } from "@/data/plumbers";
import ProductList from "@/components/products/ProductList";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchBar from "@/components/search/SearchBar";
import { Painter } from "@/data/painters";
import { Plumber } from "@/data/plumbers";
import { Product } from "@/data/products";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const [activeTab, setActiveTab] = useState("all");
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filteredPainters, setFilteredPainters] = useState<Painter[]>([]);
  const [filteredPlumbers, setFilteredPlumbers] = useState<Plumber[]>([]);

  useEffect(() => {
    if (query) {
      // Filter products
      const matchingProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
      setFilteredProducts(matchingProducts);

      // Filter painters
      const matchingPainters = painters.filter(painter => 
        painter.name.toLowerCase().includes(query) || 
        painter.specialization.toLowerCase().includes(query)
      );
      setFilteredPainters(matchingPainters);

      // Filter plumbers
      const matchingPlumbers = plumbers.filter(plumber => 
        plumber.name.toLowerCase().includes(query) || 
        plumber.specialization.toLowerCase().includes(query)
      );
      setFilteredPlumbers(matchingPlumbers);
    }
  }, [query]);

  const totalResults = filteredProducts.length + filteredPainters.length + filteredPlumbers.length;

  return (
    <div className="bg-gray-50 py-10 min-h-[80vh]">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Search Results for "{query}"
          </h1>
          
          <div className="max-w-2xl mb-8">
            <SearchBar />
          </div>
          
          <p className="text-gray-600">
            {totalResults} {totalResults === 1 ? 'result' : 'results'} found
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="all" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              All ({totalResults})
            </TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Products ({filteredProducts.length})
            </TabsTrigger>
            <TabsTrigger value="painters" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Painters ({filteredPainters.length})
            </TabsTrigger>
            <TabsTrigger value="plumbers" className="data-[state=active]:bg-navy data-[state=active]:text-white">
              Plumbers ({filteredPlumbers.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-8">
            {filteredProducts.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-navy mb-4">Products</h2>
                <ProductList products={filteredProducts.slice(0, 4)} />
                {filteredProducts.length > 4 && (
                  <div className="mt-4 text-center">
                    <button 
                      onClick={() => setActiveTab("products")}
                      className="text-lightblue hover:underline"
                    >
                      View all {filteredProducts.length} products
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {filteredPainters.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-navy mb-4">Painters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPainters.slice(0, 3).map(painter => (
                    <Card key={painter.id} className="bg-white shadow-soft hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                            <img src={painter.image} alt={painter.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-navy">{painter.name}</h3>
                            <p className="text-sm text-gray-600">{painter.specialization}</p>
                            <div className="mt-1 text-amber text-sm">{painter.experience} years experience</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {filteredPainters.length > 3 && (
                  <div className="mt-4 text-center">
                    <button 
                      onClick={() => setActiveTab("painters")}
                      className="text-lightblue hover:underline"
                    >
                      View all {filteredPainters.length} painters
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {filteredPlumbers.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-navy mb-4">Plumbers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPlumbers.slice(0, 3).map(plumber => (
                    <Card key={plumber.id} className="bg-white shadow-soft hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                            <img src={plumber.image} alt={plumber.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-navy">{plumber.name}</h3>
                            <p className="text-sm text-gray-600">{plumber.specialization}</p>
                            <div className="mt-1 text-teal text-sm">{plumber.experience} years experience</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {filteredPlumbers.length > 3 && (
                  <div className="mt-4 text-center">
                    <button 
                      onClick={() => setActiveTab("plumbers")}
                      className="text-lightblue hover:underline"
                    >
                      View all {filteredPlumbers.length} plumbers
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {totalResults === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-600">No results found</h3>
                <p className="mt-2 text-gray-500">Try different keywords or browse our categories</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="products">
            {filteredProducts.length > 0 ? (
              <ProductList products={filteredProducts} />
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-600">No products found</h3>
                <p className="mt-2 text-gray-500">Try different keywords or browse our categories</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="painters">
            {filteredPainters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPainters.map(painter => (
                  <Card key={painter.id} className="bg-white shadow-soft hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                          <img src={painter.image} alt={painter.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy">{painter.name}</h3>
                          <p className="text-sm text-gray-600">{painter.specialization}</p>
                          <div className="mt-1 text-amber text-sm">{painter.experience} years experience</div>
                          <p className="mt-2 text-sm">{painter.phone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-600">No painters found</h3>
                <p className="mt-2 text-gray-500">Try different keywords or browse other categories</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="plumbers">
            {filteredPlumbers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlumbers.map(plumber => (
                  <Card key={plumber.id} className="bg-white shadow-soft hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                          <img src={plumber.image} alt={plumber.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy">{plumber.name}</h3>
                          <p className="text-sm text-gray-600">{plumber.specialization}</p>
                          <div className="mt-1 text-teal text-sm">{plumber.experience} years experience</div>
                          <p className="mt-2 text-sm">{plumber.phone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-600">No plumbers found</h3>
                <p className="mt-2 text-gray-500">Try different keywords or browse other categories</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchResults;
