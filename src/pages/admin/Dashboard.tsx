
import { Card } from "@/components/ui/card";
import { products } from "@/data/products";
import { painters } from "@/data/painters";
import { plumbers } from "@/data/plumbers";
import { ShoppingBag, Palette, Wrench, PackageOpen } from "lucide-react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-navy mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Products</p>
              <h3 className="text-2xl font-bold text-navy">{products.length}</h3>
            </div>
            <div className="h-12 w-12 bg-lightblue/20 rounded-full flex items-center justify-center">
              <ShoppingBag className="h-6 w-6 text-lightblue" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Categories</p>
              <h3 className="text-2xl font-bold text-navy">10</h3>
            </div>
            <div className="h-12 w-12 bg-orange/20 rounded-full flex items-center justify-center">
              <PackageOpen className="h-6 w-6 text-orange" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Painters</p>
              <h3 className="text-2xl font-bold text-navy">{painters.length}</h3>
            </div>
            <div className="h-12 w-12 bg-teal/20 rounded-full flex items-center justify-center">
              <Palette className="h-6 w-6 text-teal" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Plumbers</p>
              <h3 className="text-2xl font-bold text-navy">{plumbers.length}</h3>
            </div>
            <div className="h-12 w-12 bg-rose/20 rounded-full flex items-center justify-center">
              <Wrench className="h-6 w-6 text-rose" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Top Ranked Painters</h3>
          <div className="space-y-4">
            {painters.slice(0, 3).map(painter => (
              <div key={painter.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-gray-200 h-10 w-10 rounded-full overflow-hidden">
                  <img src={painter.image} alt={painter.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-navy">{painter.name}</h4>
                  <p className="text-sm text-gray-500">{painter.specialization}</p>
                </div>
                <div className="bg-navy text-white text-xs font-bold px-2 py-1 rounded">
                  Rank #{painter.rank}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Top Ranked Plumbers</h3>
          <div className="space-y-4">
            {plumbers.slice(0, 3).map(plumber => (
              <div key={plumber.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-gray-200 h-10 w-10 rounded-full overflow-hidden">
                  <img src={plumber.image} alt={plumber.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-navy">{plumber.name}</h4>
                  <p className="text-sm text-gray-500">{plumber.specialization}</p>
                </div>
                <div className="bg-navy text-white text-xs font-bold px-2 py-1 rounded">
                  Rank #{plumber.rank}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
