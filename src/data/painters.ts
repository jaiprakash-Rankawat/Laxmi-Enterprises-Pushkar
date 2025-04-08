
export interface Painter {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address: string;
  experience: number;
  specialization: string;
  rank: number;
  image: string;
}

export const painters: Painter[] = [
  {
    id: "p1",
    name: "Ramesh Kumar",
    phone: "9876543210",
    email: "ramesh@example.com",
    address: "123 Pushkar Road, Pushkar",
    experience: 5,
    specialization: "Interior Painting",
    rank: 1,
    image: "/placeholder.svg",
  },
  {
    id: "p2",
    name: "Sunil Sharma",
    phone: "9876543211",
    email: "sunil@example.com",
    address: "456 Ajmer Road, Pushkar",
    experience: 3,
    specialization: "Exterior Painting",
    rank: 2,
    image: "/placeholder.svg",
  }
];

export const getPainterById = (id: string): Painter | undefined => {
  return painters.find(painter => painter.id === id);
};
