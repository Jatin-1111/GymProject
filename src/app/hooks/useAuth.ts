import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import apiService from "../services/apiService";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Check if we have tokens
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      // Try to get user profile to verify token is valid
      const userProfile = await apiService.getUserProfile();
      setUser(userProfile);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Auth check failed:", error);
      // Clear invalid tokens
      apiService.clearTokens();
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsAuthenticated(false);
      setUser(null);
      router.push("/");
    }
  };

  const redirectIfNotAuthenticated = () => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  };

  return {
    isAuthenticated,
    isLoading,
    user,
    logout,
    checkAuthStatus,
    redirectIfNotAuthenticated,
  };
}
