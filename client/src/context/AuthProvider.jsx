import axios from "axios";
import React, { useContext, useMemo } from "react";
import { createContext, useState, useEffect } from "react";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function
  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      setUser(response.data.user);

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await axios.post("/api/auth/logout", {}, { withCredentials: true });
      setUser(null); // Clear the user state
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  const isAuthenticated = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/user/profile",
        {
          withCredentials: true,
        }
      );
      setUser(response.data);
    } catch (error) {
      console.error("Authentication failed:", error);
      throw error;
    }
  };
  const value = useMemo(
    () => ({ user, logout, login, setUser, isAuthenticated }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
