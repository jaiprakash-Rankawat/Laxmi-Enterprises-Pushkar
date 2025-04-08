
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
  inStock?: boolean;
  oldPrice?: number;
  brand?: string;
  sku?: string;
  features?: string[];
  specifications?: Record<string, string | number>;
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
    inStock: true,
    oldPrice: 1500,
    brand: "Asian Paints",
    sku: "AP-PE-001",
    features: [
      "Superior coverage",
      "Washable finish",
      "Low VOC content",
      "Long-lasting color retention"
    ],
    specifications: {
      "Coverage": "90-100 sq ft/liter",
      "Finish": "Matt",
      "Drying Time": "2-3 hours",
      "Recoat Time": "4-6 hours"
    }
  },
  {
    id: "2",
    name: "JSW Weather-proof Exterior Paint",
    category: "jsw-paints",
    price: 1500,
    image: "/placeholder.svg",
    description: "Weather-resistant exterior paint from JSW.",
    featured: true,
    inStock: true,
    brand: "JSW",
    sku: "JSW-WP-002",
    features: [
      "Weather resistant",
      "UV protection",
      "Anti-algal properties",
      "Water repellent"
    ],
    specifications: {
      "Coverage": "80-90 sq ft/liter",
      "Finish": "Satin",
      "Drying Time": "3-4 hours",
      "Recoat Time": "6-8 hours"
    }
  },
  {
    id: "3",
    name: "JK Maxx Interior Paint",
    category: "jk-maxx-paints",
    price: 950,
    image: "/placeholder.svg",
    description: "Premium interior paint from JK Maxx.",
    featured: false,
    inStock: false,
    oldPrice: 1100,
    brand: "JK Maxx",
    sku: "JKM-IP-003",
    features: [
      "Stain resistant",
      "Easy to clean",
      "Rich color",
      "Smooth finish"
    ],
    specifications: {
      "Coverage": "95-110 sq ft/liter",
      "Finish": "Eggshell",
      "Drying Time": "1-2 hours",
      "Recoat Time": "4 hours"
    }
  },
  {
    id: "4",
    name: "CPVC 1/2 Inch Pipe",
    category: "cpvc-pipe",
    price: 250,
    image: "/placeholder.svg",
    description: "Standard CPVC 1/2 inch pipe for plumbing.",
    featured: true,
    inStock: true,
    brand: "Astral",
    sku: "CPVC-12-004",
    features: [
      "High temperature resistance",
      "Lead-free",
      "Corrosion resistant",
      "Easy installation"
    ],
    specifications: {
      "Length": "3 meters",
      "Material": "CPVC",
      "Pressure Rating": "15kg/cm²",
      "Temperature Rating": "93°C"
    }
  },
  {
    id: "5",
    name: "UPVC Elbow Joint",
    category: "upvc-pipe",
    price: 150,
    image: "/placeholder.svg",
    description: "UPVC elbow joint for water distribution systems.",
    featured: true,
    inStock: true,
    brand: "Finolex",
    sku: "UPVC-EJ-005",
    features: [
      "Leakproof",
      "Chemical resistant",
      "UV stabilized",
      "Durable construction"
    ],
    specifications: {
      "Material": "UPVC",
      "Size": "1 inch",
      "Angle": "90 degrees",
      "Pressure Rating": "10kg/cm²"
    }
  },
  {
    id: "6",
    name: "PVC Water Tank Connector",
    category: "pvc-pipe",
    price: 180,
    image: "/placeholder.svg",
    description: "PVC connector for water tanks.",
    featured: false,
    inStock: true,
    brand: "Supreme",
    sku: "PVC-WTC-006",
    features: [
      "Watertight seal",
      "Easy to install",
      "Compatible with standard tanks",
      "Long-lasting performance"
    ],
    specifications: {
      "Size": "1.5 inch",
      "Material": "PVC",
      "Type": "Threaded",
      "Max Pressure": "8kg/cm²"
    }
  },
  {
    id: "7",
    name: "Chrome-plated Shower Head",
    category: "bath-fittings",
    price: 850,
    image: "/placeholder.svg",
    description: "Premium chrome-plated shower head.",
    featured: true,
    inStock: true,
    oldPrice: 999,
    brand: "Jaquar",
    sku: "CPSH-007",
    features: [
      "Multiple spray patterns",
      "Easy to clean nozzles",
      "Anti-scale system",
      "Water-saving design"
    ],
    specifications: {
      "Material": "Chrome-plated brass",
      "Spray Settings": "5",
      "Flow Rate": "2.5 GPM",
      "Connection": "Standard 1/2 inch"
    }
  },
  {
    id: "8",
    name: "Ceramic Western Toilet",
    category: "sanitary-items",
    price: 4500,
    image: "/placeholder.svg",
    description: "Modern design ceramic western toilet.",
    featured: false,
    inStock: true,
    oldPrice: 5200,
    brand: "Hindware",
    sku: "CWT-008",
    features: [
      "Water-efficient flush",
      "Stain-resistant ceramic",
      "Comfortable height",
      "Quiet closing seat"
    ],
    specifications: {
      "Material": "Vitreous ceramic",
      "Flush Type": "Dual flush",
      "Water Consumption": "4/6 liters",
      "Trap Way": "Glazed"
    }
  },
  {
    id: "9",
    name: "GI Tee Joint",
    category: "gi-fittings",
    price: 220,
    image: "/placeholder.svg",
    description: "Galvanized iron tee joint for plumbing systems.",
    featured: false,
    inStock: true,
    brand: "Tata",
    sku: "GITJ-009",
    features: [
      "Strong construction",
      "Rust-resistant",
      "Precision threading",
      "Easy installation"
    ],
    specifications: {
      "Size": "3/4 inch",
      "Material": "Galvanized iron",
      "Type": "Equal Tee",
      "Weight": "0.25 kg"
    }
  },
  {
    id: "10",
    name: "Paint Brush Set",
    category: "extra-items",
    price: 350,
    image: "/placeholder.svg",
    description: "Set of high-quality paint brushes.",
    featured: true,
    inStock: true,
    oldPrice: 450,
    brand: "Coral",
    sku: "PBS-010",
    features: [
      "Assorted sizes",
      "Soft bristles",
      "Ergonomic handles",
      "Suitable for all paints"
    ],
    specifications: {
      "Pieces": "5",
      "Sizes": "1/2 to 4 inch",
      "Bristle Material": "Nylon blend",
      "Handle Material": "Wooden"
    }
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
