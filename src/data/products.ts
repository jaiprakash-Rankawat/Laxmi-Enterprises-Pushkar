
import { Product, Category } from "./types";
import { asianPaintsProducts } from "./categories/asian-paints";
import { jswPaintsProducts } from "./categories/jsw-paints";
import { jkMaxxPaintsProducts } from "./categories/jk-maxx-paints";
import { cpvcPipeProducts } from "./categories/cpvc-pipe";
import { upvcPipeProducts } from "./categories/upvc-pipe";
import { pvcPipeProducts } from "./categories/pvc-pipe";
import { bathFittingsProducts } from "./categories/bath-fittings";
import { sanitaryItemsProducts } from "./categories/sanitary-items";
import { giFittingsProducts } from "./categories/gi-fittings";
import { extraItemsProducts } from "./categories/extra-items";

export type { Product, Category };

export const categories: Category[] = [
  {
    id: "asian-paints",
    name: "Asian Paints",
    image: "/ApexShyne.png",
  },
  { id: "jsw-paints", name: "JSW Paints", image: "/PixaSilk.png" },
  {
    id: "jk-maxx-paints",
    name: "JK Maxx Paints",
    image: "/NinjaExteriorEmulsion.png",
  },
  {
    id: "cpvc-pipe",
    name: "CPVC Pipe and Fittings",
    image: "/CpvcPipeAndFittings.png",
  },
  {
    id: "upvc-pipe",
    name: "UPVC Pipe and Fittings",
    image: "/UpvcPipeAndFittings.png",
  },
  { id: "pvc-pipe", name: "PVC Pipe and Fittings", image: "/pvc-pipe.png" },
  { id: "bath-fittings", name: "Bath Fittings", image: "/placeholder.svg" },
  { id: "sanitary-items", name: "Sanitary Items", image: "/placeholder.svg" },
  { id: "gi-fittings", name: "GI Fittings", image: "/placeholder.svg" },
  { id: "extra-items", name: "Extra Items", image: "/JkWallPutty.png" },
];

// Combine all products
export const products: Product[] = [
  ...asianPaintsProducts,
  ...jswPaintsProducts,
  ...jkMaxxPaintsProducts,
  ...cpvcPipeProducts,
  ...upvcPipeProducts,
  ...pvcPipeProducts,
  ...bathFittingsProducts,
  ...sanitaryItemsProducts,
  ...giFittingsProducts,
  ...extraItemsProducts
];

// Helper functions
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getProductById = (productId: string): Product | undefined => {
  return products.find((product) => product.id === productId);
};
