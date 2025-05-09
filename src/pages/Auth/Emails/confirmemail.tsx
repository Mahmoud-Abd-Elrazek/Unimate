import { useLocation, useNavigate } from "react-router-dom"


export default function ConfirmEmail() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from;

    const Handelchange = () => {
        if (from === "register") {
            navigate("/SignIn", { replace: true });
        } else {
            navigate("/resetpassword", { replace: true });

        }
    }
    return (
        <div className="w-full mx-auto p-4 flex-col min-h-screen bg-gradient-to-br from-red-100 via-white to-green-100 flex items-center justify-center px-4">
            <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-right">
                {from === "register" ?
                    <div>
                        <h2 className="text-xl font-bold mb-4 text-center">تأكيد البريد الإلكتروني</h2>
                        <p className="text-gray-600 mb-4">يرجى التحقق من بريدك الإلكتروني لتأكيد حسابك.</p>
                        <button onClick={Handelchange} className="mt-4 bg-red-500 text-white p-2 rounded w-full">الرجوع ال صفحه تسجيل الدخول</button>
                    </div> :
                    <div>
                        <h2 className="text-xl font-bold mb-4 text-center">إعادة تعيين كلمة المرور</h2>
                        <p className="text-gray-600 mb-4">يرجى التحقق من بريدك الإلكتروني لإعادة تعيين كلمة المرور الخاصة بك.</p>
                        <button onClick={Handelchange} className="mt-4 bg-red-500 text-white p-2 rounded w-full"> إعادة تعيين كلمه المرور</button>
                    </div>
                }
            </div>
        </div>
    )
}
