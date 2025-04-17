import Search_bar_myreservations from "../../components/search_bar_myreservations/search_bar_myreservations";

//import React from 'react'
interface BookingStatus {
    status: 'مؤكد' | 'ملغي' | 'قيد الانتظار';
    date: string;
    location: string;
  }
  
  const bookings: BookingStatus[] = [
    { status: 'مؤكد', date: '2025-04-01', location: 'القاهرة' },
    { status: 'ملغي', date: '2025-04-02', location: 'الجيزة' },
    { status: 'قيد الانتظار', date: '2025-04-03', location: 'الإسكندرية' },
    { status: 'مؤكد', date: '2025-04-04', location: 'المنصورة' },
  ];
  
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'مؤكد':
        return 'bg-green-500 text-white';
      case 'ملغي':
        return 'bg-red-500 text-white';
      case 'قيد الانتظار':
        return 'bg-yellow-400 text-black';
      default:
        return '';
    }
  };

export default function My_reservations() {
  return (
    <div className=" ">
        <h1 className="text-4xl text-semibold text-gray-500 text-center my-5">حجوزاتى</h1>
        {/* the search bar */}
        <div>
            <Search_bar_myreservations placeholderval="ابحث فى حجوزاتى"/>
        </div>
            {/* the table */}
        <div className="p-5">

        <div className="overflow-x-auto rounded-xl shadow-md ">
      <table className="min-w-full text-right border-collapse">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="py-3 px-4 ">الحالة</th>
            <th className="py-3 px-4">تاريخ الحجز</th>
            <th className="py-3 px-4">مكان الإقامة</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
              <tr key={index} className="border-b border-gray-200">
              <td className="py-2 px-4">
                <span className={`px-3 py-1 rounded-lg text-sm ${getStatusStyle(booking.status)}`}>
                  {booking.status}
                </span>
              </td>
              <td className="py-2 px-4">{booking.location}</td>
              <td className="py-2 px-4">{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
    </div>
  )
}
