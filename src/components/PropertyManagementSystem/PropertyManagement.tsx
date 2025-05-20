import  { useState } from 'react';
import { Layout } from './ui/Layout';
import { PropertyForm } from './ui/PropertyForm';
import { ImageSection } from './ui/ImageSection';
import { RoomsList } from './ui/RoomsList';
import { TabNavigation } from './ui/TabNavigation';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';

function PropertyManagement() {
  const [activeTab, setActiveTab] = useState('images');
  
  const tabs = [
    { id: 'images', label: 'صور العقار' },
    { id: 'details', label: 'تفاصيل العقار' },
    { id: 'rooms', label: 'إدارة الغرف' },
  ];

  const handleSave = () => {
    alert('تم حفظ معلومات العقار بنجاح!');
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8 fade-in pt-[100px]" dir='rtl'>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">نظام إدارة العقارات</h1>
          <p className="text-gray-600">تعديل تفاصيل وصور العقار</p>
        </header>

        <TabNavigation 
          tabs={tabs} 
          activeTab={activeTab} 
          onChange={setActiveTab}
        />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          {activeTab === 'images' && <ImageSection />}
          {activeTab === 'details' && <PropertyForm />}
          {activeTab === 'rooms' && <RoomsList />}
        </div>

        <div className="flex justify-between mt-8">
          <button 
            onClick={() => {
              const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
              if (currentIndex > 0) {
                setActiveTab(tabs[currentIndex - 1].id);
              }
            }}
            disabled={tabs.findIndex(tab => tab.id === activeTab) === 0}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft size={16} />
            السابق
          </button>
          
          <div className="flex gap-3">
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              <Save size={16} />
              حفظ التغييرات
            </button>

            <button 
              onClick={() => {
                const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
                if (currentIndex < tabs.length - 1) {
                  setActiveTab(tabs[currentIndex + 1].id);
                }
              }}
              disabled={tabs.findIndex(tab => tab.id === activeTab) === tabs.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              التالي
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PropertyManagement;