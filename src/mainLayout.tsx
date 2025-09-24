// // src/layout/MainLayout.tsx
// import { useEffect } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import useAuthStore from "./Store/Auth/Auth.store";
// import useProfileStore from "./Store/Student/useProfile.store";
// import { useprofileOwnerStore } from "./Store/Owner/useprofileOwner.store";

// const MainLayout = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const updateProfileData = async () => {
//       const role = useAuthStore.getState().role || localStorage.getItem("role");
//       if (role === "Owner") {
//         await useprofileOwnerStore.getState().DisplayUpdatedOwnerInfo();
//       } else if (role === "Student") {
//         await useProfileStore.getState().DisplayUpdatedStudentinfo();
//       }
//     };

//     updateProfileData();
//   }, [location.pathname]);

//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// };

// export default MainLayout;
