import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<h1>register</h1>} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
