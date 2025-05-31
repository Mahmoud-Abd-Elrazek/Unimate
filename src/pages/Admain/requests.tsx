
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BookingRequests: React.FC = () => {
  // بيانات تجريبية
  const requests = [
    { id: 1, name: 'أحمد محمد' },
    { id: 2, name: 'سارة علي' },
    { id: 3, name: 'خالد يوسف' },
  ];

  return (
    <div className="min-h-screen pt-[100px] px-4 bg-gray-50 dark:bg-primary_BGD" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-primary_TXD">
          طلبات الحجز
        </h1>

        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="flex items-center justify-between dark:bg-secondary_BGD  p-4 rounded-lg shadow"
            >
              {/* معلومات الشخص */}
              <div className="flex items-center gap-3">
                <FaUserCircle className="text-4xl text-gray-500 dark:text-secondary_TXD" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-secondary_TXD">{request.name}</p>
                  <Link
                    to={`/apartment-details/${request.id}`}
                    className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                  >
                    معرفة المزيد عن الشقة
                  </Link>
                </div>
              </div>

              {/* أزرار */}
              <div className="flex gap-2">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                  قبول
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
                  رفض
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingRequests;
