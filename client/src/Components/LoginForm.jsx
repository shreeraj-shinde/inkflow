import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .optional(),
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });
  const onSubmit = async ({ email, password }) => {
    try {
      await login({ email, password });
      navigate("/user/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <div className="space-y-4">
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div className="text-right">
        <a href="#" className="text-sm text-primary hover:text-green-700">
          Forgot Password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Login
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-600">or continue with</p>
        <div className="mt-4 flex justify-center space-x-4">
          <button
            type="submit"
            className="w-full border-black border text-black gap-1 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-6 h-6"
            />
            <span className="font-semibold">Google</span>
          </button>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600">
        Not a member?{" "}
        <Link to={"/register"} className="text-primary hover:text-green-700">
          Register now
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
