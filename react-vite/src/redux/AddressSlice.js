import { createSlice } from "@reduxjs/toolkit";

const loadUserData = () => {
  try {
    return JSON.parse(localStorage.getItem("userData")) || [];
  } catch (error) {
    console.error("Error loading user data from localStorage:", error);
    return [];
  }
};

const loadLoggedUser = () => {
  try {
    return JSON.parse(localStorage.getItem("logUser")) || null;
  } catch (error) {
    console.error("Error loading logged-in user from localStorage:", error);
    return null;
  }
};

const saveAddressesToLocalStorage = (addresses) => {
  try {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    let loggedUser = JSON.parse(localStorage.getItem("logUser"));

    if (loggedUser) {
      loggedUser.addresses = addresses;

      const updatedUserData = userData.map((user) => {
        if (user.email === loggedUser.email) {
          user.addresses = addresses;
        }
        return user;
      });

      localStorage.setItem("logUser", JSON.stringify(loggedUser));
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  } catch (error) {
    console.error("Error saving addresses to localStorage:", error);
  }
};

const initialState = {
  userData: loadUserData(),
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  logUser: loadLoggedUser(),
  addresses: loadLoggedUser()?.addresses || [], 
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
      console.log("added addresses:", state.addresses); 
      saveAddressesToLocalStorage(state.addresses); 
    },
    updateAddress: (state, action) => {
      // const { id, updatedAddress } = action.payload;
      // const index = state.addresses.findIndex((address) => address.id === id);

      const updatedAddress = action.payload; // Directly get the updated address
      const index = state.addresses.findIndex((address) => address.id === updatedAddress.id);
      
      if (index !== -1) {
        state.addresses[index] = { ...state.addresses[index], ...updatedAddress };
        saveAddressesToLocalStorage(state.addresses); 
      }
    },
    
    deleteAddress: (state, action) => {
      const { id } = action.payload;
      state.addresses = state.addresses.filter((address) => address.id !== id);
      saveAddressesToLocalStorage(state.addresses); 
    },
  },
});

export const { addAddress, updateAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
