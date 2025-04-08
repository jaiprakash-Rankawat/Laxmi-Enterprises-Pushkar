
import { useState } from "react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogFooter 
} from "@/components/ui/dialog";
import { 
  Edit, Trash2, Plus, Eye, Star 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  AlertDialog, AlertDialogAction, AlertDialogCancel, 
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter, 
  AlertDialogHeader, AlertDialogTitle 
} from "@/components/ui/alert-dialog";
import { products, categories, Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const AdminProducts = () => {
  const [productList, setProductList] = useState<Product[]>(products);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    category: "",
    price: 0,
    image: "/placeholder.svg",
    description: "",
    featured: false
  });
  
  const { toast } = useToast();

  const handleAddProduct = () => {
    const productId = Date.now().toString();
    const productToAdd = { ...newProduct, id: productId };
    setProductList([...productList, productToAdd]);
    setIsAddDialogOpen(false);
    setNewProduct({
      id: "",
      name: "",
      category: "",
      price: 0,
      image: "/placeholder.svg",
      description: "",
      featured: false
    });
    toast({
      title: "Product Added",
      description: `${productToAdd.name} has been added successfully.`
    });
  };

  const handleEditProduct = () => {
    if (!currentProduct) return;
    
    setProductList(productList.map(product => 
      product.id === currentProduct.id ? currentProduct : product
    ));
    setIsEditDialogOpen(false);
    toast({
      title: "Product Updated",
      description: `${currentProduct.name} has been updated successfully.`
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
            {productList.map((product) => (
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
                    onClick={() => toggleFeatured(product)}
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
                    onClick={() => openEditDialog(product)}
                  >
                    <Edit size={14} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 text-rose"
                    onClick={() => openDeleteDialog(product)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add Product Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <Input
                id="name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="category" className="text-right">
                Category
              </label>
              <select 
                id="category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="price" className="text-right">
                Price (₹)
              </label>
              <Input
                id="price"
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value)})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right">
                Description
              </label>
              <Textarea
                id="description"
                value={newProduct.description}
                onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="featured" className="text-right">
                Featured
              </label>
              <div className="col-span-3">
                <input
                  id="featured"
                  type="checkbox"
                  checked={newProduct.featured}
                  onChange={(e) => setNewProduct({...newProduct, featured: e.target.checked})}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="featured" className="ml-2">
                  Mark as featured product
                </label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddProduct} className="bg-navy hover:bg-lightblue">Add Product</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Product Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          {currentProduct && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-name" className="text-right">
                  Name
                </label>
                <Input
                  id="edit-name"
                  value={currentProduct.name}
                  onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-category" className="text-right">
                  Category
                </label>
                <select 
                  id="edit-category"
                  value={currentProduct.category}
                  onChange={(e) => setCurrentProduct({...currentProduct, category: e.target.value})}
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-price" className="text-right">
                  Price (₹)
                </label>
                <Input
                  id="edit-price"
                  type="number"
                  value={currentProduct.price}
                  onChange={(e) => setCurrentProduct({...currentProduct, price: parseFloat(e.target.value)})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-description" className="text-right">
                  Description
                </label>
                <Textarea
                  id="edit-description"
                  value={currentProduct.description}
                  onChange={(e) => setCurrentProduct({...currentProduct, description: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="edit-featured" className="text-right">
                  Featured
                </label>
                <div className="col-span-3">
                  <input
                    id="edit-featured"
                    type="checkbox"
                    checked={currentProduct.featured}
                    onChange={(e) => setCurrentProduct({...currentProduct, featured: e.target.checked})}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <label htmlFor="edit-featured" className="ml-2">
                    Mark as featured product
                  </label>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEditProduct} className="bg-navy hover:bg-lightblue">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the product <strong>{currentProduct?.name}</strong>. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteProduct} className="bg-rose hover:bg-rose/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminProducts;
