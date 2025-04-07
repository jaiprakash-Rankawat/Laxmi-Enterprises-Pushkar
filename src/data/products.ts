
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  { id: "asian-paints", name: "Asian Paints", image: "/placeholder.svg" },
  { id: "jsw-paints", name: "JSW Paints", image: "/placeholder.svg" },
  { id: "jk-maxx-paints", name: "JK Maxx Paints", image: "/placeholder.svg" },
  { id: "cpvc-pipe", name: "CPVC Pipe and Fittings", image: "/placeholder.svg" },
  { id: "upvc-pipe", name: "UPVC Pipe and Fittings", image: "/placeholder.svg" },
  { id: "pvc-pipe", name: "PVC Pipe and Fittings", image: "/placeholder.svg" },
  { id: "bath-fittings", name: "Bath Fittings", image: "/placeholder.svg" },
  { id: "sanitary-items", name: "Sanitary Items", image: "/placeholder.svg" },
  { id: "gi-fittings", name: "GI Fittings", image: "/placeholder.svg" },
  { id: "extra-items", name: "Extra Items", image: "/placeholder.svg" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Asian Paints Premium Emulsion",
    category: "asian-paints",
    price: 1200,
    image: "/placeholder.svg",
    description: "High-quality emulsion paint from Asian Paints.",
    featured: true,
  },
  {
    id: "2",
    name: "JSW Weather-proof Exterior Paint",
    category: "jsw-paints",
    price: 1500,
    image: "/placeholder.svg",
    description: "Weather-resistant exterior paint from JSW.",
    featured: true,
  },
  {
    id: "3",
    name: "JK Maxx Interior Paint",
    category: "jk-maxx-paints",
    price: 950,
    image: "/placeholder.svg",
    description: "Premium interior paint from JK Maxx.",
    featured: false,
  },
  {
    id: "4",
    name: "CPVC 1/2 Inch Pipe",
    category: "cpvc-pipe",
    price: 250,
    image: "/placeholder.svg",
    description: "Standard CPVC 1/2 inch pipe for plumbing.",
    featured: true,
  },
  {
    id: "5",
    name: "UPVC Elbow Joint",
    category: "upvc-pipe",
    price: 150,
    image: "/placeholder.svg",
    description: "UPVC elbow joint for water distribution systems.",
    featured: true,
  },
  {
    id: "6",
    name: "PVC Water Tank Connector",
    category: "pvc-pipe",
    price: 180,
    image: "/placeholder.svg",
    description: "PVC connector for water tanks.",
    featured: false,
  },
  {
    id: "7",
    name: "Chrome-plated Shower Head",
    category: "bath-fittings",
    price: 850,
    image: "/placeholder.svg",
    description: "Premium chrome-plated shower head.",
    featured: true,
  },
  {
    id: "8",
    name: "Ceramic Western Toilet",
    category: "sanitary-items",
    price: 4500,
    image: "/placeholder.svg",
    description: "Modern design ceramic western toilet.",
    featured: false,
  },
  {
    id: "9",
    name: "GI Tee Joint",
    category: "gi-fittings",
    price: 220,
    image: "/placeholder.svg",
    description: "Galvanized iron tee joint for plumbing systems.",
    featured: false,
  },
  {
    id: "10",
    name: "Paint Brush Set",
    category: "extra-items",
    price: 350,
    image: "/placeholder.svg",
    description: "Set of high-quality paint brushes.",
    featured: true,
  },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
