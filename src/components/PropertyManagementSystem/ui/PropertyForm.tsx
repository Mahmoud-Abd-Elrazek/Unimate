import React, { useState } from 'react';
import { ServiceSelector } from './ServiceSelector';

type PropertyType = 'male' | 'female' | 'any';

interface PropertyFormData {
  description: string;
  locationDescription: string;
  area: string;
  floor: number;
  capacity: number;
  price: number;
  type: PropertyType;
  services: string[];
}

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
    'ضاحية المدينة'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: name === 'floor' || name === 'capacity' || name === 'price' 
        ? Number(value) 
        : value
    }));
  };

  const handleServiceChange = (services: string[]) => {
    setFormData(prev => ({
      ...prev,
      services
    }));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">تفاصيل العقار</h2>
      <p className="text-gray-600 mb-6">
        أدخل المعلومات التفصيلية عن العقار
      </p>
      
      <form className="space-y-6">
        {/* Property Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            وصف العقار
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="قم بتقديم وصف مفصل للعقار..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Location Description */}
        <div>
          <label htmlFor="locationDescription" className="block text-sm font-medium text-gray-700 mb-1">
            وصف الموقع
          </label>
          <textarea
            id="locationDescription"
            name="locationDescription"
            rows={3}
            value={formData.locationDescription}
            onChange={handleChange}
            placeholder="صف الموقع والمرافق القريبة..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Area Selection */}
          <div>
            <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
              المنطقة
            </label>
            <select
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">اختر منطقة</option>
              {areas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>
          
          {/* Floor/Level */}
          <div>
            <label htmlFor="floor" className="block text-sm font-medium text-gray-700 mb-1">
              الطابق/الدور
            </label>
            <input
              type="number"
              id="floor"
              name="floor"
              min={0}
              value={formData.floor}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Capacity */}
          <div>
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">
              عدد الأفراد
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              min={1}
              value={formData.capacity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">ر.س</span>
              </div>
            </div>
          </div>
          
          {/* Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              نوع السكن
            </label>
            <div className="flex space-x-4 gap-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="male"
                  checked={formData.type === 'male'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="mr-2 text-sm text-gray-700">رجال</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="female"
                  checked={formData.type === 'female'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="mr-2 text-sm text-gray-700">نساء</span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Services */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            الخدمات الإضافية
          </label>
          <ServiceSelector 
            selectedServices={formData.services} 
            onChange={handleServiceChange} 
          />
        </div>
      </form>
    </div>
  );
};