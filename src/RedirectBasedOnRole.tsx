import { Navigate } from "react-router-dom";
import useAuthStore from "./Store/Auth/Auth.store";
import { useEffect, useState } from "react";

const RedirectBasedOnRole = () => {
  const role = useAuthStore((state) => state.role);
  const [resolvedRole, setResolvedRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = role || localStorage.getItem("role");
    setResolvedRole(storedRole);
  }, [role]);

  if (!resolvedRole) return null;

  if (resolvedRole === "Student") {
    return <Navigate to="studentprofile" replace />;
  } else if (resolvedRole === "Owner") {
    return <Navigate to="ownerprofile" replace />;
  } else {
    return <div>نوع المستخدم غير معروف ❌</div>;
  }
};

export default RedirectBasedOnRole;
