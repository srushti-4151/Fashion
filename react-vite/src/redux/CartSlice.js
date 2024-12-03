// "slice" is a part of the state with related logic grouped together (e.g., authSlice for user login, cartSlice for shopping cart).
// State:The data you want to keep track of globally (like a user's name, theme, or cart items). Each slice manages a piece of this state.
// Action:A plain object describing what happened. { type: "cart/addItem", payload: { id: 1, name: "Book" } }
// Reducer:A function that tells Redux how to update the state when it receives an action. Example:
// store is the central place where all the global state of your application lives.
// useSelector() to read state.
// useDispatch() to send actions to the store.

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
const saveCartToLocalStorage = (cart) => {
  try {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    let loggedUser = JSON.parse(localStorage.getItem("logUser"));

    if (loggedUser) {
      loggedUser.cart = cart; 

      const updatedUserData = userData.map((user) => {
        if (user.email === loggedUser.email) {
          user.cart = cart; 
        }
        return user;
      });
      localStorage.setItem("logUser", JSON.stringify(loggedUser));
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};


const initialState = {
  userData: loadUserData(),
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  logUser: loadLoggedUser(),
  cart: loadLoggedUser()?.cart || [],  
  productCount: loadLoggedUser()?.cart?.length || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity = action.payload.quantity; 
      } else {
        state.cart.push({ ...action.payload });
      }
       state.productCount = state.cart.length;
       saveCartToLocalStorage(state.cart);
    },
    
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.productCount = state.cart.length;
      saveCartToLocalStorage(state.cart);
    },

    updateQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      state.productCount = state.cart.length;
      saveCartToLocalStorage(state.cart);
    },
    
    clearCart: (state) => {
      state.cart = [];
      state.productCount = 0;
      saveCartToLocalStorage(state.cart); 
    },
    

    // resetCart: (state, action) => {
    //   if (action.payload.cart) {
    //     state.cart = action.payload.cart;
    //     state.productCount = state.cart.length;
    //   } else {
    //     state.productCount = state.cart.length;
    //   }
    //   saveCartToLocalStorage(state.cart);
    // }
    
  },
});

export const { addCart, removeCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

