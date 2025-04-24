import { Link, useNavigate } from "react-router-dom";
import z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FiEye, FiEyeOff, FiUserPlus } from "react-icons/fi";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const RegisterSchema = z.object({
    firstname: z.string().min(1, { message: "ادخل الاسم الاول" }),
    lastname: z.string().min(1, { message: "ادخل الاسم الاخير" }),
    email: z.string().email({ message: "ادخل بريد الكتروني صحيح" }),
    nationalID: z
      .string()
      .length(14, { message: "ادخل الرقم القومي المكون من 14 رقماً" }),
    password: z.string().min(8, { message: "يجب أن تكون كلمة المرور أطول من 8 أحرف" }),
    confirmPassword: z.string().min(8, "أعد كتابة كلمة المرور"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "كلمتا المرور غير متطابقتين",
    path: ["confirmPassword"],
  });

  type RegisterT = z.infer<typeof RegisterSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterT>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });

  const OnSubmit: SubmitHandler<RegisterT> = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md rounded-xl p-8 shadow-md text-right">
        <h2 className="text-2xl font-semibold mb-1">انشاء حساب طالب جديد</h2>
        <p className="text-gray-500 mb-6">عملية الانشاء تبدأ من هنا</p>

        <form onSubmit={handleSubmit(OnSubmit)} className="space-y-4">
          {/* Names */}
          <div className="flex gap-4" dir="rtl">
            <div className="flex-1">
              <label className="block mb-1">الاسم الاول</label>
              <input
                type="text"
                dir="rtl"
                className="InputStyle w-full"
                placeholder="ادخل الاسم الاول"
                {...register("firstname")}
              />
              {errors.firstname && <p className="ErrorMessage">{errors.firstname.message}</p>}
            </div>
            <div className="flex-1">
              <label className="block mb-1">الاسم الاخير</label>
              <input
                type="text"
                dir="rtl"
                className="InputStyle w-full"
                placeholder="ادخل الاسم الاخير"
                {...register("lastname")}
              />
              {errors.lastname && <p className="ErrorMessage">{errors.lastname.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">البريد الالكتروني</label>
            <input
              type="email"
              dir="rtl"
              className="InputStyle w-full"
              placeholder="ادخل بريد الكتروني فعال"
              {...register("email")}
            />
            {errors.email && <p className="ErrorMessage">{errors.email.message}</p>}
          </div>

          {/* National ID */}
          <div>
            <label className="block mb-1">الرقم القومي</label>
            <input
              type="text"
              dir="rtl"
              className="InputStyle w-full"
              placeholder="ادخل الرقم القومي المكون من 14 رقماً"
              {...register("nationalID")}
            />
            {errors.nationalID && <p className="ErrorMessage">{errors.nationalID.message}</p>}
          </div>

          {/* File Upload */}
          <div>
            <label className="block mb-1">صورة البطاقة الشخصية</label>
            <input type="file" className="block w-full" />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1">كلمة المرور</label>
            <input
              type={showPassword ? "text" : "password"}
              dir="rtl"
              className="InputStyle w-full pr-10"
              placeholder="ادخل كلمة المرور الخاصة بك"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute left-3 top-9 text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
            {errors.password && <p className="ErrorMessage">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block mb-1">تأكيد كلمة المرور</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              dir="rtl"
              className="InputStyle w-full pr-10"
              placeholder="تأكيد كلمة المرور"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute left-3 top-9 text-gray-500"
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
            {errors.confirmPassword && <p className="ErrorMessage">{errors.confirmPassword.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full MainColorBG text-white flex items-center justify-center gap-2 rounded-md py-3"
          >
            <FiUserPlus className="text-xl" />
            انشاء حساب
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          لديك حساب بالفعل؟{" "}
          <Link to="/SignIn" className="text-blue-500 font-medium underline">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}
