import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NewDeclarationPage() {
  const [title, setTitle] = useState("");
  const [justification, setJustification] = useState(""); // حيثيات الإقرار
  const [body, setBody] = useState(""); // نص الإقرار
  const [file, setFile] = useState<File | null>(null);
  const [today, setToday] = useState<string>(""); // التاريخ من الـ API
  const navigate = useNavigate();

  // عند تحميل الصفحة نجيب التاريخ من API حسب الـ timezone
  useEffect(() => {
    async function fetchDate() {
      try {
        // غير Africa/Cairo حسب مكانك
        const res = await fetch("https://worldtimeapi.org/api/timezone/Africa/Cairo");
        const data = await res.json();

        // بنحوّل datetime → تاريخ YYYY-MM-DD
        const localDate = new Date(data.datetime).toLocaleDateString("en-CA"); // 2025-09-18
        setToday(localDate);
      } catch (err) {
        console.error("خطأ في جلب التاريخ:", err);
        // fallback: التاريخ المحلي من الجهاز
        setToday(new Date().toLocaleDateString("en-CA"));
      }
    }

    fetchDate();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newDeclaration = {
      id: Date.now(),
      title,
      justification, // حيثيات
      body, // نص
      Fdate: today || new Date().toLocaleDateString("en-CA"), // تاريخ اليوم
      status: "معلق" as const,
      Ldate: "",
    };

    const saved = localStorage.getItem("declarations");
    const declarations = saved ? JSON.parse(saved) : [];
    declarations.push(newDeclaration);

    localStorage.setItem("declarations", JSON.stringify(declarations));

    alert("تم إرسال الإقرار بنجاح ✅");
    navigate("/declarations");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10" dir="rtl">
      <div className="w-full max-w-2xl mb-6 text-right">
        <button
          onClick={() => navigate("/agency-dashboard")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
        >
          <span>↩️</span>
          <span className="font-medium">العودة إلى إقراراتي</span>
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">إنشاء إقرار جديد</h1>
      <p className="text-gray-500 mb-8">املأ البيانات التالية لإنشاء إقرار جديد.</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6"
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">عنوان الإقرار</label>
          <input
            type="text"
            placeholder="مثال: تقرير مالي للربع الثالث 2024"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">حيثيات الإقرار</label>
          <textarea
            placeholder="اكتب هنا حيثيات الإقرار بالكامل..."
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
            rows={4}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">نص الإقرار</label>
          <textarea
            placeholder="اكتب هنا محتوى الإقرار بالكامل..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={8}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">المرفقات</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-blue-600 hover:underline"
            >
              {file ? `تم اختيار الملف: ${file.name}` : "قم برفع ملف أو اسحب وأفلت هنا"}
            </label>
            <p className="text-gray-400 text-sm mt-2">يدعم PNG, JPG, PDF حتى 10MB</p>
          </div>
        </div>

        <div className="text-left">
          <button
            type="submit"
            disabled={!today}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition disabled:opacity-50"
          >
            إرسال الإقرار
          </button>
        </div>
      </form>
    </div>
  );
}
