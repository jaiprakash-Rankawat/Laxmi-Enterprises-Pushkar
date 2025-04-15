
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface ProductFiltersProps {
  onSearchChange: (search: string) => void;
  initialSearch?: string;
}

const ProductFilters = ({ onSearchChange, initialSearch = "" }: ProductFiltersProps) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, onSearchChange]);

  const clearSearch = () => {
    setSearchTerm("");
    onSearchChange("");
  };

  return (
    <div className="relative flex-1">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search products..."
          className="pl-10 pr-10 bg-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3"
            onClick={clearSearch}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;
