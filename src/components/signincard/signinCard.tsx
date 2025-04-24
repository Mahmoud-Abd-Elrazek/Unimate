import { zodResolver } from "@hookform/resolvers/zod";
import {  useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import z from "zod"



export default function SignIn() {
    const navigate = useNavigate()
    const [isclosed,setisclosed]=useState(false)

    // handel the form and vaildate it
    const SingInSchema = z.object({
        email: z.string().email({ message: "ادخل بريد الكتروني صحيح" }),
        password: z.string().min(8, { message: "يجب أن تكون كلمة المرور أطول من 8 أحرف" }),
    })
    type SignT = z.infer<typeof SingInSchema>

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        mode: "onChange",
        resolver: zodResolver(SingInSchema),
    })
    const OnSubmit: SubmitHandler<SignT> = (data) => {
        console.log(data)
        navigate('/', { replace: true })
        setisclosed(!isclosed)
    }
    
    return (
        <>
        {<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 Page">
            <div className="bg-white w-[30rem] min-h-[30rem] rounded-lg p-6 relative shadow-lg">
                <div className="">
                    {/* header */}
                    <div className="flex justify-between items-center">
                        <button
                            className=" text-3xl  text-gray-500 hover:text-gray-700"
                            onClick={() => navigate(-1)}
                        >
                            ✖
                        </button>
                        <h2 className=" text-2xl">تسجيل الدخول</h2>
                    </div>
                    {/* form */}
                    <div className="mt-10">
                        <form onSubmit={handleSubmit(OnSubmit)}>
                            <div className="flex flex-col text-right">
                                <label htmlFor="email" className="text-xl">البريد الالكترونى</label><br />
                                <input dir="rtl" type="email" id="email" required className="InputStyle" {...register("email")} />{errors.email && <span className="ErrorMessage">البريد الالكترونى غير صحيح</span>}
                            </div>
                            <div className="flex flex-col text-right mt-3">
                                <label htmlFor="password" className="text-xl">كلمه المرور</label><br />
                                <input dir="rtl" type="password" id="password" required className="InputStyle" {...register("password")} />{errors.password && <span className="ErrorMessage">{errors.password.message}</span>}
                            </div>
                            <div className="flex mx-2 justify-between my-5">
                                <Link to='/register' className="text-blue-500 underline"> نسيت كلمه المرور؟</Link>
                                <p className="text-xl inline">تذكرنى <span><input type="checkbox" className="h-4 w-4 inline" /></span></p>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full  MainColorBG text-white rounded-3xl py-3 px-6 ">تسجيل الدخول</button>
                        </form>
                        {/* don't have an acount */}
                        <div className="mt-4 text-center">
                            <h3>ليس لديك حساب؟ <span><Link to='/register' className="underline MainColorText">قم بالضغط هنا</Link></span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </>
    );
}
