import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BsJournalText } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { TbPlusMinus } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/AuthSlice";

const Profile = () => {

  const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoggedIn, logUser } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout()); 
        navigate("/login");
    };

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return null; 
    }

  return (
    <div className="py-4 m-auto overflow-hidden font-sans">
      <h1 className="py-4 text-center font-bold lg:text-4xl md:text-2xl">My Account</h1>

      <div className="container mx-auto pt-6 lg:px-5">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full md:w-1/3 lg:w-1/4 px-4 mb-6 md:mb-0">
            <div className="p-4 border border-gray-300 bg-gray-50 text-lg font-semibold">
              <NavLink
                to="/user/dashboard"
                className="flex items-center gap-2 p-3 rounded-md text-black hover:text-black"
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center ${
                        isActive ? "bg-black text-white" : "hover:bg-black hover:text-white"
                      }`}
                    >
                      <BsJournalText className="h-5 w-5" />
                    </div>
                    <span className="text-gray-800">Account Dashboard</span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/user/orders"
                className="flex items-center gap-2 p-3 rounded-md text-black hover:text-black"
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center ${
                        isActive ? "bg-black text-white" : "hover:bg-black hover:text-white"
                      }`}
                    >
                      <IoBagCheckOutline className="h-5 w-5" />
                    </div>
                    <span className="text-gray-800">All Order Details</span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/user/address"
                className="flex items-center gap-2 p-3 rounded-md text-black hover:text-black"
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center ${
                        isActive ? "bg-black text-white" : "hover:bg-black hover:text-white"
                      }`}
                    >
                      <CiLocationOn className="h-6 w-6" />
                    </div>
                    <span className="text-gray-800">Address Book</span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/user/reset-password"
                className="flex items-center gap-2 p-3 rounded-md text-black hover:text-black"
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center ${
                        isActive ? "bg-black text-white" : "hover:bg-black hover:text-white"
                      }`}
                    >
                      <TbPlusMinus className="h-5 w-5" />
                    </div>
                    <span className="text-gray-800">Reset Password</span>
                  </>
                )}
              </NavLink>

              {/* <NavLink
                to=""
                className="flex items-center gap-2 p-3 rounded-md text-black hover:text-black"
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center ${
                        isActive ? "bg-black text-white" : "hover:bg-black hover:text-white"
                      }`}
                    >
                      <RiLogoutBoxLine className="h-5 w-5" />
                    </div>
                    <button onClick={handleLogout} className="text-gray-800">Logout</button>
                  </>
                )}
              </NavLink> */}
              <div
                  className="flex items-center gap-2 p-3 rounded-md text-black hover:text-black cursor-pointer"
                  onClick={handleLogout}
                >
                  <div
                    className={`h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white`}
                  >
                    <RiLogoutBoxLine className="h-5 w-5" />
                  </div>
                  <span className="text-gray-800">Logout</span>
                </div>


            </div>
          </aside>

          <main className="w-full md:w-2/3 lg:w-3/4 px-4">
            <div className="bg-gray-50 border p-6">
              <Outlet /> 
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;





// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/AuthSlice";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // Get user data and logged-in status from Redux store
//     const { isLoggedIn, logUser } = useSelector((state) => state.auth);

//     // Logout handler
//     const handleLogout = () => {
//         dispatch(logout()); // Dispatch logout action
//         navigate("/login");
//         // dispatch(resetCart([])); // Redirect to login page after logout
//     };

//     // If not logged in, redirect to login
//     useEffect(() => {
//         if (!isLoggedIn) {
//             navigate("/login");
//         }
//     }, [isLoggedIn, navigate]);

//     if (!isLoggedIn) {
//         return null; // You could also show a loader or some kind of indication
//     }

//     return (
//         <div>
//             <h2>Welcome to your profile, {logUser?.name || "User"}!</h2>
//             <p>Email: {logUser?.email}</p>
//             <p>Mobile: {logUser?.mobile}</p>
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     );
// };

// export default Profile;
