import React from "react";
import { useAuth } from "../context/AuthProvider";
const UserHome = () => {
  const { user } = useAuth();
  return <div>User {user.fullname.firstname}</div>;
};

export default UserHome;
