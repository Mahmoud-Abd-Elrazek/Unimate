// import { Link,useLocation,Outlet } from "react-router-dom";

// const RegisterPage = () => {
//   const location = useLocation();

//   // Only show buttons if still on /register
//   const showButtons = location.pathname === "/register";

//   return (
//     <div>

//         {showButtons && (
//         <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-green-100 dark:bg-primary_BGD dark:from-primary_BGD dark:via-secondary_BGD dark:to-secondary_BGD flex items-center justify-center px-4">
//       <div className="shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
//         <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-primary_TXD">انشاء حساب </h1>

//           <div className="space-y-4">
//             <Link
//               to="/register/student"
//               className="btn w-full py-3 text-lg font-semibold bg-red-600 text-white rounded-xl hover:bg-red-700 transition duration-200"
//               >
//               طالب
//             </Link>

//             <Link
//               to="/register/owner"
//               className="btn w-full py-3 text-lg font-semibold bg-green-600 text-white rounded-xl hover:bg-green-700 transition duration-200"
//             >
//               صاحب عقار
//             </Link>

//             <p className="text-sm text-gray-500 mt-6 dark:text-secondary_TXD">
//               Choose your role to continue
//             </p>
//           </div>
//           </div>
//           </div>
//         )}

//         {/* Always render outlet */}
//         <div className="">
//         <Outlet />
//         </div>
//       </div>
   
//   );
// };



// export default RegisterPage;
