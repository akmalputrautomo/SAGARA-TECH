import React, { useState } from "react";
import { href, useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulasi login sederhana dengan token
    if (email === "admin@example.com" && password === "admin123") {
      CookieStorage.set(CookieKeys.AuthToken, true);
      window.location.href = "/dashboard";
    } else {
      setError("Email atau password salah");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login Page</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring" required />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring" required />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};
