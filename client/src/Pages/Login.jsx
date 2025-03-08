import React from "react";
import Illustrations from "../Components/Illustrations";
import LoginForm from "../Components/LoginForm";
const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center space-y-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Simplify your workflow and boost your productivity with InkFlow
            </h2>
            <p className="mt-2 text-gray-600">Get started for free.</p>
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <Illustrations />
    </div>
  );
};

export default Login;
