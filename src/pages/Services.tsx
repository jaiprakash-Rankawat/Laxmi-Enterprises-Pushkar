import { useState } from "react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const [service, setService] = useState<'painters' | 'plumbers'>('painters');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically submit the form to your backend
    console.log({
      service,
      name,
      phone,
      email,
      address,
      message,
    });
    
    // Show success message
    toast({
      title: "Request sent successfully",
      description: `We've received your request for ${service}. We'll contact you soon.`,
    });
    
    // Reset form
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setMessage('');
  };
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-navy mb-4">Our Professional Services</h1>
            <p className="text-gray-600">
              Connect with skilled painters and plumbers to help with your home improvement projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((serviceItem) => (
              <div key={serviceItem.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={serviceItem.image}
                    alt={serviceItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3">{serviceItem.name}</h3>
                  <p className="text-gray-600 mb-4">{serviceItem.description}</p>
                  <Button 
                    onClick={() => setService(serviceItem.id as 'painters' | 'plumbers')}
                    className={service === serviceItem.id ? "bg-navy" : "bg-lightblue hover:bg-navy"}
                  >
                    Request {serviceItem.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy mb-6">
              Request a {service === 'painters' ? 'Painter' : 'Plumber'}
            </h2>
            
            <div className="mb-6">
              <div className="flex border rounded-lg overflow-hidden">
                <button
                  className={`flex-1 py-3 px-4 text-center font-medium ${
                    service === 'painters' 
                      ? 'bg-navy text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setService('painters')}
                >
                  Painters
                </button>
                <button
                  className={`flex-1 py-3 px-4 text-center font-medium ${
                    service === 'plumbers' 
                      ? 'bg-navy text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setService('plumbers')}
                >
                  Plumbers
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name*</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number*</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Address*</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Your Requirements</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy"
                    placeholder={`Please describe what ${service === 'painters' ? 'painting' : 'plumbing'} work you need...`}
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6">
                <Button type="submit" className="bg-navy hover:bg-lightblue">
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
