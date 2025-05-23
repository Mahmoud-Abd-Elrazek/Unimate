import Search_bar_myreservations from "../../../components/search_bar_myreservations/search_bar_myreservations";

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
    <div className=" h-screen">
        <h1 className="text-4xl text-semibold text-center my-5 ">حجوزاتى</h1>
        {/* the search bar */}
        <div className="dark:text[white]">
            <Search_bar_myreservations placeholderval="ابحث فى حجوزاتى"/>
        </div>
            {/* the table */}
        <div className="p-5">
  <div className="overflow-x-auto rounded-xl shadow-md w-full">
    <table className="w-full min-w-[500px] text-right border-collapse">
      <thead className="text-center">
        <tr className="bg-gray-300 dark:text-[white] dark:bg-[#1D1D1D]">
          <th className="py-3 px-4">الحالة</th>
          <th className="py-3 px-4">تاريخ الحجز</th>
          <th className="py-3 px-4">مكان الإقامة</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {bookings.map((booking, index) => (
          <tr key={index} className="border-b border-gray-200">
            <td className="py-2 px-4">
              <span className={`px-3 py-1 rounded-lg text-sm ${getStatusStyle(booking.status)}`}>
                {booking.status}
              </span>
            </td>
            <td className="py-2 px-4">{booking.date}</td>
            <td className="py-2 px-4">{booking.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    </div>
  )
}
