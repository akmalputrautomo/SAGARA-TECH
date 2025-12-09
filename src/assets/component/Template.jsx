import React from "react";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

export const Template = ({ children }) => {
  const navigate = useNavigate();

  // Logout
  const Logout = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    toast.warning("Logout Berhasil");
    setTimeout(() => {
      window.location.href = "/Login";
    }, 2000);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">My Admin</h2>
        <nav className="space-y-2">
          <button onClick={() => navigate("/")} className="block p-2 rounded hover:bg-gray-200 w-full text-left">
            Dashboard
          </button>
          <button onClick={() => navigate("")} className="block p-2 rounded hover:bg-gray-200 w-full text-left">
            User
          </button>
          <button onClick={() => navigate("/reports")} className="block p-2 rounded hover:bg-gray-200 w-full text-left">
            Report
          </button>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};
