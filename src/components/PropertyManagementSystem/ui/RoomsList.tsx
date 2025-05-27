import React, { useState } from 'react';
import { RoomCard } from './RoomCard';
import { Plus } from 'lucide-react';

export interface Room {
  id: string;
  description: string;
  capacity: number;
  bedPrice: number;
  hasAC: boolean;
  imageUrl: string;
}

export const RoomsList: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: '1',
      description: 'غرفة مزدوجة مع إطلالة',
      capacity: 2,
      bedPrice: 250,
      hasAC: true,
      imageUrl: '',
    },
    {
      id: '2',
      description: 'غرفة مفردة مع حمام مشترك',
      capacity: 1,
      bedPrice: 150,
      hasAC: false,
      imageUrl: '',
    }
  ]);

  const addRoom = () => {
    const newRoom: Room = {
      id: `room-${Date.now()}`,
      description: 'غرفة جديدة',
      capacity: 1,
      bedPrice: 100,
      hasAC: false,
      imageUrl: '',
    };

    setRooms([...rooms, newRoom]);
  };

  const updateRoom = (updatedRoom: Room) => {
    console.log("Room saved:", updatedRoom); // ✅ اطبع البيانات هنا

    setRooms(rooms.map(room =>
      room.id === updatedRoom.id ? updatedRoom : room
    ));

    console.log("All rooms after update:", rooms);
  };

  const deleteRoom = (roomId: string) => {
    setRooms(rooms.filter(room => room.id !== roomId));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-primary_TXD">إدارة الغرف</h2>
          <p className="text-gray-600 dark:text-secondary_TXD">إدارة الغرف الفردية في العقار</p>
        </div>
        <button
          onClick={addRoom}
          className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md transition-colors"
        >
          <Plus size={16} />
          إضافة غرفة
        </button>
      </div>

      {rooms.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">لم يتم إضافة غرف بعد. أضف أول غرفة!</p>
          <button
            onClick={addRoom}
            className="mt-4 flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md transition-colors mx-auto"
          >
            <Plus size={16} />
            إضافة غرفة
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rooms.map(room => (
            <RoomCard
              key={room.id}
              room={room}
              onUpdate={updateRoom}
              onDelete={deleteRoom}
            />
          ))}
        </div>
      )}
    </div>
  );
};