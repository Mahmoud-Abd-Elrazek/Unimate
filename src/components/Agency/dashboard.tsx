import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Dashboard {
  id: number;
  title: string;
  Fdate: string; // تاريخ التقديم
  status: "معلق" | "مقبول" | "مرفوض" | "معدل";
  Ldate: string; // تاريخ الرد
}

const defaultDeclarations: Dashboard[] = [
  { id: 1, title: "تصريح ضريبة الأملاك", Fdate: "2024-07-20", status: "معلق", Ldate: "2024-08-20" },
  { id: 2, title: "تصريح ضريبة الدخل", Fdate: "2024-06-15", status: "مقبول", Ldate: "2024-07-30" },
  { id: 3, title: "تصريح رخصة تجارية", Fdate: "2024-05-01", status: "مرفوض", Ldate: "2024-07-22" },
  { id: 4, title: "تصريح تسجيل المركبات", Fdate: "2024-04-10", status: "معدل", Ldate: "2024-06-20" },
  { id: 5, title: "تصريح رسوم الاستيراد", Fdate: "2024-03-05", status: "مقبول", Ldate: "2024-04-20" },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "معلق": return "bg-yellow-100 text-yellow-700";
    case "مقبول": return "bg-green-100 text-green-700";
    case "مرفوض": return "bg-red-100 text-red-700";
    case "معدل": return "bg-blue-100 text-blue-700";
    default: return "";
  }
}

export default function DeclarationsPage() {
  const navigate = useNavigate();
  const [declarations, setDeclarations] = useState<Dashboard[]>([]);
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // جلب البيانات من localStorage
  useEffect(() => {
    const saved = localStorage.getItem("declarations");
    if (saved) {
      setDeclarations(JSON.parse(saved));
    } else {
      setDeclarations(defaultDeclarations);
    }
  }, []);

  const filtered = declarations.filter((d) => {
    const matchesSearch = d.title.toLowerCase().includes(search.toLowerCase());

    const declarationDate = new Date(d.Fdate);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    const matchesFrom = from ? declarationDate >= from : true;
    const matchesTo = to ? declarationDate <= to : true;
    const matchesStatus = statusFilter ? d.status === statusFilter : true;

    return matchesSearch && matchesFrom && matchesTo && matchesStatus;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans" dir="rtl">
      {/* العنوان + زر عمل إقرار */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">إقراراتى</h1>
        <button
          onClick={() => navigate("/create decition")}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
        >
          عمل إقرار
        </button>
      </div>
      <hr /> <br />

      {/* البحث والفلاتر */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 text-right">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">ابحث بالعنوان</label>
          <input
            type="text"
            placeholder="ابحث عن تصريح..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">من تاريخ (بداية التقديم)</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">إلى تاريخ (نهاية الرد)</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">الحالة</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">كل الحالات</option>
            <option value="معلق">معلق</option>
            <option value="مقبول">مقبول</option>
            <option value="مرفوض">مرفوض</option>
            <option value="معدل">معدل</option>
          </select>
        </div>
      </div>

      {/* الجدول */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-right border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 border-b">العنوان</th>
              <th className="px-4 py-3 border-b">تاريخ التقديم</th>
              <th className="px-4 py-3 border-b">الحالة</th>
              <th className="px-4 py-3 border-b">إجراء</th>
              <th className="px-4 py-3 border-b">تاريخ الرد</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 border-b">{d.title}</td>
                <td className="px-4 py-3 border-b">{d.Fdate}</td>
                <td className="px-4 py-3 border-b">
                  <span className={`px-3 py-1 text-sm rounded-full font-medium ${getStatusClasses(d.status)}`}>
                    {d.status}
                  </span>
                </td>
                <td className="px-2 py-2 border-b">
                  <button className="hover:underline text-blue-600">عرض</button>
                </td>
                <td className="px-4 py-3 border-b">
                  {d.Ldate ? (
                    d.Ldate
                  ) : (
                    <span className="block w-16 h-[1px] bg-gray-300 mx-auto"></span>
                  )}
                </td>

              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  لا توجد نتائج مطابقة
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
