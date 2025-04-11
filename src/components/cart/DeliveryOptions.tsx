
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { shopInfo } from "@/data/services";
import { MapPin, Package, Store } from "lucide-react";

export type DeliveryMethod = "delivery" | "pickup";

interface DeliveryOptionsProps {
  selectedMethod: DeliveryMethod;
  onMethodChange: (method: DeliveryMethod) => void;
}

const DeliveryOptions = ({ selectedMethod, onMethodChange }: DeliveryOptionsProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-3">Delivery Method</h3>
      
      <RadioGroup 
        value={selectedMethod} 
        onValueChange={(value) => onMethodChange(value as DeliveryMethod)}
        className="grid gap-4"
      >
        <div className={`flex items-start space-x-3 border rounded-md p-4 ${
          selectedMethod === "delivery" ? "border-navy bg-blue-50" : "border-gray-200"
        }`}>
          <RadioGroupItem value="delivery" id="delivery" className="mt-1" />
          <div className="flex-1">
            <div className="flex items-center">
              <Label htmlFor="delivery" className="font-medium text-navy">Home Delivery</Label>
              <Package className="ml-2 h-4 w-4 text-navy" />
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Standard delivery (2-3 business days)
            </p>
          </div>
        </div>

        <div className={`flex items-start space-x-3 border rounded-md p-4 ${
          selectedMethod === "pickup" ? "border-navy bg-blue-50" : "border-gray-200"
        }`}>
          <RadioGroupItem value="pickup" id="pickup" className="mt-1" />
          <div className="flex-1">
            <div className="flex items-center">
              <Label htmlFor="pickup" className="font-medium text-navy">Store Pickup</Label>
              <Store className="ml-2 h-4 w-4 text-navy" />
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Ready for pickup within 24 hours at our store
            </p>
            <div className="mt-2 p-3 bg-gray-100 rounded-md">
              <div className="flex">
                <MapPin className="h-5 w-5 text-navy mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">{shopInfo.name}</p>
                  <p className="text-xs text-gray-500">{shopInfo.address}</p>
                  <p className="text-xs text-gray-500 mt-1">Phone: {shopInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default DeliveryOptions;
