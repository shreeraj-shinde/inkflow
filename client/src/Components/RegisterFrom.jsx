import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const RegisterFrom = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async ({
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
  }) => {
    if (password != confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        {
          fullname: { firstname, lastname },
          email,
          password,
          confirmPassword,
        }
      );
      console.log(response.data);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <div className="space-y-4">
        <div>
          <input
            {...register("firstname")}
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <input
            {...register("lastname")}
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="email"
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
        <div>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Create Account
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-600">or register with</p>
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
        Already have an account?{" "}
        <Link to="/" className="text-primary hover:text-green-700">
          Login here
        </Link>
      </div>
    </form>
  );
};

export default RegisterFrom;
