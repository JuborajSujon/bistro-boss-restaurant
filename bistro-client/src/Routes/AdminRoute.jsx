import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

export default function AdminRoute({ children }) {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [user, loading] = useAuth();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}
