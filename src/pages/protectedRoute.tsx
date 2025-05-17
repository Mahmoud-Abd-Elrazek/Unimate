import { ReactNode } from "react";
import useAuthStore from "../Store/Auth/Auth.store";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
}

function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { role, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  if (isAuthenticated && (!role || !allowedRoles.includes(role))) {
    navigate('/unauthorized');
    return null;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
