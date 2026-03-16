import axios from "axios";
import React, { useState, useEffect } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [navigated, setNavigated] = useState(false);

  async function checkTokenExpiry() {
    if (window.location.pathname === '/login') {
      setIsLoading(false);
      return;
    }
    if (navigated) {
      setIsLoading(false);
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      setIsLoading(false);
      if (!navigated) {
        setNavigated(true);
        window.location.href = "/login";
      }
      return;
    }
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth-test`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsAuthenticated(true);
    } catch (error) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      if (!navigated) {
        setNavigated(true);
        sessionStorage.setItem('redirected', 'true');
        window.location.href = "/login";
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkTokenExpiry();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{isAuthenticated || window.location.pathname === '/login' ? children : null}</div>;
}
