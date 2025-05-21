import React from 'react';
import { Plus, Minus, Wifi, Car, UtilityPole, Coffee, UtensilsCrossed, Droplets, Fan, Tv } from 'lucide-react';

interface ServiceSelectorProps {
  selectedServices: string[];
  onChange: (services: string[]) => void;
}

export const ServiceSelector: React.FC<ServiceSelectorProps> = ({ selectedServices, onChange }) => {
  const availableServices = [
    { id: 'wifi', name: 'واي فاي', icon: <Wifi size={18} /> },
    { id: 'parking', name: 'موقف سيارات', icon: <Car size={18} /> },
    { id: 'electricity', name: 'كهرباء', icon: <UtilityPole size={18} /> },
    { id: 'breakfast', name: 'إفطار', icon: <Coffee size={18} /> },
    { id: 'kitchen', name: 'مطبخ', icon: <UtensilsCrossed size={18} /> },
    { id: 'water', name: 'مياه', icon: <Droplets size={18} /> },
    { id: 'ac', name: 'تكييف', icon: <Fan size={18} /> },
    { id: 'tv', name: 'تلفاز', icon: <Tv size={18} /> },
  ];

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onChange(selectedServices.filter(id => id !== serviceId));
    } else {
      onChange([...selectedServices, serviceId]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
      {availableServices.map((service) => {
        const isSelected = selectedServices.includes(service.id);
        return (
          <div
            key={service.id}
            onClick={() => toggleService(service.id)}
            className={`
              border rounded-lg p-3 flex items-center cursor-pointer transition-all
              ${isSelected 
                ? 'border-blue-500 bg-blue-50 text-blue-700' 
                : 'border-gray-300 hover:border-gray-400 text-gray-700'
              }
            `}
          >
            <div className="ml-2">{service.icon}</div>
            <span className="flex-1">{service.name}</span>
            {isSelected ? (
              <Minus size={16} className="text-blue-500" />
            ) : (
              <Plus size={16} className="text-gray-400" />
            )}
          </div>
        );
      })}
    </div>
  );
};