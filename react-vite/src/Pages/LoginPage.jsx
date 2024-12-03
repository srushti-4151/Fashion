import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/AuthSlice";
import { NavLink, useNavigate } from "react-router-dom";


const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, error } = useSelector((state) => state.auth);
  const { register, 
    handleSubmit, 
    formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(
      login({
        email: data.email,
        password: data.password,
      })
    );
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); 
    }
  }, [isLoggedIn, navigate]);
  
  return (
    <div
      className="m-auto overflow-hidden relative bg-fixed bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2027.571975ce0024591fb6d0.jpeg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="py-24 px-4 sm:px-8">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap px-14 max-w-screen-xl">
          <div className="hidden lg:flex justify-center lg:w-1/2">
            <h1
              className="font-bold text-white tracking-wider leading-relaxed mr-6"
              style={{
                fontSize: "55px",
                letterSpacing: "10px",
                lineHeight: "80px",
              }}
            >
              <span style={{ color: "rgb(13, 202, 204)" }} className="text-info">Welcome </span> 
              To The{" "}
              <span>Amazing</span> 
              {" "}World of{" "}
              <span style={{ color: "rgb(190, 115, 84)" }}>Fashion !</span>
            </h1>
          </div>
          
          <div className="shadow-md shadow-white lg:w-1/2 bg-white bg-opacity-55 border border-gray-700 p-6">
            <h3 className="text-2xl font-bold text-center mb-6">Login</h3>
            {/* Show error message if login fails */}
             {error && (
              <div className="text-red-700 text-center mb-4">
                <p>{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div>
                <label className="font-semibold text-sm text-gray-900">
                  Email Address <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="text"
                  {...register
                    ("email", { required: "Email is required", 
                                pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: "Invalid emailaddress"}
                 })}
                  className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.email && <p className="text-red-800 text-sm pt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="font-semibold text-sm text-gray-900">
                  Password <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="password"
                  {...register
                    ("password", { required: "Password is required", 
                                   minLength: { value: 8, message: "Password must have atleast 8 characters" } 
                })}
                  className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.password && <p className="text-red-800 text-sm pt-1">{errors.password.message}</p>}
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-3 mt-4">
                <button type="submit" className="tracking-widest bg-gray-700 text-white font-bold px-8 py-3 hover:bg-black">
                  LOG IN
                </button>
                <a
                  href="/login"
                  className="text-gray-700 underline text-sm"
                >
                  Forgotten password?
                </a>
              </div>
            </form>
            <div className="text-center">
              <NavLink
                to="/signin"
                className="text-xs border bg-white text-black border-black py-2 px-4 hover:bg-black hover:text-white"
              >
                Create new account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
