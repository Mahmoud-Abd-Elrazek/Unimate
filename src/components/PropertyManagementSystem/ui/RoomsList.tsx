import React from 'react';
import { RoomCard } from './RoomCard';
import { Plus } from 'lucide-react';
import { usePostsStore } from '../../../Store/Owner/posts.store';

export const RoomsList: React.FC = () => {
  const { Rooms, addRoom, updateRoom, deleteRoom } = usePostsStore();

  const handleAddRoom = () => {
    // مثال لإضافة غرفة جديدة بشكل افتراضي
    const fakeImage = new File([''], 'fake-image.png', { type: 'image/png' });
    addRoom('غرفة جديدة', 100, true, 2, fakeImage);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-primary_TXD">
            إدارة الغرف
          </h2>
          <p className="text-gray-600 dark:text-secondary_TXD">
            إدارة الغرف الفردية في العقار
          </p>
        </div>
        <button
          onClick={handleAddRoom}
          className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md transition-colors"
        >
          <Plus size={16} />
          إضافة غرفة
        </button>
      </div>

      {Rooms.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">لم يتم إضافة غرف بعد. أضف أول غرفة!</p>
          <button
            onClick={handleAddRoom}
            className="mt-4 flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md transition-colors mx-auto"
          >
            <Plus size={16} />
            إضافة غرفة
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onUpdate={(updatedRoom) => {
                  updateRoom(updatedRoom);
                }}
                onDelete={deleteRoom}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
