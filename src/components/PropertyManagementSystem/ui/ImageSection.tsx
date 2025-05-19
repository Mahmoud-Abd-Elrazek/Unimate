import React, { useState } from 'react';
import { ImageUploadSection } from './ImageUploadSection';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SectionState {
  kitchen: boolean;
  bathroom: boolean;
  livingRoom: boolean;
  entrance: boolean;
  additional: boolean;
}

export const ImageSection: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<SectionState>({
    kitchen: true,
    bathroom: false,
    livingRoom: false,
    entrance: false,
    additional: false,
  });

  const toggleSection = (section: keyof SectionState) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">صور العقار</h2>
      <p className="text-gray-600 mb-6">
        قم برفع صور لكل منطقة في العقار. انقر على مربعات الصور لرفع صور جديدة.
      </p>

      <div className="space-y-4">
        {/* Kitchen Section */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div 
            className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => toggleSection('kitchen')}
          >
            <h3 className="font-medium text-gray-800">صور المطبخ</h3>
            {expandedSections.kitchen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {expandedSections.kitchen && (
            <div className="p-4">
              <ImageUploadSection 
                title="صور المطبخ" 
                description="قم برفع حتى 3 صور للمطبخ" 
                maxImages={3} 
              />
            </div>
          )}
        </div>

        {/* Bathroom Section */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div 
            className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => toggleSection('bathroom')}
          >
            <h3 className="font-medium text-gray-800">صور الحمام</h3>
            {expandedSections.bathroom ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {expandedSections.bathroom && (
            <div className="p-4">
              <ImageUploadSection 
                title="صور الحمام" 
                description="قم برفع حتى 3 صور للحمام" 
                maxImages={3} 
              />
            </div>
          )}
        </div>

        {/* Living Room Section */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div 
            className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => toggleSection('livingRoom')}
          >
            <h3 className="font-medium text-gray-800">صور الصالة</h3>
            {expandedSections.livingRoom ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {expandedSections.livingRoom && (
            <div className="p-4">
              <ImageUploadSection 
                title="صور الصالة" 
                description="قم برفع حتى 3 صور للصالة" 
                maxImages={3} 
              />
            </div>
          )}
        </div>

        {/* Entrance Section */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div 
            className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => toggleSection('entrance')}
          >
            <h3 className="font-medium text-gray-800">صور المدخل/الشارع الرئيسي</h3>
            {expandedSections.entrance ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {expandedSections.entrance && (
            <div className="p-4">
              <ImageUploadSection 
                title="صور المدخل/الشارع الرئيسي" 
                description="قم برفع حتى 3 صور لمدخل العقار أو منظر الشارع" 
                maxImages={3} 
              />
            </div>
          )}
        </div>

        {/* Additional Images Section */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div 
            className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => toggleSection('additional')}
          >
            <h3 className="font-medium text-gray-800">صور إضافية</h3>
            {expandedSections.additional ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {expandedSections.additional && (
            <div className="p-4">
              <ImageUploadSection 
                title="صور إضافية" 
                description="قم برفع حتى 3 صور إضافية للعقار" 
                maxImages={3} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};