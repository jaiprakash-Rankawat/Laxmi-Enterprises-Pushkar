
import { useState } from "react";
import { Product } from "@/data/products";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Eye, Star } from "lucide-react";
import ConfirmDeleteDialog from "@/components/admin/common/ConfirmDeleteDialog";

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
  onToggleFeatured: (product: Product) => void;
}

const ProductTable = ({ products, onEdit, onDelete, onToggleFeatured }: ProductTableProps) => {
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      onDelete(productToDelete);
      setShowDeleteDialog(false);
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <div className="h-12 w-12 bg-slate-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover" 
                  />
                </div>
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category.replace("-", " ")}</TableCell>
              <TableCell>₹{product.price.toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onToggleFeatured(product)}
                  className={`${product.featured ? "text-amber" : "text-gray-400"}`}
                >
                  <Star size={16} fill={product.featured ? "currentColor" : "none"} />
                </Button>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="icon" className="h-8 w-8" asChild>
                  <a href={`/product/${product.id}`} target="_blank" rel="noreferrer">
                    <Eye size={14} />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 text-blue-600"
                  onClick={() => onEdit(product)}
                >
                  <Edit size={14} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 text-rose"
                  onClick={() => handleDeleteClick(product)}
                >
                  <Trash2 size={14} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ConfirmDeleteDialog
        isOpen={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        onConfirm={handleConfirmDelete}
        title="Delete Product"
        description={
          <p>
            Are you sure you want to delete <strong>{productToDelete?.name}</strong>? This action cannot be undone.
          </p>
        }
      />
    </>
  );
};

export default ProductTable;
