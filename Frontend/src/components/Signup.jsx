import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 dark:bg-slate-900">
      <div className="relative bg-white dark:bg-slate-800 dark:text-white p-8 rounded-xl shadow-md w-96">
        <Link
          to="/"
          className="btn btn-l btn-circle btn-ghost absolute right-2 top-2"
        >
          x
        </Link>

        <h3 className="font-bold text-2xl text-center mb-6">Sign Up</h3>

        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700"
              {...register("name", { required: true })}
            />
            <br/>
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700"
              {...register("email", { required: true })} 
            />
            <br/>
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700"
              {...register("password", { required: true })}
            />
            <br/>
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 duration-200"
          >
            Sign Up
          </button>

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <button
              className="underline text-blue-500 cursor-pointer "
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
            <Login />
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
