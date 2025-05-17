import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../Store/Auth/Auth.store";
import { FiLogOut } from "react-icons/fi";

const LogOut = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/')
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm  dark:bg-gray-800 rounded-xl p-8 shadow-md text-right">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
          تسجيل الخروج
        </h2>

        <div className="space-y-4">
          <button
            onClick={handleLogout}
            className="flex justify-center items-center gap-2 w-full bg-red-600 hover:bg-red-700 transition text-white rounded-md py-3"
          >
            <FiLogOut className="text-xl" />
            تسجيل الخروج
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="flex justify-center items-center gap-2 w-full border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition text-gray-800 dark:text-white rounded-md py-3"
          >
            عدم تسجيل الخروج
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
