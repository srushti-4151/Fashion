
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
    // signup: (state, action) => {
    //   const { email, password, userData } = action.payload;
    
    //   const existingUser = state.userData.find((user) => user.email === email);
    //   if (existingUser) {
    //     state.error = "Email already in use.";
    //     return; 
    //   }
    
    //   const newUser = { ...userData, email, password, cart: [] };
    //   state.userData.push(newUser);
      
    //   state.isLoggedIn = true;
    //   state.logUser = newUser;
    //   state.error = null;
    
    //   try {
    //     localStorage.setItem("userData", JSON.stringify(state.userData));
    //     localStorage.setItem("isLoggedIn", "true");
    //     localStorage.setItem("logUser", JSON.stringify(newUser));
    //   } catch (error) {
    //     console.error("Error saving to localStorage:", error);
    //     state.error = "An error occurred while saving your data.";
    //   }
    // },
    signup: (state, action) => {
            const newUser = { 
              ...action.payload.userData, 
              cart: [] // Initialize the cart for the user
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
    
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;





