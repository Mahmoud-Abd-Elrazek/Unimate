import { FaUserCircle } from "react-icons/fa";
import { Button } from "../../../components/ui/button";

export default function MyProperties() {
  const requests = [
    {
      id: 1,
      description: "الشؤون - أولاد - 3 غرف - 6 ضيف - الدور الثالث",
      timeAgo: "منذ 10 ساعات",
      requester: "طالب 1",
      rating: 4,
    },
    {
      id: 2,
      description: "الشؤون - أولاد - 3 غرف - 6 ضيف - الدور الثالث",
      timeAgo: "منذ 10 ساعات",
      requester: "طالب 1",
      rating: 4,
    },
    {
      id: 3,
      description: "الشؤون - أولاد - 3 غرف - 6 ضيف - الدور الثالث",
      timeAgo: "منذ 10 ساعات",
      requester: "طالب 1",
      rating: 4,
    },
    {
      id: 4,
      description: "الشؤون - أولاد - 3 غرف - 6 ضيف - الدور الثالث",
      timeAgo: "منذ 10 ساعات",
      requester: "طالب 1",
      rating: 4,
    },
    {
      id: 5,
      description: "الشؤون - أولاد - 3 غرف - 6 ضيف - الدور الثالث",
      timeAgo: "منذ 10 ساعات",
      requester: "طالب 1",
      rating: 4,
    },
    {
      id: 6,
      description: "الشؤون - أولاد - 3 غرف - 6 ضيف - الدور الثالث",
      timeAgo: "منذ 10 ساعات",
      requester: "طالب 1",
      rating: 4,
    },
  ];

  return (
    <div className="flex flex-col h-full p-4 gap-6">
      <h1 className="text-center text-2xl font-bold text-gray-700 dark:text-[white]">طلبات الحجز</h1>

      <div className="flex justify-end">
        <h2 className="text-lg font-semibold text-gray-600 dark:text-[white]">طلبات قيد الانتظار</h2>
      </div>

      {/* الكروت داخل سكرول */}
      <div className="flex flex-col gap-4 overflow-y-auto h-[calc(100vh-200px)] scrollbar-hide pr-2">
        {requests.map((req) => (
          <div
            key={req.id}
            className="flex flex-col md:flex-row justify-between md:items-center gap-4 border rounded-xl p-4 shadow-sm w-full"
          >
            {/* الأكشنات */}
            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:h-[90px] w-full md:w-auto">
              <Button className="bg-green-600 text-white hover:bg-green-700 w-full md:w-[110px] " onClick={() => { }}>
                قبول
              </Button>
              <Button className="bg-red-500 text-white hover:bg-red-600 w-full md:w-[110px] " onClick={() => { }}>
                رفض
              </Button>
              <span className="text-sm text-gray-500 md:mt-2">{req.timeAgo}</span>
            </div>


            {/* التفاصيل */}
            <div className="flex-1 text-right w-full ">
              <h3 className="text-md md:text-lg font-semibold text-gray-800 dark:text-[#D9D9D9]">
                {req.description}
              </h3>
              <div className="flex justify-end items-center gap-2 mt-1">
                <span className="text-sm text-gray-600 dark:text-[#D9D9D9]">{req.requester}</span>
                <FaUserCircle className="text-xl text-gray-600 dark:text-[#D9D9D9]" />
              </div>
              <div className="flex justify-end mt-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className={`text-yellow-400 ${index < req.rating ? '' : 'opacity-30'}`}>★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
