
import { createSlice } from "@reduxjs/toolkit";

// Load all users from localStorage
const loadUsersFromLocalStorage = () => {
  try {
    const storedUsers = localStorage.getItem("userData");
    return storedUsers ? JSON.parse(storedUsers) : [];
  } catch (error) {
    console.error("Failed to load users from localStorage", error);
    return [];
  }
};

// Load login status and logged-in user data from localStorage
const loadAuthFromLocalStorage = () => {
  try {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const logUser = isLoggedIn ? JSON.parse(localStorage.getItem("logUser")) : null;
    return { isLoggedIn, logUser };
  } catch (error) {
    console.error("Failed to load auth data from localStorage", error);
    return { isLoggedIn: false, logUser: null };
  }
};

const initialState = {
  isLoggedIn: loadAuthFromLocalStorage().isLoggedIn,
  logUser: loadAuthFromLocalStorage().logUser,  
  userData: loadUsersFromLocalStorage(),  
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const foundUser = state.userData.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );

      if (foundUser) {
        state.isLoggedIn = true;
        state.logUser = foundUser;  // Set the logged-in user's data
        state.error = null;

        // Save to localStorage
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
      state.error = null;

      // Remove from localStorage
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("logUser");
    },
    signup: (state, action) => {
      const newUser = action.payload.userData;

      // Add the new user to the users array (userData)
      state.userData.push(newUser);
      localStorage.setItem("userData", JSON.stringify(state.userData));  // Save all users to localStorage

      state.isLoggedIn = true;
      state.logUser = newUser;  // Set the logged-in user
      state.error = null;

      // Save to localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("logUser", JSON.stringify(newUser));  // Save logged-in user data
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
