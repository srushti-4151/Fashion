import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/AuthSlice';
import { NavLink, useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { error } = useSelector((state) => state.auth); 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    dispatch(signup({
      userData: {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        password: data.password,
      }
    }));
    if (Object.keys(errors).length === 0) {
      navigate('/');
    }
  };

  return (
    <div
      className="relative bg-fixed bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2042.15b254f1961ce9aaa67a.jpeg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="py-24 px-4 sm:px-8">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap lg:px-14 sm:px-8 max-w-screen-xl">
          <div className="hidden lg:flex justify-center lg:w-1/2">
            <h1
              className="font-bold text-white tracking-wider leading-relaxed mr-6"
              style={{
                fontSize: "55px",
                letterSpacing: "10px",
                lineHeight: "80px",
              }}
            >
              <span className="drop-shadow-2xl">
                Embrace Fashion's Transformative Power.
              </span>
            </h1>
          </div>

          <div className="shadow-md shadow-white lg:w-1/2 bg-white bg-opacity-50 border border-gray-700 p-6">
            <h3 className="text-2xl font-bold text-center mb-6">Sign up</h3>
            {error && (
                <div className="text-red-700 text-center mb-4">
                  <p>{error}</p>
                </div>
              )}
  
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <div>
                  <label className="font-semibold text-sm text-gray-900">
                    Name <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    {...register("name", { required: "Name is required." })}
                    type="text"
                    className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  {errors.name && (
                    <span className="text-red-600 text-sm">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label className="font-semibold text-sm text-gray-900">
                    Mobile <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    {...register("mobile", {
                      required: "Mobile number is required.",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid mobile number.",
                      },
                    })}
                    type="number"
                    className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  {errors.mobile && (
                    <span className="text-red-600 text-sm">{errors.mobile.message}</span>
                  )}
                </div>

                <div>
                  <label className="font-semibold text-sm text-gray-900">
                    Email Address <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address.",
                      },
                    })}
                    type="text"
                    className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  {errors.email && (
                    <span className="text-red-600 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <label className="font-semibold text-sm text-gray-900">
                    Create Password <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required.",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long.",
                      },
                    })}
                    type="password"
                    className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  {errors.password && (
                    <span className="text-red-600 text-sm">{errors.password.message}</span>
                  )}
                </div>

                <div>
                  <label className="font-semibold text-sm text-gray-900">
                    Confirm Password <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    {...register("confirmPassword", {
                      required: "Confirm Password is required.",
                      validate: (value) =>
                        value === password || "Passwords do not match.",
                    })}
                    type="password"
                    className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-600 text-sm">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-3 mt-4">
                  <button
                    type="submit"
                    className="tracking-widest bg-gray-700 text-white font-bold px-8 py-3 hover:bg-black"
                  >
                    REGISTER
                  </button>
                  <NavLink
                    to="/login"
                    className="text-xs border bg-white text-black border-black py-2 px-4 hover:bg-black hover:text-white"
                  >
                    Already have an account?
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;


// import React from 'react';
// import { useForm } from 'react-hook-form';

// const SigninPage = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },} = useForm();

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <div
//       className="relative bg-fixed bg-no-repeat bg-cover"
//       style={{
//         backgroundImage: `url('https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2042.15b254f1961ce9aaa67a.jpeg')`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="py-24">
//         <div className="container mx-auto flex flex-wrap lg:flex-nowrap px-14 max-w-screen-xl">
//           <div className="hidden lg:flex justify-center lg:w-1/2">
//             <h1
//               className="font-bold text-white tracking-wider leading-relaxed mr-6"
//               style={{
//                 fontSize: "55px",
//                 letterSpacing: "10px",
//                 lineHeight: "80px",
//               }}
//             >
//               <span className="drop-shadow-2xl">
//                 Embrace Fashion's Transformative Power.
//               </span>
//             </h1>
//           </div>

//           <div className="shadow md:shadow-2xl lg:w-1/2 bg-white bg-opacity-50 border border-gray-700 p-6">
//             <h3 className="text-2xl font-bold text-center mb-6">Sign up</h3>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="grid gap-4">
//                 <div>
//                   <label className="font-semibold text-sm text-gray-900">
//                     Name <span className="text-red-600 font-bold">*</span>
//                   </label>
//                   <input
//                     {...register("name", { required: "Name is required." })}
//                     type="text"
//                     className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black" 
//                   />
//                   {errors.name && (
//                     <span className="text-red-600 text-sm">{errors.name.message}</span>
//                   )}
//                 </div>

//                 <div>
//                   <label className="font-semibold text-sm text-gray-900">
//                     Mobile <span className="text-red-600 font-bold">*</span>
//                   </label>
//                   <input
//                     {...register("mobile", {
//                       required: "Mobile number is required.",
//                       pattern: {
//                         value: /^[0-9]{10}$/,
//                         message: "Invalid mobile number.",
//                       },
//                     })}
//                     type="number"
//                     className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
//                   />
//                   {errors.mobile && (
//                     <span className="text-red-600 text-sm">{errors.mobile.message}</span>
//                   )}
//                 </div>

//                 <div>
//                   <label className="font-semibold text-sm text-gray-900">
//                     Email Address <span className="text-red-600 font-bold">*</span>
//                   </label>
//                   <input
//                     {...register("email", {
//                       required: "Email is required.",
//                       pattern: {
//                         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                         message: "Invalid email address.",
//                       },
//                     })}
//                     type="text"
//                     className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black"
//                   />
//                   {errors.email && (
//                     <span className="text-red-600 text-sm">{errors.email.message}</span>
//                   )}
//                 </div>

//                 <div>
//                   <label className="font-semibold text-sm text-gray-900">
//                     Create Password <span className="text-red-600 font-bold">*</span>
//                   </label>
//                   <input
//                     {...register("password", {
//                       required: "Password is required.",
//                       minLength: {
//                         value: 8,
//                         message: "Password must be at least 6 characters long.",
//                       },
//                     })}
//                     type="password"
//                     className="w-full px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-black" 
//                   />
//                   {errors.password && (
//                     <span className="text-red-600 text-sm">{errors.password.message}</span>
//                   )}
//                 </div>

//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-3 mt-4">
//                   <button
//                     type="submit"
//                     className="tracking-widest bg-gray-700 text-white font-bold px-8 py-3 hover:bg-black"
//                   >
//                     REGISTER
//                   </button>
//                   <a
//                     href="/login"
//                     className="text-xs border bg-white text-black border-black py-2 px-4 hover:bg-black hover:text-white"
//                   >
//                     Already have an account?
//                   </a>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SigninPage;


