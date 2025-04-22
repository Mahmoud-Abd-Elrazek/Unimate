// FinancialTransactions.tsx
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import { FaSearch } from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"],
  datasets: [
    {
      label: "الأرباح",
      data: [6500, 5900, 8000, 8100, 5600, 5500],
      backgroundColor: "rgb(239, 68, 68)",
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 0,
        bottomRight: 0,
      },
      barThickness: 30,
      borderSkipped: false, // يمنع قص الزوايا الدائرية
    },
  ],
};


const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      titleFont: { size: 14 },
      bodyFont: { size: 12 },
      padding: 10,
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 14,
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
        color: "#eee",
      },
      ticks: {
        font: {
          size: 14,
        },
      },
    },
  },
};

const transactions = [
  { name: "طلب 1", property: "عقار 1", amount: "3,500", date: "2025-04-01" },
  { name: "طلب 2", property: "عقار 2", amount: "4,200", date: "2025-04-10" },
];

const FinancialTransactions = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col  ">

      {/* Main scrollable */}
      <main className=" overflow-auto p-4 md:p-6">
        <h1 className="text-2xl font-bold text-center mb-6">معاملاتي المالية</h1>

        {/* جدول المعاملات */}
        <div className="bg-white rounded shadow p-4 mb-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="...ابحث في سجل المعاملات"
              className="w-full p-2 mr-10 mb-4 border border-gray-300 rounded-full text-right focus:border-black focus:ring-1 focus:ring-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* Search Icon */}
            {/* <span className="absolute right-3 top-3 text-gray-500">
              <FaSearch className="text-gray-400" />
            </span> */}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-t text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">اسم الطلب</th>
                  <th className="p-2">العقار</th>
                  <th className="p-2">المبلغ</th>
                  <th className="p-2">تاريخ الدفع</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-2">{tx.name}</td>
                    <td className="p-2">{tx.property}</td>
                    <td className="p-2">{tx.amount} جنيه</td>
                    <td className="p-2">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* الكروت التحليلية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
          <div className="bg-white rounded shadow p-4">
            <p className="text-sm text-gray-600">إجمالي الأرباح خلال الثلاثة أشهر الماضية</p>
            <p className="text-red-600 font-bold text-xl">10,350</p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <p className="text-sm text-gray-600">عدد الحجوزات الأخيرة</p>
            <p className="text-red-600 font-bold text-xl">27</p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <p className="text-sm text-gray-600">نسبة التغيير في الأرباح</p>
            <p className="text-red-600 font-bold text-xl">11.11%</p>
          </div>
        </div>

        {/* الرسم البياني والعقارات */}
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-4">إحصائيات الربح والتأجير</h2>
            <Bar data={data} options={options} />
          </div>
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-4">أكثر العقارات حجزًا</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <img
                  src="https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg"
                  className="w-32 h-24 object-cover rounded"
                  alt="عقار"
                />
                <div>
                  <p className="font-semibold">عقار 1</p>
                  <p className="text-sm text-gray-500">غرفة خاصة - مكيف - إنترنت</p>
                  <p className="text-yellow-500">★★★★★</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg"
                  className="w-32 h-24 object-cover rounded"
                  alt="عقار"
                />
                <div>
                  <p className="font-semibold">عقار 1</p>
                  <p className="text-sm text-gray-500">غرفة خاصة - مكيف - إنترنت</p>
                  <p className="text-yellow-500">★★★★★</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinancialTransactions;

