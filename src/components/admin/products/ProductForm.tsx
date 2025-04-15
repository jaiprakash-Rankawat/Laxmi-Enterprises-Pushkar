
import { useState, useEffect } from "react";
import { Product } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";

interface ProductFormProps {
  product?: Product;
  onSubmit: (product: Partial<Product>) => void;
  onCancel: () => void;
  submitLabel: string;
}

const ProductForm = ({ product, onSubmit, onCancel, submitLabel }: ProductFormProps) => {
  const [formData, setFormData] = useState<Partial<Product>>(
    product || {
      name: "",
      category: "",
      price: 0,
      image: "/placeholder.svg",
      description: "",
      featured: false
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [id.replace("edit-", "")]: checked });
    } else {
      const fieldName = id.replace("edit-", "");
      const fieldValue = type === "number" ? parseFloat(value) : value;
      setFormData({ ...formData, [fieldName]: fieldValue });
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="name" className="text-right">
          Name
        </label>
        <Input
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="category" className="text-right">
          Category
        </label>
        <select 
          id="category"
          value={formData.category}
          onChange={handleChange}
          className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        >
          <option value="" disabled={!product}>Select Category</option>
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
          value={formData.price}
          onChange={handleChange}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label htmlFor="description" className="text-right">
          Description
        </label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
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
            checked={formData.featured}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300"
          />
          <label htmlFor="featured" className="ml-2">
            Mark as featured product
          </label>
        </div>
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={handleSubmit} className="bg-navy hover:bg-lightblue">{submitLabel}</Button>
      </div>
    </div>
  );
};

export default ProductForm;
