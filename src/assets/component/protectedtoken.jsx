import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { CookieStorage, CookieKeys } from "../../utils/cookies";
import { toast } from "react-toastify";

export const ProtectedRoute = ({ children }) => {
  const token = CookieStorage.get(CookieKeys.AuthToken);

  useEffect(() => {
    if (!token) {
      toast.warning("Anda harus login");
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
