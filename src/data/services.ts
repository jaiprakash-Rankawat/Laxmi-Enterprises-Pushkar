
export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "painters",
    name: "Find Painters",
    description: "Connect with skilled professional painters in your area for your painting needs.",
    image: "/placeholder.svg",
  },
  {
    id: "plumbers",
    name: "Find Plumbers",
    description: "Get reliable plumbing services from certified plumbers for all your plumbing requirements.",
    image: "/placeholder.svg",
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
