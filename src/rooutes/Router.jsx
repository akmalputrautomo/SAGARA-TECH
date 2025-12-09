import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { ProtectedRoute } from "../assets/component/protectedtoken";
import { Report } from "../pages/dashboard/Report";
import { Template } from "../assets/component/Template";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth */}
        <Route path="/Login" element={<Login />} />

        {/* dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/reports" element={<Report />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </BrowserRouter>
  );
};
