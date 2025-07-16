import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from './ui/Layout';
import { PropertyForm } from './ui/PropertyForm';
import { ImageSection } from './ui/ImageSection';
import { RoomsList } from './ui/RoomsList';
import { TabNavigation } from './ui/TabNavigation';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';
import { usePostsStore } from '../../Store/Owner/posts.store';

type Mode = 'list' | 'add' | 'edit';

function PropertyManagementAdd() {
  const location = useLocation();
  const AddPost = usePostsStore((state) => state.AddPost);
  const initialMode: Mode = location.state?.mode || 'list';
  const [mode, setMode] = useState<Mode>(initialMode);
  const [activeTab, setActiveTab] = useState('details');

  const tabs = [
    { id: 'details', label: 'تفاصيل العقار' },
    { id: 'rooms', label: 'إدارة الغرف' },
    { id: 'images', label: 'صور العقار' },
  ];

  const handleSave = () => {
    AddPost();
    if (mode === 'edit') {
      alert('تم حفظ التعديلات بنجاح');
    } else {
      alert('تم حفظ معلومات العقار بنجاح');
    }
    setMode('list');
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 pt-[100px] py-8 slide-in" dir="rtl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 dark:text-primary_TXD">
            {mode === 'add' ? 'إضافة عقار جديد' : 'تعديل العقار'}
          </h1>
          <p className="text-gray-600 dark:text-secondary_TXD">
            {mode === 'add' ? 'أدخل معلومات العقار الجديد' : 'تعديل تفاصيل وصور العقار'}
          </p>
        </header>

        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <div className="rounded-lg shadow-md p-6 mt-6">
          {activeTab === 'details' && <PropertyForm />}
          {activeTab === 'rooms' && <RoomsList />}
          {activeTab === 'images' && <ImageSection />}
        </div>

        <div className="flex justify-end mt-8">
          {mode === 'edit' ? (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              <Save size={16} />
              حفظ التعديلات
            </button>
          ) : (
            <div className="flex justify-between w-full">
              <div className="flex gap-3">
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
                  <ArrowRight size={16} />
                  السابق
                </button>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  disabled={activeTab !== 'images'}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors
                    ${activeTab === 'images'
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-green-300 text-white opacity-50 cursor-not-allowed'}
                  `}
                >
                  <Save size={16} />
                  إضافة العقار
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
                  <ArrowLeft size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default PropertyManagementAdd;
