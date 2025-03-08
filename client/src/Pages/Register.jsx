import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Illustrations from "../Components/Illustrations";
import RegisterFrom from "../Components/RegisterFrom";
const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Illustration */}
      <Illustrations />

      {/* Right Side - Register Form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-gray-600">
              Join us and start your journey.
            </p>
          </div>

          <RegisterFrom />
        </div>
      </div>
    </div>
  );
};

export default Register;
