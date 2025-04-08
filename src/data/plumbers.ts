
export interface Plumber {
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

export const plumbers: Plumber[] = [
  {
    id: "pl1",
    name: "Dinesh Yadav",
    phone: "9876543212",
    email: "dinesh@example.com",
    address: "789 Temple Road, Pushkar",
    experience: 7,
    specialization: "Pipe Fitting",
    rank: 1,
    image: "/placeholder.svg",
  },
  {
    id: "pl2",
    name: "Mukesh Patel",
    phone: "9876543213",
    address: "101 Market Street, Pushkar",
    experience: 4,
    specialization: "Bathroom Installations",
    rank: 2,
    image: "/placeholder.svg",
  }
];

export const getPlumberById = (id: string): Plumber | undefined => {
  return plumbers.find(plumber => plumber.id === id);
};
