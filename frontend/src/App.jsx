import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LoadingScreen from "./pages/loadpage/LoadingScreen";
import { Header, Footer } from "./components/index";
import env from "./env/env";

function App() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");

  // ✅ Function to Login & Get Token
  const login = async () => {
    try {
      const response = await fetch(`${env.backendUrl}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "Lokesh" }),
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem("authToken", data.token); // ✅ Save token
        setToken(data.token);
        console.log("Login Successful:", data);
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  // ✅ Function to Fetch Protected Data
  const fetchProtectedData = async () => {
    try {
      const response = await fetch(`${env.backendUrl}/api/protected`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ Send JWT Token
        },
      });

      if (response.status === 401 || response.status === 403) {
        console.warn("Unauthorized! Please login again.");
        return;
      }

      const data = await response.json();
      console.log("Protected Data:", data);
    } catch (error) {
      console.error("Error fetching protected data:", error);
    }
  };

  useEffect(() => {
    fetchProtectedData();
  }, [token]); // 🔄 Refetch when token changes

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <div className="w-full">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
