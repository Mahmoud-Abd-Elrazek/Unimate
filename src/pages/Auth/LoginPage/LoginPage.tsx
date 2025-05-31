import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useState } from "react";
import { FiEye, FiEyeOff, FiLogIn } from "react-icons/fi";
import useAuthStore from "../../../Store/Auth/Auth.store";
// import { Slide, toast, ToastContainer } from "react-toastify";
import { toast } from "sonner";
const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const [accountType, setAccountType] = useState("طالب");

  const login = useAuthStore((state) => state.login);

  const SignInSchema = z.object({
    email: z.string().min(1, "مطلوب").email("ادخل بريد الكتروني صحيح"),
    password: z.string().min(8, "يجب أن تكون كلمة المرور أطول من 8 أحرف"),
  });

  type SignT = z.infer<typeof SignInSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignT>({
    resolver: zodResolver(SignInSchema),
    mode: "onChange",
  });
  // const role=useAuthStore((state) => state.role);
  const OnSubmit: SubmitHandler<SignT> = async (data) => {
    // const role = accountType === "طالب" ? "Student" : "Owner"; // ممكن تضيف "Admin" لو في
    const success = await login(data.email, data.password);

    if (success) {
      const savedRole = localStorage.getItem("role");
      toast.success(`تم تسجيل الدخول كـ ${savedRole}!`);
      navigate("/", { replace: true });
    } else {
      toast.error("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 slide-in">
      <div className="w-full max-w-md rounded-xl p-8 shadow-md text-right">
        <h2 className="text-2xl font-semibold mb-2">تسجيل الدخول</h2>

        {/* اختيار نوع الحساب */}
        {/* <div className="flex justify-end gap-6 mb-4 text-right">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="accountType"
              value="طالب"
              checked={accountType === "طالب"}
              onChange={(e) => setAccountType(e.target.value)}
            />
            طالب
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="accountType"
              value="صاحب عقار"
              checked={accountType === "صاحب عقار"}
              onChange={(e) => setAccountType(e.target.value)}
            />
            صاحب عقار
          </label>
        </div> */}

        {/* نموذج تسجيل الدخول */}
        <form onSubmit={handleSubmit(OnSubmit)} className="space-y-4">
          <div className="text-right">
            <label htmlFor="email" className="block mb-1 font-medium">البريد الالكترونى</label>
            <input
              dir="rtl"
              type="email"
              id="email"
              className="InputStyle w-full"
              placeholder="البريد الالكترونى"
              {...register("email")}
            />
            {errors.email && <p className="ErrorMessage">{errors.email.message}</p>}
          </div>

          <div className="text-right relative">
            <label htmlFor="password" className="block mb-1 font-medium">كلمة المرور</label>
            <input
              dir="rtl"
              type={showPassword ? "text" : "password"}
              id="password"
              className="InputStyle w-full pr-10"
              placeholder="كلمة المرور"
              {...register("password")}
            />
            <button
              type="button"
              className="absolute left-3 top-11 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
            {errors.password && <p className="ErrorMessage">{errors.password.message}</p>}
          </div>

          <div className="flex justify-between items-end text-sm">
            <Link to="/forgetpassword" className="text-blue-500 underline">
              نسيت كلمة المرور؟
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex justify-center items-center gap-2 w-full MainColorBG text-white rounded-md py-3 mt-2"
          >
            <FiLogIn className="text-xl" />
            تسجيل الدخول
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          ليس لديك حساب؟{" "}
          <Link to="/register" className="text-blue-500 font-medium underline">
            سجل الآن
          </Link>
        </p>
      </div>
      {/* <ToastContainer position="top-center" autoClose={3000} transition={Slide} /> */}
    </div>
  );
};

export default LoginPage;
