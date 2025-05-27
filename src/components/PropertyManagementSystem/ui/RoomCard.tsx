import React, { useState } from 'react';
import { Room } from './RoomsList';
import { Pencil, Trash2, X, Check } from 'lucide-react';
import { ImageUpload } from './ImageUpload'; // تأكد من مسار الاستيراد الصحيح

interface RoomCardProps {
  room: Room;
  onUpdate: (room: Room) => void;
  onDelete: (roomId: string) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRoom, setEditedRoom] = useState<Room>(room);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setEditedRoom(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setEditedRoom(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSave = () => {
    onUpdate(editedRoom);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedRoom(room);
    setIsEditing(false);
  };

  const handleImageChange = (url: string) => {
    setEditedRoom(prev => ({
      ...prev,
      imageUrl: url,
    }));
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow dark:bg-secondary_BGD">
      <div className="relative">
        {isEditing ? (
          <ImageUpload
            imageUrl={editedRoom.imageUrl}
            onChange={handleImageChange}
            index={1}
          />
        ) : (
          <div className="aspect-video bg-gray-100 flex items-center justify-center dark:bg-primary_BGD">
            {room.imageUrl ? (
              <img
                src={room.imageUrl}
                alt={room.description}
                className="h-full w-full object-cover"
              />
            ) : (
              <p className="text-gray-400 dark:text-secondary_TXD">لا توجد صورة</p>
            )}
          </div>
        )}

        {!isEditing && (
          <div className="absolute top-2 right-2 flex space-x-2 gap-1">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition-colors"
            >
              <Pencil size={16} className="text-blue-500" />
            </button>
            <button
              onClick={() => onDelete(room.id)}
              className="bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition-colors"
            >
              <Trash2 size={16} className="text-red-500" />
            </button>
          </div>
        )}
      </div>

      <div className="p-4">
        {isEditing ? (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-primary_TXD">
                وصف الغرفة
              </label>
              <textarea
                name="description"
                value={editedRoom.description}
                onChange={handleChange}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-secondary_BGD"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-primary_TXD">
                  السعة
                </label>
                <input
                  type="number"
                  name="capacity"
                  value={editedRoom.capacity}
                  onChange={handleChange}
                  min={1}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-primary_TXD">
                  سعر السرير
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="bedPrice"
                    value={editedRoom.bedPrice}
                    onChange={handleChange}
                    min={0}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-sm dark:text-secondary_TXD">ر.س</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="hasAC"
                  checked={editedRoom.hasAC}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
                />
                <span className="text-sm text-gray-700 mr-2 dark:text-secondary_TXD">تكييف</span>
              </label>
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={handleCancel}
                className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors dark:text-secondary_TXD"
              >
                <X size={14} className="ml-1" />
                إلغاء
              </button>
              <button
                onClick={handleSave}
                className="flex items-center px-3 py-1.5 bg-blue-500 rounded text-sm text-white hover:bg-blue-600 transition-colors mr-2"
              >
                <Check size={14} className="ml-1" />
                حفظ
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-medium mb-1">{room.description}</h3>
            <div className="flex justify-between text-sm text-gray-600 mb-2 dark:text-secondary_TXD">
              <span>السعة: {room.capacity} {room.capacity === 1 ? 'شخص' : 'أشخاص'}</span>
              <span>{room.bedPrice} ر.س/سرير</span>
            </div>
            <div className="text-sm">
              {room.hasAC ? (
                <span className="text-green-600">✓ يوجد تكييف</span>
              ) : (
                <span className="text-gray-400">✗ لا يوجد تكييف</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
