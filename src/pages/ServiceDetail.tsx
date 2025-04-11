
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, MapPin, Star, Clock } from "lucide-react";
import { painters, getPainterById } from "@/data/painters";
import { plumbers, getPlumberById } from "@/data/plumbers";
import { useToast } from "@/hooks/use-toast";

const ServiceDetail = () => {
  const { serviceType, serviceId } = useParams<{ serviceType: string; serviceId: string }>();
  const { toast } = useToast();
  
  const servicePerson = serviceType === "painters" 
    ? getPainterById(serviceId || "") 
    : getPlumberById(serviceId || "");

  if (!servicePerson) {
    return (
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-navy mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the service professional you're looking for.
          </p>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const makeCall = () => {
    window.location.href = `tel:${servicePerson.phone}`;
    toast({
      title: "Calling service professional",
      description: `Calling ${servicePerson.name} at ${servicePerson.phone}`,
    });
  };

  const sendWhatsApp = () => {
    const message = encodeURIComponent(`Hello ${servicePerson.name}, I found you on Laxmi Enterprises and would like to discuss a project.`);
    window.open(`https://wa.me/${servicePerson.phone.replace(/\D/g, '')}?text=${message}`, '_blank');
    toast({
      title: "Opening WhatsApp",
      description: `Opening WhatsApp to message ${servicePerson.name}`,
    });
  };
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/services" className="text-navy hover:text-lightblue inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Services
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <div className="h-full bg-gray-200">
                <img
                  src={servicePerson.image}
                  alt={servicePerson.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 p-6">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-navy">{servicePerson.name}</h1>
                  <p className="text-lg text-gray-600">
                    {serviceType === "painters" ? "Painter" : "Plumber"} • {servicePerson.specialization}
                  </p>
                </div>
                
                <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="font-semibold text-navy">
                    Top Rated {servicePerson.rank === 1 ? "Professional" : "Service Provider"}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <Clock className="h-5 w-5 text-navy mr-2" />
                <span className="text-gray-600">{servicePerson.experience} years of experience</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-navy mr-3 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{servicePerson.phone}</p>
                  </div>
                </div>
                
                {servicePerson.email && (
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-navy mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{servicePerson.email}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start md:col-span-2">
                  <MapPin className="h-5 w-5 text-navy mr-3 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">{servicePerson.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-navy hover:bg-lightblue flex-1 sm:flex-none"
                  onClick={makeCall}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                
                <Button 
                  className="bg-green-600 hover:bg-green-700 flex-1 sm:flex-none"
                  onClick={sendWhatsApp}
                >
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Other {serviceType === "painters" ? "Painters" : "Plumbers"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(serviceType === "painters" ? painters : plumbers)
              .filter(person => person.id !== serviceId)
              .map(person => (
                <div key={person.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-40 bg-gray-200">
                    <img 
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-navy">{person.name}</h3>
                      <div className="flex items-center bg-blue-50 px-2 py-0.5 rounded text-xs">
                        <Star className="h-3 w-3 text-yellow-500 mr-1" />
                        <span>Rank #{person.rank}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{person.specialization}</p>
                    <p className="text-sm text-gray-600 mb-4 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {person.experience} years experience
                    </p>
                    
                    <Link to={`/services/${serviceType}/${person.id}`}>
                      <Button className="w-full">View Profile</Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
