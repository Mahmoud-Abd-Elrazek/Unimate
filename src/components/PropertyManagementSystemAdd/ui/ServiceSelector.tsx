import React, { JSX } from 'react';
import {
  Car,
  Coffee,
  Droplets,
  Fan,
  Plus,
  UtensilsCrossed,
  UtilityPole,
  Wifi,
  Tv,
  BedIcon,
  Minus,
} from 'lucide-react';

interface Service {
  id: number;
  name: string;
  icon: JSX.Element;
}

interface ServiceSelectorProps {
  selectedServices: { id: number; isSelected: boolean }[];
  onChange: (services: { id: number; isSelected: boolean }[]) => void;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  selectedServices,
  onChange,
}) => {
  const availableServices: Service[] = [
    { id: 3, name: 'واي فاي', icon: <Wifi size={18} /> },
    { id: 4, name: 'ديب فريزر', icon: <Car size={18} /> },
    { id: 5, name: 'مايكرويف', icon: <UtilityPole size={18} /> },
    { id: 6, name: 'بانيو', icon: <Coffee size={18} /> },
    { id: 7, name: 'سخان غاز', icon: <UtensilsCrossed size={18} /> },
    { id: 8, name: 'سخان كهرباء', icon: <Droplets size={18} /> },
    { id: 9, name: 'بوتجاز خمس شعل', icon: <Fan size={18} /> },
    { id: 10, name: 'مراتب قطن', icon: <Tv size={18} /> },
    { id: 11, name: 'سراير حديد', icon: <BedIcon size={18} /> },
    { id: 12, name: 'سراير خشب', icon: <BedIcon size={18} /> },
  ];

  const handleToggleService = (serviceId: number) => {
    const existing = selectedServices.find((s) => s.id === serviceId);

    if (existing) {
      const updated = selectedServices.map((s) =>
        s.id === serviceId ? { ...s, isSelected: !s.isSelected } : s
      );
      onChange([...updated]);
    } else {
      onChange([...selectedServices, { id: serviceId, isSelected: true }]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 rtl">
      {availableServices.map((service) => {
        const isSelected = selectedServices.find((s) => s.id === service.id)?.isSelected;

        return (
          <div
            key={service.id}
            className={`flex items-center justify-between gap-2 border p-3 rounded shadow-sm transition-all duration-300 cursor-pointer
              ${isSelected ? 'bg-green-100 dark:bg-green-900' : 'dark:bg-secondary_BGD'}
            `}
          >
            <div className={`flex items-center gap-2 
              ${isSelected ? 'text-green-600 dark:text-green-400' : ''}
            `}>
              {/* أيقونة */}
              {React.cloneElement(service.icon, {
                className: `w-5 h-5 ${isSelected ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-300'}`
              })}
              <span className="text-sm">{service.name}</span>
            </div>

            <button
              type="button"
              onClick={() => handleToggleService(service.id)}
              className={`hover:scale-110 transition-all duration-200 
                ${isSelected ? 'text-green-600 dark:text-green-400' : 'text-primary_BG'}
              `}
            >
              {isSelected ? <Minus size={16} /> : <Plus size={16} />}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSelector;
