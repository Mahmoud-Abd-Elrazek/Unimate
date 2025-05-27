import React, { useState } from 'react';
import { Plus, Minus, Wifi, Car, UtilityPole, Coffee, UtensilsCrossed, Droplets, Fan, Tv } from 'lucide-react';

interface PropertyFormData {
  description: string;
  locationDescription: string;
  area: string;
  floor: number;
  capacity: number;
  price: number;
  type: 'male' | 'female' | 'any';
  services: string[];
}

interface ServiceSelectorProps {
  selectedServices: string[];
  onChange: (services: string[]) => void;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({ selectedServices, onChange }) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 rtl">
      {availableServices.map((service) => {
        const isSelected = selectedServices.includes(service.id);
        return (
          <div
            key={service.id}
            onClick={() => toggleService(service.id)}
            className={`
              border rounded-lg p-3 flex items-center cursor-pointer transition-all select-none
              ${isSelected
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-300 hover:border-gray-400 text-gray-700'}
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

export const PropertyForm: React.FC = () => {
  const [formData, setFormData] = useState<PropertyFormData>({
    description: '',
    locationDescription: '',
    area: '',
    floor: 1,
    capacity: 1,
    price: 0,
    type: 'any',
    services: [],
  });

  const areas = [
    'وسط المدينة',
    'شمال المدينة',
    'جنوب المدينة',
    'شرق المدينة',
    'غرب المدينة',
    'الحي التجاري',
    'الحي السكني',
    'المنطقة الجامعية',
    'المنطقة التاريخية',
    'ضاحية المدينة',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: ['floor', 'capacity', 'price'].includes(name) ? Number(value) : value,
    }));
  };

  const handleServiceChange = (services: string[]) => {
    setFormData(prev => ({ ...prev, services }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('تم إرسال البيانات:', formData);
    alert('تم حفظ بيانات العقار!');
  };

  return (
    <div className="rtl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-primary_TXD">تفاصيل العقار</h2>
      <p className="text-gray-600 mb-6 dark:text-secondary_TXD">أدخل المعلومات التفصيلية عن العقار</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1 dark:text-primary_TXD">
            وصف العقار
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="قم بتقديم وصف مفصل للعقار..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-secondary_BGD"
          />
        </div>

        <div>
          <label htmlFor="locationDescription" className="block text-sm font-medium text-gray-700 mb-1 dark:text-primary_TXD">
            وصف الموقع
          </label>
          <textarea
            id="locationDescription"
            name="locationDescription"
            rows={3}
            value={formData.locationDescription}
            onChange={handleChange}
            placeholder="صف الموقع والمرافق القريبة..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-secondary_BGD"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1 dark:text-primary_TXD">
              المنطقة
            </label>
            <select
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-secondary_BGD"
            >
              <option value="">اختر منطقة</option>
              {areas.map(area => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="floor" className="block text-sm font-medium text-gray-700 mb-1 dark:text-primary_TXD">
              الطابق/الدور
            </label>
            <input
              type="number"
              id="floor"
              name="floor"
              min={0}
              value={formData.floor}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-secondary_BGD"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1 dark:text-primary_TXD">
              عدد الأفراد
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              min={1}
              value={formData.capacity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-secondary_BGD"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1 dark:text-primary_TXD">
              السعر
            </label>
            <div className="relative">
              <input
                type="number"
                id="price"
                name="price"
                min={0}
                value={formData.price}
                onChange={handleChange}
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right dark:bg-secondary_BGD"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none ">
                <span className="text-gray-500 dark:text-primary_TXD">ر.س</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-primary_TXD">نوع السكن</label>
            <div className="flex space-x-4 gap-2 rtl:space-x-reverse">
              {['male', 'female', 'any'].map(type => (
                <label key={type} className="inline-flex items-center cursor-pointer ">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={formData.type === type}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="mr-2 text-sm text-gray-700 dark:text-primary_TXD">
                    {type === 'male' ? 'رجال' : type === 'female' ? 'نساء' : 'أي'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-primary_TXD">الخدمات الإضافية</label>
          <ServiceSelector selectedServices={formData.services} onChange={handleServiceChange} />
          
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            حفظ العقار
          </button>
        </div>
      </form>
    </div>
  );
};
