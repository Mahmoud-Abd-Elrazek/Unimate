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

  const [imagesBySection, setImagesBySection] = useState<{
    kitchen: File[];
    bathroom: File[];
    livingRoom: File[];
    entrance: File[];
    additional: File[];
  }>({
    kitchen: [],
    bathroom: [],
    livingRoom: [],
    entrance: [],
    additional: [],
  });

  const toggleSection = (section: keyof SectionState) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSave = () => {
    console.log('كل الصور:', imagesBySection);
    // تقدر تبعتهم لـ API هنا أو تستخدمهم في فورم أكبر
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">صور العقار</h2>
      <p className="text-gray-600 mb-6">
        قم برفع صور لكل منطقة في العقار. انقر على مربعات الصور لرفع صور جديدة.
      </p>

      <div className="space-y-4">
        {[
          { key: 'kitchen', label: 'صور المطبخ', desc: 'قم برفع حتى 3 صور للمطبخ' },
          { key: 'bathroom', label: 'صور الحمام', desc: 'قم برفع حتى 3 صور للحمام' },
          { key: 'livingRoom', label: 'صور الصالة', desc: 'قم برفع حتى 3 صور للصالة' },
          { key: 'entrance', label: 'صور المدخل/الشارع الرئيسي', desc: 'قم برفع حتى 3 صور لمدخل العقار أو منظر الشارع' },
          { key: 'additional', label: 'صور إضافية', desc: 'قم برفع حتى 3 صور إضافية للعقار' }
        ].map((section) => (
          <div key={section.key} className="border border-gray-200 rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection(section.key as keyof SectionState)}
            >
              <h3 className="font-medium text-gray-800">{section.label}</h3>
              {expandedSections[section.key as keyof SectionState] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {expandedSections[section.key as keyof SectionState] && (
              <div className="p-4">
                <ImageUploadSection 
                  title={section.label}
                  description={section.desc}
                  maxImages={3}
                  onImagesChange={(images) =>
                    setImagesBySection((prev) => ({
                      ...prev,
                      [section.key]: images
                    }))
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          حفظ الصور
        </button>
      </div>
    </div>
  );
};
