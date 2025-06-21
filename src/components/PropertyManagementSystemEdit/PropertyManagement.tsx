import { useEffect, useState } from 'react';
import { Layout } from './ui/Layout';
import { PropertyForm } from './ui/PropertyForm';
import { ImageSection } from './ui/ImageSection';
// import { RoomsList } from './ui/RoomsList';
import { TabNavigation } from './ui/TabNavigation';
import { usePostsStore } from '../../Store/Owner/posts.store';

function PropertyManagementEdit() {
  const [activeTab, setActiveTab] = useState('details');
  const EditPost=usePostsStore(state=>state.EditPost)
  const tabs = [
    { id: 'details', label: 'تفاصيل العقار' },
    // { id: 'rooms', label: 'إدارة الغرف' },
    { id: 'images', label: 'صور العقار' },
  ];
//  useEffect(()=>{
//   EditPost(id);
//  },[])
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 pt-[100px] py-8 slide-in" dir="rtl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 dark:text-primary_TXD">
            تعديل العقار
          </h1>
          <p className="text-gray-600 dark:text-secondary_TXD">
            يمكنك تعديل تفاصيل العقار، الغرف، والصور.
          </p>
        </header>

        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <div className="rounded-lg shadow-md p-6 mt-6">
          {activeTab === 'details' && <PropertyForm />}
          {/* {activeTab === 'rooms' && <RoomsList />} */}
          {activeTab === 'images' && <ImageSection />}
        </div>
      </div>
    </Layout>
  );
}

export default PropertyManagementEdit;
