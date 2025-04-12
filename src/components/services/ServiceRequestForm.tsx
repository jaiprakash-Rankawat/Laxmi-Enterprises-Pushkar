
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ServiceRequestFormProps {
  service: 'painters' | 'plumbers';
}

const ServiceRequestForm = ({ service }: ServiceRequestFormProps) => {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2">Your Name*</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Phone Number*</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Address*</label>
          <input
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2">Your Requirements</label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
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
  );
};

export default ServiceRequestForm;
