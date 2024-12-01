// import { createSlice } from "@reduxjs/toolkit";
// const loadUserData = () => {
//   try {
//     return JSON.parse(localStorage.getItem("userData")) || [];
//   } catch (error) {
//     console.error("Failed to load user data from localStorage", error);
//     return [];
//   }
// };

// const loadLoggedUser = () => {
//   try {
//     return JSON.parse(localStorage.getItem("logUser")) || null;
//   } catch (error) {
//     console.error("Failed to load logged-in user from localStorage", error);
//     return null;
//   }
// };

// const initialState = {
//   userData: loadUserData(),
//   isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
//   logUser: loadLoggedUser(),
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     signup: (state, action) => {
//       const newUser = { 
//         ...action.payload.userData, 
//         cart: [] // Initialize the cart for the user
//       };

//       state.userData.push(newUser);
//       localStorage.setItem("userData", JSON.stringify(state.userData));

//       state.isLoggedIn = true;
//       state.logUser = newUser;
//       state.error = null;

//       localStorage.setItem("isLoggedIn", "true");
//       localStorage.setItem("logUser", JSON.stringify(newUser));
//     },
//     login: (state, action) => {
//       const foundUser = state.userData.find(
//         (user) =>
//           user.email === action.payload.email &&
//           user.password === action.payload.password
//       );

//       if (foundUser) {
//         state.isLoggedIn = true;
//         state.logUser = foundUser; // Includes user-specific cart
//         // state.cart = foundUser.cart || [];
//         state.error = null;

//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("logUser", JSON.stringify(foundUser));
//       } else {
//         state.isLoggedIn = false;
//         state.logUser = null;
//         state.error = "Invalid email or password.";
//       }
//     },
    
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.logUser = null;
//       state.cart = [];
//       console.log("cart", state.cart)
//       // localStorage.removeItem("isLoggedIn");
//       // localStorage.removeItem("logUser");
//       localStorage.setItem("isLoggedIn", "false"); 
//       localStorage.setItem("logUser", JSON.stringify(null));
//     }, 
//   },
// });

// export const { signup, login, logout } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
const loadUserData = () => {
  try {
    return JSON.parse(localStorage.getItem("userData")) || [];
  } catch (error) {
    console.error("Failed to load user data from localStorage", error);
    return [];
  }
};

const loadLoggedUser = () => {
  try {
    return JSON.parse(localStorage.getItem("logUser")) || null;
  } catch (error) {
    console.error("Failed to load logged-in user from localStorage", error);
    return null;
  }
};

const initialState = {
  userData: loadUserData(),
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  logUser: loadLoggedUser(),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const { email, password, userData } = action.payload;
    
      if (!email || !password) {
        state.error = "Email and password are required.";
        return;
      }
    
      const newUser = { ...userData, email, password, cart: [] };
      state.userData.push(newUser);
    
      state.isLoggedIn = true;
      state.logUser = newUser;
      state.error = null;
    
      localStorage.setItem("userData", JSON.stringify(state.userData));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("logUser", JSON.stringify(newUser));
    },
    
    login: (state, action) => {
      const foundUser = state.userData.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
    
      if (foundUser) {
        state.isLoggedIn = true;
        state.logUser = foundUser;
        state.cart = foundUser.cart || []; // Restore the user's cart
        state.error = null;
    
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("logUser", JSON.stringify(foundUser));
      } else {
        state.isLoggedIn = false;
        state.logUser = null;
        state.error = "Invalid email or password.";
      }
    },
    
    logout: (state) => {
      state.isLoggedIn = false;
      state.logUser = null;
      state.cart = []; // Reset the cart when logged out
    
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("logUser", JSON.stringify(null));
    },
    
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;







// import { createSlice } from "@reduxjs/toolkit";

// const loadUsersFromLocalStorage = () => {
//   try {
//     const storedUsers = localStorage.getItem("userData");
//     return storedUsers ? JSON.parse(storedUsers) : [];
//   } catch (error) {
//     console.error("Failed to load users from localStorage", error);
//     return [];
//   }
// };

// const loadAuthFromLocalStorage = () => {
//   try {
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//     const logUser = isLoggedIn ? JSON.parse(localStorage.getItem("logUser")) : null;
//     return { isLoggedIn, logUser };
//   } catch (error) {
//     console.error("Failed to load auth data from localStorage", error);
//     return { isLoggedIn: false, logUser: null };
//   }
// };
 
// const initialState = {
//   isLoggedIn: loadAuthFromLocalStorage().isLoggedIn,
//   logUser: loadAuthFromLocalStorage().logUser,  
//   userData: loadUsersFromLocalStorage(),  
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       const foundUser = state.userData.find(
//         (user) =>
//           user.email === action.payload.email &&
//           user.password === action.payload.password
//       );

//       if (foundUser) {
//         state.isLoggedIn = true;
//         state.logUser = foundUser;  
//         state.error = null;

//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("logUser", JSON.stringify(foundUser));
//       } else {
//         state.isLoggedIn = false;
//         state.logUser = null;
//         state.error = "Invalid email or password.";
//       }
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.logUser = null;
//       state.error = null;

//       localStorage.setItem("isLoggedIn", "false");
//       localStorage.removeItem("logUser");
//     },
//     signup: (state, action) => {
//       const newUser = action.payload.userData;

//       state.userData.push(newUser);
//       localStorage.setItem("userData", JSON.stringify(state.userData));  

//       state.isLoggedIn = true;
//       state.logUser = newUser;  
//       state.error = null;

//       localStorage.setItem("isLoggedIn", "true");
//       localStorage.setItem("logUser", JSON.stringify(newUser));  
//     },
//   },
// });

// export const { login, logout, signup } = authSlice.actions;
// export default authSlice.reducer;





