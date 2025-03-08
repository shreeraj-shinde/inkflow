import React from "react";

const Illustrations = () => {
  return (
    <div className="hidden md:flex md:w-1/2 bg-green-50 items-center justify-center p-8">
      <div className="text-center">
        <div className="relative">
          <img
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-icons/main/svg/bolt.svg"
            alt="Illustration"
            className="w-64 h-64"
          />
          <div className="absolute top-0 right-0">
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-8">
          Make your work easier and organized with InkFlow
        </h2>
      </div>
    </div>
  );
};

export default Illustrations;
