
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
        const { email, mobile } = action.payload.userData;
  
        const isExistingUser = state.userData.some(
          (user) => user.email === email || user.mobile === mobile
        );
      
        if (isExistingUser) {
          state.error = "A user with the same email or mobile number already exists.";
          return;
        }
        const newUser = { 
          ...action.payload.userData, 
          cart: [],
          addresses: [],
          order: [],
        };
      
        state.userData.push(newUser);
        localStorage.setItem("userData", JSON.stringify(state.userData));
      
        state.isLoggedIn = true;
        state.logUser = newUser;
        state.error = null;
      
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
        state.cart = foundUser.cart || [];
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
      state.cart = [];
    
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("logUser", JSON.stringify(null));
    },
    resetPassword: (state, action) => {
      if (!state.logUser) {
        state.error = "No user is logged in.";
        return;
      }
      const { oldPassword, newPassword } = action.payload;

      if (state.logUser.password !== oldPassword) {
        state.error = "Incorrect old password.";
        return;
      }
      const updatedUserData = state.userData.map((user) =>
        user.email === state.logUser.email
          ? { ...user, password: newPassword }
          : user
      );

      state.userData = updatedUserData;
      state.logUser = { ...state.logUser, password: newPassword };
      state.error = null;

      localStorage.setItem("userData", JSON.stringify(state.userData));
      localStorage.setItem("logUser", JSON.stringify(state.logUser));
    },
  },
});

export const { signup, login, logout, resetPassword } = authSlice.actions;
export default authSlice.reducer;





