import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useAuthStore from "../../../../Store/Auth/Auth.store";

const resetPassSchema = z
  .object({
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
  const otp = searchParams.get("otp");
  const email = searchParams.get("email");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const resetpassword = useAuthStore((state) => state.resetpassword);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPassForm>({
    resolver: zodResolver(resetPassSchema),
  });

  const onSubmit = async (data: ResetPassForm) => {
    console.log("this is the otp and email"+otp+" and this is the email "+ email);
    // if (!otp || !email) {
    //   setMessage("الرابط غير صالح أو مفقود.");
    //   return;
    // }

    console.log("New Password:", data.password);
    console.log("OTP:", otp);

    // await api.resetPassword(token, data.password)
    if (email && otp) {
      resetpassword(email, otp, data.password, data.confirmPassword);
      setMessage("تم تحديث كلمة المرور بنجاح!");
      setTimeout(() => navigate("/SignIn"), 2000);
    } else {
      setMessage("الرابط غير صالح أو مفقود.");
    }
  };

  useEffect(() => {
  const query = new URLSearchParams(window.location.search);
  console.log("email:", query.get("email"));
  console.log("otp:", query.get("otp"));
}, []);

  return (
    <div className="w-full mx-auto p-4 flex-col min-h-screen bg-gradient-to-br from-red-100 via-white to-green-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-right">
        <h2 className="text-xl font-bold mb-4 text-center">إعادة تعيين كلمة المرور</h2>
        <form onSubmit={handleSubmit(onSubmit)} dir="rtl" className="space-y-3">
          

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
            <label htmlFor="confirmPassword" className="block mb-1 font-medium">
               تاكيد كلمة المرور
            </label>
            <input
              dir="rtl"
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
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
