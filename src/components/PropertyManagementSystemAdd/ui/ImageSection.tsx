import React, { useState } from 'react';
import { ImageUploadSection } from './ImageUploadSection';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { usePostsStore } from '../../../Store/Owner/posts.store';

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

  const {
    setKitchenImage,
    setBathroomImage,
    setLivingRoomImage,
    setOutsideImage,
    kitchenImage,
    bathroomImage,
    livingRoomImage,
    outsideImage
  } = usePostsStore();

  const toggleSection = (section: keyof SectionState) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSave = () => {
    console.log("Kitchen Image:", kitchenImage);
    console.log("Bathroom Image:", bathroomImage);
    console.log("LivingRoom Image:", livingRoomImage);
    console.log("Outside Image:", outsideImage);
    alert("تم حفظ الصور في الستيت بنجاح!");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-primary_TXD">صور العقار</h2>
      <p className="text-gray-600 mb-6 dark:text-secondary_TXD">
        قم برفع صور لكل منطقة في العقار. انقر على مربعات الصور لرفع صور جديدة.
      </p>

      <div className="space-y-4 dark:bg-secondary_BGD ">
        {[{
          key: 'kitchen', label: 'صور المطبخ', desc: 'قم برفع حتى 3 صور للمطبخ', setter: setKitchenImage
        }, {
          key: 'bathroom', label: 'صور الحمام', desc: 'قم برفع حتى 3 صور للحمام', setter: setBathroomImage
        }, {
          key: 'livingRoom', label: 'صور الصالة', desc: 'قم برفع حتى 3 صور للصالة', setter: setLivingRoomImage
        }, {
          key: 'entrance', label: 'صور المدخل/الشارع الرئيسي', desc: 'قم برفع حتى 3 صور لمدخل العقار أو منظر الشارع', setter: setOutsideImage
        }].map((section) => (
          <div key={section.key} className="border border-gray-200 rounded-lg overflow-hidden">
            <div
              className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors dark:bg-primary_BGD dark:hover:bg-secondary_BGD"
              onClick={() => toggleSection(section.key as keyof SectionState)}
            >
              <h3 className="font-medium text-gray-800 dark:text-primary_TXD">{section.label}</h3>
              {expandedSections[section.key as keyof SectionState] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {expandedSections[section.key as keyof SectionState] && (
              <div className="p-4">
                <ImageUploadSection
                  title={section.label}
                  description={section.desc}
                  maxImages={3} // use one image for backend compatibility
                  onImagesChange={(images) => {
                    const image = images[0] || null;
                    section.setter(image);
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <div className="mt-6">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          حفظ الصور
        </button>
      </div> */}
    </div>
  );
};