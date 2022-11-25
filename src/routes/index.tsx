import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { TechProviderDashboard } from "../contexts/provedor/TechProviderDashboard";
import { ProtectedRoutes } from "../pages/components/ProtectedRoutes/protectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard/:name/:module"
          element={<TechProviderDashboard />}
        />
      </Route>
    </Routes>
  );
};
