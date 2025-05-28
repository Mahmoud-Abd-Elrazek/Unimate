import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../../public/animations.css";
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import useAuthStore from '../../../Store/Auth/Auth.store';

const passwordSchema = z.object({
  oldPassword: z.string()
    .min(8, { message: "يجب أن تكون كلمة المرور أطول من 8 أحرف" })
    .regex(/[A-Z]/, { message: "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل" })
    .regex(/[a-z]/, { message: "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل" })
    .regex(/[^a-zA-Z0-9]/, { message: "يجب أن تحتوي كلمة المرور على رمز خاص واحد على الأقل" }),
  newPassword: z.string()
    .min(8, { message: "يجب أن تكون كلمة المرور أطول من 8 أحرف" })
    .regex(/[A-Z]/, { message: "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل" })
    .regex(/[a-z]/, { message: "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل" })
    .regex(/[^a-zA-Z0-9]/, { message: "يجب أن تحتوي كلمة المرور على رمز خاص واحد على الأقل" }),
  confirmPassword: z.string()
    .min(8, { message: "يجب أن تكون كلمة المرور أطول من 8 أحرف" })
    .regex(/[A-Z]/, { message: "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل" })
    .regex(/[a-z]/, { message: "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل" })
    .regex(/[^a-zA-Z0-9]/, { message: "يجب أن تحتوي كلمة المرور على رمز خاص واحد على الأقل" }),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "كلمة المرور الجديدة وتأكيدها غير متطابقتين",
  path: ["confirmPassword"],
});

type PasswordFormData = z.infer<typeof passwordSchema>;

export default function AccountSettings() {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const Role = useAuthStore((state) => state.role);

  const changePassword = useAuthStore((state) => state.changePassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    mode: "onChange",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: PasswordFormData) => {
    console.log(data);
    changePassword(data.oldPassword, data.newPassword, data.confirmPassword);
  };

  return (
    <div dir="rtl" className="mx-auto p-6 fade-in">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-g text-center sm:text-right w-full sm:w-auto font-semibold bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg border-r-4 border-red-500">
            تعديل معلومات تسجيل الدخول
          </h2>
          <button
            className="flex items-center gap-2 bg-[#4F4F4F] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => formRef.current?.requestSubmit()}
          >
            <svg className="w-5 h-5 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            <span className="text-sm">حفظ التعديلات</span>
          </button>
        </div>

        {/* Form */}
        <div className="rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">الإيميل</label>
                <input
                  disabled
                  type="email"
                  defaultValue="mahmoudzanitty@gmail.com"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-400"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">الرقم القومي</label>
                <input
                  disabled
                  type="text"
                  inputMode="numeric"
                  maxLength={14}
                  defaultValue="12345678901234"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Password Form */}
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="my-5 space-y-4">
            <h1 className="text-lg font-extrabold my-2">تغيير كلمة المرور</h1>

            <div className="text-right relative w-[250px]">
              <label htmlFor="oldPassword" className="block mb-1 font-medium">كلمة المرور القديمة</label>
              <input
                dir="rtl"
                type={showOld ? "text" : "password"}
                id="oldPassword"
                className="InputStyle w-full pr-10"
                placeholder="كلمة المرور القديمة"
                {...register("oldPassword")}
              />
              <button
                type="button"
                className="absolute left-3 top-11 text-gray-500"
                onClick={() => setShowOld((prev) => !prev)}
              >
                {showOld ? <FiEyeOff /> : <FiEye />}
              </button>
              {errors.oldPassword && <p className="ErrorMessage">{errors.oldPassword.message}</p>}
            </div>

            <div className="text-right relative w-[250px]">
              <label htmlFor="newPassword" className="block mb-1 font-medium">كلمة المرور الجديدة</label>
              <input
                dir="rtl"
                type={showNew ? "text" : "password"}
                id="newPassword"
                className="InputStyle w-full pr-10"
                placeholder="كلمة المرور الجديدة"
                {...register("newPassword")}
              />
              <button
                type="button"
                className="absolute left-3 top-11 text-gray-500"
                onClick={() => setShowNew((prev) => !prev)}
              >
                {showNew ? <FiEyeOff /> : <FiEye />}
              </button>
              {errors.newPassword && <p className="ErrorMessage">{errors.newPassword.message}</p>}
            </div>

            <div className="text-right relative w-[250px]">
              <label htmlFor="confirmPassword" className="block mb-1 font-medium">تأكيد كلمة المرور</label>
              <input
                dir="rtl"
                type={showConfirm ? "text" : "password"}
                id="confirmPassword"
                className="InputStyle pr-10"
                placeholder="تأكيد كلمة المرور"
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="absolute left-3 top-11 text-gray-500"
                onClick={() => setShowConfirm((prev) => !prev)}
              >
                {showConfirm ? <FiEyeOff /> : <FiEye />}
              </button>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
            </div>
          </form>

          {/* Back Button */}
         <div className="my-6 flex justify-end">
          {Role === "Owner" ? (
            <Link to="/auther/ownerprofile">
              <button className="flex items-center gap-2 bg-[#4F4F4F] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>الرجوع إلى الصفحه الرئيسة</span>
              </button>
            </Link>):
            (
              <Link to="/auther/studentprofile">
              <button className="flex items-center gap-2 bg-[#4F4F4F] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>الرجوع إلى الصفحه الرئيسة</span>
              </button>
            </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
