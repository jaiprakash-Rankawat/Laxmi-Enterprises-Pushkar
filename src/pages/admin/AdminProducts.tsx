
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { products, categories, Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import ProductTable from "@/components/admin/products/ProductTable";
import ProductForm from "@/components/admin/products/ProductForm";
import ConfirmDeleteDialog from "@/components/admin/common/ConfirmDeleteDialog";

const AdminProducts = () => {
  const [productList, setProductList] = useState<Product[]>(products);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  
  const { toast } = useToast();

  const handleAddProduct = (newProduct: Partial<Product>) => {
    const productId = Date.now().toString();
    const productToAdd = { ...newProduct, id: productId } as Product;
    setProductList([...productList, productToAdd]);
    setIsAddDialogOpen(false);
    toast({
      title: "Product Added",
      description: `${productToAdd.name} has been added successfully.`
    });
  };

  const handleEditProduct = (updatedProduct: Partial<Product>) => {
    if (!currentProduct) return;
    
    const updated = { ...currentProduct, ...updatedProduct };
    setProductList(productList.map(product => 
      product.id === currentProduct.id ? updated : product
    ));
    setIsEditDialogOpen(false);
    toast({
      title: "Product Updated",
      description: `${updated.name} has been updated successfully.`
    });
  };

  const handleDeleteProduct = () => {
    if (!currentProduct) return;
    
    setProductList(productList.filter(product => product.id !== currentProduct.id));
    setIsDeleteDialogOpen(false);
    toast({
      title: "Product Deleted",
      description: `${currentProduct.name} has been deleted successfully.`
    });
  };

  const openEditDialog = (product: Product) => {
    setCurrentProduct(product);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (product: Product) => {
    setCurrentProduct(product);
    setIsDeleteDialogOpen(true);
  };

  const toggleFeatured = (product: Product) => {
    const updatedProduct = { ...product, featured: !product.featured };
    setProductList(productList.map(p => 
      p.id === product.id ? updatedProduct : p
    ));
    toast({
      title: updatedProduct.featured ? "Product Featured" : "Product Unfeatured",
      description: `${product.name} has been ${updatedProduct.featured ? "added to" : "removed from"} featured products.`
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-navy">Products</h1>
        <Button 
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-navy hover:bg-lightblue"
        >
          <Plus size={16} className="mr-2" /> Add Product
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <ProductTable 
          products={productList}
          onEdit={openEditDialog}
          onDelete={openDeleteDialog}
          onToggleFeatured={toggleFeatured}
        />
      </div>

      {/* Add Product Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <ProductForm
            onSubmit={handleAddProduct}
            onCancel={() => setIsAddDialogOpen(false)}
            submitLabel="Add Product"
          />
        </DialogContent>
      </Dialog>

      {/* Edit Product Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          {currentProduct && (
            <ProductForm
              product={currentProduct}
              onSubmit={handleEditProduct}
              onCancel={() => setIsEditDialogOpen(false)}
              submitLabel="Save Changes"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <ConfirmDeleteDialog
        isOpen={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDeleteProduct}
        title="Are you sure?"
        description={
          <>
            This will permanently delete the product <strong>{currentProduct?.name}</strong>. 
            This action cannot be undone.
          </>
        }
      />
    </div>
  );
};

export default AdminProducts;
