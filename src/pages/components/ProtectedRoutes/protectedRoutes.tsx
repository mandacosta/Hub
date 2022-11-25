import React, { useContext } from "react";
import { Loading } from "../loading/index";
import { AuthContext } from "../../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { loadingAuth, user } = useContext(AuthContext);

  if (loadingAuth) {
    return <Loading loading={`true`} />;
  }
  return user ? <Outlet /> : <Navigate to="/" replace />;
};
