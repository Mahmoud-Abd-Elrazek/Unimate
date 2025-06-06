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
      },
      barThickness: 30,
      borderSkipped: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      titleFont: { size: 14 },
      bodyFont: { size: 12 },
      padding: 10,
    },
  },
  scales: {
    x: {
      ticks: { font: { size: 12 } },
      grid: { display: false },
    },
    y: {
      beginAtZero: true,
      grid: { drawBorder: false, color: "#eee" },
      ticks: { font: { size: 12 } },
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
    <div className="flex flex-col">
      <main className="overflow-auto px-4 py-4 md:px-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">معاملاتي المالية</h1>

        {/* جدول المعاملات */}
        <div className="rounded shadow p-4 mb-8">
          <input
            type="text"
            placeholder="...ابحث في سجل المعاملات"
            className="w-full p-2 mb-4 border border-gray-300 rounded-full text-right focus:border-black focus:ring-1 focus:ring-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="overflow-x-auto">
            <table className="min-w-[500px] w-full text-right border-t text-sm">
              <thead className="bg-gray-100 dark:bg-[#1D1D1D]">
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

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-center">
          <div className="rounded shadow p-4">
            <p className="text-sm text-gray-600 dark:text-white">إجمالي الأرباح</p>
            <p className="text-red-600 font-bold text-xl">10,350</p>
          </div>
          <div className="rounded shadow p-4">
            <p className="text-sm text-gray-600 dark:text-white">عدد الحجوزات</p>
            <p className="text-red-600 font-bold text-xl">27</p>
          </div>
          <div className="rounded shadow p-4">
            <p className="text-sm text-gray-600 dark:text-white">نسبة التغيير</p>
            <p className="text-red-600 font-bold text-xl">11.11%</p>
          </div>
        </div>

        {/* الرسم البياني والعقارات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-4">إحصائيات الربح والتأجير</h2>
            <Bar data={data} options={options} />
          </div>
          <div className="rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-4">أكثر العقارات حجزًا</h2>
            <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
              {[1, 2].map((_, idx) => (
                <div key={idx} className="flex gap-4">
                  <img
                    src="https://doudapartmenthomes.com/wp-content/uploads/2023/12/sidekix-media-LFlbLb8vJls-unsplash-scaled.jpg"
                    className="w-28 h-20 sm:w-32 sm:h-24 object-cover rounded"
                    alt="عقار"
                  />
                  <div>
                    <p className="font-semibold">عقار 1</p>
                    <p className="text-sm text-gray-500">غرفة خاصة - مكيف - إنترنت</p>
                    <p className="text-yellow-500">★★★★★</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinancialTransactions;
