
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onClose?: () => void;
  variant?: "navbar" | "fullscreen";
}

const SearchBar = ({ 
  className = "", 
  placeholder = "Search products...", 
  onClose,
  variant = "navbar" 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      if (onClose) onClose();
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex items-center w-full ${className} ${
        variant === "fullscreen" ? "max-w-2xl mx-auto" : ""
      }`}
    >
      <div className="relative flex-1">
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`pl-10 pr-4 py-2 w-full border-slate-200 rounded-full focus:border-lightblue focus:ring-1 focus:ring-lightblue ${
            variant === "fullscreen" ? "text-lg py-6" : ""
          }`}
        />
        <Search 
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${
            variant === "fullscreen" ? "w-5 h-5" : "w-4 h-4"
          }`} 
        />
      </div>
      <Button 
        type="submit"
        className={`ml-2 bg-navy hover:bg-lightblue rounded-full ${
          variant === "fullscreen" ? "px-6 py-6" : ""
        }`}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
