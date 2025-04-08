
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import SearchBar from "./SearchBar";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div 
        ref={overlayRef}
        className="bg-white w-full max-w-4xl rounded-xl p-8 animate-zoom-in"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-navy">Search Products</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-navy transition-colors"
            aria-label="Close search"
          >
            <X size={24} />
          </button>
        </div>
        
        <SearchBar 
          variant="fullscreen" 
          placeholder="Search products, painters, plumbers..." 
          onClose={onClose}
        />
        
        <p className="text-gray-500 mt-4 text-center">
          Type keywords to find products, services, and professionals
        </p>
      </div>
    </div>
  );
};

export default SearchOverlay;
