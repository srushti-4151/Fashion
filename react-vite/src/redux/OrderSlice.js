import { createSlice } from "@reduxjs/toolkit";

const loadUserData = () => {
  try {
    return JSON.parse(localStorage.getItem("userData")) || [];
  } catch (error) {
    console.error("Error user data from localStorage:", error);
    return [];
  }
};

const loadLoggedUser = () => {
  try {
    return JSON.parse(localStorage.getItem("logUser")) || null;
  } catch (error) {
    console.error("Error logged-in user from localStorage:", error);
    return null;
  }
};

const saveOrderToLocalStorage = (order) => {
  try {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    let loggedUser = JSON.parse(localStorage.getItem("logUser"));

    if (loggedUser) {
      loggedUser.order = order; 

      const updatedUserData = userData.map((user) => {
        if (user.email === loggedUser.email) {
          user.order = order; 
        }
        return user;
      });

      localStorage.setItem("logUser", JSON.stringify(loggedUser));
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  } catch (error) {
    console.error("Error saving order to localStorage:", error);
  }
};

const initialState = {
  userData: loadUserData(),
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  logUser: loadLoggedUser(),
  order: loadLoggedUser()?.order || [], 
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order.push(action.payload);  
      saveOrderToLocalStorage(state.order);  
    },    

    resetOrder: (state) => {
      state.order = [];
      saveOrderToLocalStorage([]); 
    },
    
    updateOrder: (state, action) => {
      state.order = action.payload;
      saveOrderToLocalStorage(state.order);
    },
   
    removeOrder: (state) => {
      state.order = [];
      saveOrderToLocalStorage([]);
    },
  },
});

export const { setOrder, resetOrder, updateOrder, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
