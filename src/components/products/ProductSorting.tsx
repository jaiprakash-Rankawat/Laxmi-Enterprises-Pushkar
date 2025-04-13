
import { 
  ArrowDownAZ, 
  ArrowUpZA,
  ArrowDown01, 
  ArrowUp10 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";

interface ProductSortingProps {
  currentSort: SortOption;
  onSortChange: (option: SortOption) => void;
}

const ProductSorting = ({ currentSort, onSortChange }: ProductSortingProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-navy text-navy">
          {currentSort === "name-asc" && <ArrowDownAZ size={16} className="mr-2" />}
          {currentSort === "name-desc" && <ArrowUpZA size={16} className="mr-2" />}
          {currentSort === "price-asc" && <ArrowDown01 size={16} className="mr-2" />}
          {currentSort === "price-desc" && <ArrowUp10 size={16} className="mr-2" />}
          Sort by: {getSortLabel(currentSort)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem onClick={() => onSortChange("name-asc")} className="flex items-center">
          <ArrowDownAZ size={16} className="mr-2" />
          Name (A-Z)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSortChange("name-desc")} className="flex items-center">
          <ArrowUpZA size={16} className="mr-2" />
          Name (Z-A)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSortChange("price-asc")} className="flex items-center">
          <ArrowDown01 size={16} className="mr-2" />
          Price (Low to High)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSortChange("price-desc")} className="flex items-center">
          <ArrowUp10 size={16} className="mr-2" />
          Price (High to Low)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const getSortLabel = (sort: SortOption): string => {
  switch (sort) {
    case "name-asc":
      return "Name (A-Z)";
    case "name-desc":
      return "Name (Z-A)";
    case "price-asc":
      return "Price (Low to High)";
    case "price-desc":
      return "Price (High to Low)";
    default:
      return "Name (A-Z)";
  }
};

export default ProductSorting;
