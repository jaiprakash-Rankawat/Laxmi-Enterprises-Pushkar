
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ProductPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: ProductPaginationProps) => {
  const handlePageClick = (page: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5;
    
    // Always show first page
    pages.push(1);
    
    // Calculate range of pages to show around current page
    let startPage = Math.max(2, currentPage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages - 1, startPage + showPages - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(2, endPage - showPages + 1);
    }
    
    // Add dots after first page if needed
    if (startPage > 2) {
      pages.push("ellipsis-start");
    }
    
    // Add pages in range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    // Add dots before last page if needed
    if (endPage < totalPages - 1) {
      pages.push("ellipsis-end");
    }
    
    // Always show last page if there are multiple pages
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={handlePageClick(currentPage - 1)}
            />
          </PaginationItem>
        )}

        {getPageNumbers().map((page, i) => (
          <PaginationItem key={`page-${i}`}>
            {page === "ellipsis-start" || page === "ellipsis-end" ? (
              <span className="px-4 py-2">...</span>
            ) : (
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={handlePageClick(page as number)}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={handlePageClick(currentPage + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
