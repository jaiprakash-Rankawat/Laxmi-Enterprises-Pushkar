import { Product } from "../types";

export const jkMaxxPaintsProducts: Product[] = [
  {
    id: "jk1",
    name: "JK Maxx Classic Emulsion",
    category: "jk-maxx-paints",
    price: 1000,
    image: "/NinjaExteriorEmulsion.png",
    description: "Premium interior emulsion paint with smooth matt finish.",
    inStock: true,
    brand: "JK Maxx",
    specs: [
      { label: "Finish", value: "Smooth Matt" },
      { label: "Coverage", value: "130-150 sq. ft. per liter (2 coats)" },
      {
        label: "Thinner",
        value: "Clean water (30-40% first coat, 15-20% second coat)",
      },
      {
        label: "Drying Time",
        value: "Surface dry: 30 mins, Recoat: 3-4 hours",
      },
      { label: "Warranty", value: "2 years against peeling and cracking" },
      { label: "Pack Sizes", value: "1L, 4L, 10L, 20L" },
      { label: "Recommended For", value: "Interior walls and ceilings" },
      { label: "Safety", value: "Keep away from children, ensure ventilation" },
    ],
  },
];
