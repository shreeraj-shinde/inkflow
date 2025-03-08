import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoutes = ({ children, role }) => {
  const [auth, setAuth] = useState(false);
  const { user, setUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function checkAuth() {
      const isAuth = await isAuthenticated();
      if (!isAuth) {
        setAuth(false);
        return;
      }
      setAuth(true);
    }
    checkAuth();
  }, []);

  return user ? children : <div>Loading...</div>;
};

export default ProtectedRoutes;
