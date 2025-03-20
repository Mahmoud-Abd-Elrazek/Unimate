import { Link, useNavigate } from "react-router-dom";
import z from 'zod';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [isclosed,setisclosed]=useState(false);
  const RegisterSchema = z.object({
    firstname: z.string().min(1, { message: "ادخل الاسم الاول" }),
    lastname: z.string().min(1, { message: "ادخل الاسم الاخير" }),
    email: z.string().email({ message: "ادخل بريد الكتروني صحيح" }),
    password: z.string().min(8, { message: "يجب أن تكون كلمة المرور أطول من 8 أحرف" }),
  });

  type RegisterT = z.infer<typeof RegisterSchema>;

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterT>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });

  const OnSubmit: SubmitHandler<RegisterT> = (data) => {
    console.log(data);
    navigate('/');
    setisclosed(!isclosed);

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white w-[32rem] max-h-[35rem] overflow-y-auto rounded-lg p-3 relative shadow-lg ">
        <div className="mt-2">
          {/* header */}
          <div className="flex justify-between items-center">
            <button className="text-3xl text-gray-500 hover:text-gray-700" onClick={()=>navigate(-1)}>✖</button>
            <h2 className="text-2xl">انشاء حساب جديد</h2>
          </div>
          {/* form */}
          <div className="mt-5">
            <form onSubmit={handleSubmit(OnSubmit)}>
              {/* First and Last Name */}
              <div className="flex justify-between">
                <div className="flex flex-col text-right">
                  <label htmlFor="lastname" className="text-xl">الاسم الاخير</label><br />
                  <input type="text" id="lastname" required className="InputStyle" {...register("lastname")} />
                  {errors.lastname && <span className="ErrorMessage">{errors.lastname.message}</span>}
                </div>
                <div className="flex flex-col text-right">
                  <label htmlFor="firstname" className="text-xl">الاسم الاول</label><br />
                  <input type="text" id="firstname" required className="InputStyle" {...register("firstname")} />
                  {errors.firstname && <span className="ErrorMessage">{errors.firstname.message}</span>}
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-col text-right mt-3">
                <label htmlFor="email" className="text-xl">البريد الالكترونى</label><br />
                <input type="email" id="email" required className="InputStyle" {...register("email")} />
                {errors.email && <span className="ErrorMessage">{errors.email.message}</span>}
              </div>
              {/* Password */}
              <div className="flex flex-col text-right mt-3">
                <label htmlFor="password" className="text-xl">كلمه المرور</label><br />
                <input type="password" id="password" required className="InputStyle" {...register("password")} />
                {errors.password && <span className="ErrorMessage">{errors.password.message}</span>}
              </div>
              {/* Remember Me & Forgot Password */}
              <div className="flex mx-2 justify-between my-5">
                <Link to='/register' className="text-blue-500 underline">نسيت كلمه المرور؟</Link>
                <p className="text-xl inline">تذكرنى <span><input type="checkbox" className="h-4 w-4 inline" /></span></p>
              </div>
              {/* Submit Button */}
              <button disabled={isSubmitting} type="submit" className="w-full my-1 MainColorBG text-white rounded-3xl py-3 px-6 hover:bg-green-700">
                تسجيل الدخول
              </button>
            </form>
            {/* Already Have an Account */}
            <div className="mt-1 text-center">
              <h3> لديك حساب بالفعل؟ <span><Link to='/SignIn' className="underline text-blue-500">قم بالضغط هنا</Link></span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
