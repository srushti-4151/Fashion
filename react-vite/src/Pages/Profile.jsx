// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/AuthSlice";

// const Profile = () => {
//     const dispatch = useDispatch();
    
//     // Get user data and logged-in status from Redux store
//     const { userData, isLoggedIn } = useSelector((state) => state.auth);

//     // Logout handler
//     const handleLogout = () => {
//         dispatch(logout()); // Dispatch logout action
//     };

//     // If not logged in, redirect or show a message
//     if (!isLoggedIn) {
//         return (
//             <div>
//                 <h2>You are not logged in. Please log in to view your profile.</h2>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <h2>Welcome to your profile, {userData?.name}!</h2>

//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     );
// };

// export default Profile;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/AuthSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Get user data and logged-in status from Redux store
    const { isLoggedIn, logUser } = useSelector((state) => state.auth);

    // Logout handler
    const handleLogout = () => {
        dispatch(logout()); // Dispatch logout action
        navigate("/login");
        // dispatch(resetCart([])); // Redirect to login page after logout
    };

    // If not logged in, redirect to login
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return null; // You could also show a loader or some kind of indication
    }

    return (
        <div>
            <h2>Welcome to your profile, {logUser?.name || "User"}!</h2>
            <p>Email: {logUser?.email}</p>
            <p>Mobile: {logUser?.mobile}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
