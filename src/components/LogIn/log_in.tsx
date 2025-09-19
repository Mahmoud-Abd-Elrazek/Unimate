import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 🟢 جلب الإيميل من localStorage عند أول تحميل
  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  function validate() {
    if (!email) return "يرجى إدخال البريد الإلكتروني.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "البريد الإلكتروني غير صالح.";
    if (!password) return "يرجى إدخال كلمة المرور.";
    if (password.length < 6) return "كلمة المرور يجب أن تكون 6 أحرف على الأقل.";
    return null;
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);

    const v = validate();
    if (v) return setError(v);

    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 700));

      // 🟢 جلب المستخدمين من localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // 🔍 البحث عن المستخدم
      const foundUser = users.find(
        (u: any) => u.email === email && u.password === password
      );

      if (!foundUser) {
        setError("❌ البريد الإلكتروني أو كلمة المرور غير صحيحة.");
        return;
      }

      // 🟢 حفظ بيانات المستخدم الحالي
      localStorage.setItem("userEmail", email);
      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      // ✅ التوجيه حسب الدور
      if (foundUser.role === "admin") {
        navigate("/admin-dashboard");
      } else if (foundUser.role === "agency") {
        navigate("/agency-dashboard");
      } else if (foundUser.role === "governor") {
        navigate("/governor-dashboard");
      } else {
        setError("⚠️ الدور غير معروف.");
      }

    } catch {
      setError("حدث خطأ غير متوقع.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-sans" dir="rtl">
      <motion.div
        className="max-w-md w-full bg-gray-100 rounded-xl shadow-2xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">مرحبًا بك</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            سجّل الدخول للمتابعة إلى حسابك
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-right">
          {/* البريد الإلكتروني */}
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 bg-transparent text-right"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          {/* كلمة المرور */}
          <div className="relative">
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              كلمة المرور
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 bg-transparent text-right pr-12"
              placeholder="••••••••"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute left-3 top-9 text-sm text-indigo-500 hover:underline"
            >
              {showPassword ? "إخفاء" : "إظهار"}
            </button>
          </div>

          {/* رسالة الخطأ */}
          {error && <div className="text-sm text-red-600 text-right">{error}</div>}

          {/* زر تسجيل الدخول */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition disabled:opacity-60"
          >
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
