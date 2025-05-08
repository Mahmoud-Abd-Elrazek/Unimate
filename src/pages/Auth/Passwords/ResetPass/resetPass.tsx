import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiEye, FiEyeOff } from "react-icons/fi";

const resetPassSchema = z
  .object({
    email: z.string().min(1, "مطلوب").email("ادخل بريد الكتروني صحيح"),
    password: z.string().min(8, "يجب أن تكون كلمة المرور أطول من 8 أحرف"),
    confirmPassword: z.string().min(8, "يجب أن تكون كلمة المرور أطول من 8 أحرف"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "كلمتا المرور غير متطابقتين",
  });

type ResetPassForm = z.infer<typeof resetPassSchema>;

export default function Resetpass() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPassForm>({
    resolver: zodResolver(resetPassSchema),
  });

  const onSubmit = async (data: ResetPassForm) => {
    if (!token) {
      setMessage("الرابط غير صالح أو مفقود.");
      return;
    }

    // Simulate API call
    console.log("Resetting password for:", data.email);
    console.log("New Password:", data.password);
    console.log("Token:", token);

    // await api.resetPassword(token, data.password)

    setMessage("تم تحديث كلمة المرور بنجاح!");
    setTimeout(() => navigate("/SignIn"), 2000);
  };

  return (
    <div className="w-full mx-auto p-4 flex-col min-h-screen bg-gradient-to-br from-red-100 via-white to-green-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-right">
        <h2 className="text-xl font-bold mb-4 text-center">إعادة تعيين كلمة المرور</h2>
        <form onSubmit={handleSubmit(onSubmit)} dir="rtl" className="space-y-3">
          <div>
            <input
              dir="rtl"
              type="email"
              placeholder="ادخل البريد الإلكتروني"
              className="InputStyle w-full"
              {...register("email")}
            />
            {errors.email && <p className="ErrorMessage">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="text-right relative">
            <label htmlFor="password" className="block mb-1 font-medium">
               كلمة المرور الجديدة 
            </label>
            <input
              dir="rtl"
              type={showPassword ? "text" : "password"}
              id="password"
              className="InputStyle w-full pr-10"
              placeholder="كلمة المرور الجديدة"
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

           {/* Password */}
           <div className="text-right relative">
            <label htmlFor="password" className="block mb-1 font-medium">
               تاكيد كلمة المرور
            </label>
            <input
              dir="rtl"
              type={showPassword ? "text" : "password"}
              id="password"
              className="InputStyle w-full pr-10"
              placeholder=" تاكيد كلمة المرور الجديدة "
              {...register("confirmPassword")}

            />
            <button
              type="button"
              className="absolute left-3 top-11 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
            {errors.confirmPassword && <p className="ErrorMessage">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-green-500 text-white p-2 rounded w-full"
          >
            إعادة تعيين
          </button>
        </form>

        {message && <p className="mt-4 text-center text-green-600 font-medium">{message}</p>}
      </div>
    </div>
  );
}
