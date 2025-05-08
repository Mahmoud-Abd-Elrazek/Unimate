import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useState } from "react";
import { FiEye, FiEyeOff, FiUserPlus } from "react-icons/fi";
// import useAuthStore from "../../../Store/useAuthStore";

const RegisterOwnerPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // let Role= useAuthStore((state) => state.role);
    // const  registerowner = useAuthStore((state) => state.registerOwner);
  const SignInSchema = z.object({
    username: z.string().min(1, { message: "ادخل اسم المستخدم" }),
    
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

  const OnSubmit: SubmitHandler<SignT> = (data) => {
    
    console.log({ ...data });
    // registerowner(data.username,data.email, data.password);
    navigate("/", { replace: true });
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-xl p-8 shadow-md text-right">
        <h2 className="text-2xl font-semibold mb-2">تسجيل الدخول</h2>

        
        <form onSubmit={handleSubmit(OnSubmit)} className="space-y-4">
             {/* username */}
          <div>
            <label className="block mb-1">اسم المستخدم</label>
            <input
              type="text"
              dir="rtl"
              className="InputStyle w-full"
              placeholder="ادخل اسم المستخدم"
              {...register("username")}
            />
            {errors.username && <p className="ErrorMessage">{errors.username.message}</p>}
          </div>
          {/* Email */}
          <div className="text-right">
            <label htmlFor="email" className="block mb-1 font-medium">
              البريد الالكترونى
            </label>
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

          {/* Password */}
          <div className="text-right relative">
            <label htmlFor="password" className="block mb-1 font-medium">
              كلمة المرور
            </label>
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

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <p className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              تذكرني
            </p>
            <Link to="/forgetpassword" className="text-blue-500 underline">
              نسيت كلمة المرور؟
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex justify-center items-center gap-2 w-full MainColorBG text-white rounded-md py-3 mt-2"
          >
           <FiUserPlus className="text-xl" />
            انشاء حساب جديد 
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
        لديك حساب ب الفعل؟
          <Link to="/SignIn" className="text-blue-500 font-medium underline">
            سجل الآن
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterOwnerPage;
