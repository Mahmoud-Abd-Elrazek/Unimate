import { ReactNode } from "react";
import useAuthStore from "../Store/useAuthStore";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
}

function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  if (isAuthenticated && (!user || !allowedRoles.includes(user))) {
    navigate('/unauthorized');
    return null;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
