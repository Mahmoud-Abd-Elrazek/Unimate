import { useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "../../../Store/useAuthStore";
import axios from "axios";

export default function ConfirmEmail() {
  const role = useAuthStore((state) => state.role);
  localStorage.setItem("role", role ?? "");

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const email = queryParams.get("email");
  const otp = queryParams.get("OTP");

  const handleConfirm = () => {
    axios
      .post(
        `https://darkteam.runasp.net/ConfirmEmailEndpoint/ConfirmEmail?email=${email}&OTP=${otp}`
      )
      .then((res) => {
        console.log("Confirmed ✅", res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.error("Confirmation failed ❌", err);
      });
  };

  return (
    <div className="w-full mx-auto p-4 flex-col min-h-screen bg-gradient-to-br from-red-100 via-white to-green-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-right">
        <div>
          <h2 className="text-xl font-bold mb-4 text-center">
            تأكيد البريد الإلكتروني
          </h2>
          <p className="text-gray-600 mb-4">
            يرجى التحقق من بريدك الإلكتروني لتأكيد حسابك.
          </p>

          <button
            onClick={handleConfirm}
            className="mt-4 bg-red-500 text-white p-2 rounded w-full"
          >
            تأكيد البريد والعودة لتسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
}
