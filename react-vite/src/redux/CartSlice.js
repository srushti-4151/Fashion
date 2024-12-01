// "slice" is a part of the state with related logic grouped together (e.g., authSlice for user login, cartSlice for shopping cart).
// State:The data you want to keep track of globally (like a user's name, theme, or cart items). Each slice manages a piece of this state.
// Action:A plain object describing what happened. { type: "cart/addItem", payload: { id: 1, name: "Book" } }
// Reducer:A function that tells Redux how to update the state when it receives an action. Example:
// store is the central place where all the global state of your application lives.
// useSelector() to read state.
// useDispatch() to send actions to the store.

// import { createSlice } from '@reduxjs/toolkit';

// const loadCartFromLocalStorage = () => {
//   try {
//     const storedcart = localStorage.getItem('cart');
//     return storedcart ? JSON.parse(storedcart) : [];
//   } catch (error) {
//     console.error("Failed to load cart from localStorage", error);
//     return [];
//   }
// };

// const saveCartToLocalStorage = (cart) => {
//   try {
//     const storedcart = JSON.stringify(cart);
//     localStorage.setItem('cart', storedcart);
//   } catch (error) {
//     console.error("Failed to save cart to localStorage", error);
//   }
// };

// const initialState = {
//   cart: loadCartFromLocalStorage(),
//   productCount: loadCartFromLocalStorage().length,
//   quantity: 0, 
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addCart: (state, action) => {
//       const existingItem = state.cart.find(item => item.id === action.payload.id);

//       if (existingItem) {
//         existingItem.quantity = action.payload.quantity; // Directly update the quantity
//       } else {
//         state.cart.push({ ...action.payload });
//       }

//       state.productCount = state.cart.length;
//       saveCartToLocalStorage(state.cart);
//     },
//     // addCart: (state, action) => {
//     //   const existingItem = state.cart.find(item => item.id === action.payload.id);

//     //   if (existingItem) {
//     //     existingItem.quantity += action.payload.quantity;
//     //   } else {
//     //     state.cart.push({ ...action.payload, quantity: action.payload.quantity });
//     //   }

//     //   state.productCount = state.cart.length;
//     //   saveCartToLocalStorage(state.cart); 
//     // },
//     removeCart: (state, action) => {
//       state.cart = state.cart.filter(item => item.id !== action.payload);
//       state.productCount = state.cart.length;
//       saveCartToLocalStorage(state.cart); 
//     },

//     updateQuantity: (state, action) => {
//       const item = state.cart.find(item => item.id === action.payload.id);
//       if (item) {
//         item.quantity = action.payload.quantity;
//       }
//       state.productCount = state.cart.length;
//       saveCartToLocalStorage(state.cart); 
//     },
//   },
// });

// export const { addCart, removeCart, updateQuantity } = cartSlice.actions;

// export default cartSlice.reducer;




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
      loggedUser.cart = cart; // Update cart in logUser

      const updatedUserData = userData.map((user) => {
        if (user.email === loggedUser.email) {
          user.cart = cart; // Update cart in userData
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
  cart: loadLoggedUser()?.cart || [],  // Make sure cart is set correctly from logUser
  productCount: loadLoggedUser()?.cart?.length || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
    
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + (item.quantity || 1);
      } else {
        state.cart.push({ ...item, quantity: item.quantity || 1 });
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
      saveCartToLocalStorage(state.cart); // Persist the cleared cart
    },
    

    resetCart: (state, action) => {
      // Only reset the cart for the logged-in user, and preserve others
      if (action.payload.cart) {
        state.cart = action.payload.cart;
        state.productCount = state.cart.length;
      } else {
        // Keep the previous cart data if no new cart is provided
        state.productCount = state.cart.length;
      }
      saveCartToLocalStorage(state.cart);
    }
    
  },
});

export const { addCart, removeCart, updateQuantity, resetCart } = cartSlice.actions;
export default cartSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// const loadUserData = () => {
//   try {
//     return JSON.parse(localStorage.getItem("userData")) || [];
//   } catch (error) {
//     console.error("Error loading user data from localStorage:", error);
//     return [];
//   }
// };

// const loadLoggedUser = () => {
//   try {
//     return JSON.parse(localStorage.getItem("logUser")) || null;
//   } catch (error) {
//     console.error("Error loading logged-in user from localStorage:", error);
//     return null;
//   }
// };
// const saveCartToLocalStorage = (cart) => {
//   try {
//     const userData = JSON.parse(localStorage.getItem("userData")) || [];
//     let loggedUser = JSON.parse(localStorage.getItem("logUser"));

//     if (loggedUser) {
//       loggedUser.cart = cart; // Update cart in logUser

//       const updatedUserData = userData.map((user) => {
//         if (user.email === loggedUser.email) {
//           user.cart = cart; // Update cart in userData
//         }
//         return user;
//       });
//       localStorage.setItem("logUser", JSON.stringify(loggedUser));
//       localStorage.setItem("userData", JSON.stringify(updatedUserData));
//     }
//   } catch (error) {
//     console.error("Error saving cart to localStorage:", error);
//   }
// };


// const initialState = {
//   userData: loadUserData(),
//   isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
//   logUser: loadLoggedUser(),
//   cart: loadLoggedUser()?.cart || [],  // Make sure cart is set correctly from logUser
//   productCount: loadLoggedUser()?.cart?.length || 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {

//     addCart: (state, action) => {
//       const item = action.payload;
//       const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
      
//       if (existingItem) {
//         existingItem.quantity = action.payload.quantity;
//       } else {
//         state.cart.push({ ...item, quantity: item.quantity });
//       }
//       state.productCount = state.cart.length;
//       saveCartToLocalStorage(state.cart);
//     },
    
//     removeCart: (state, action) => {
//       state.cart = state.cart.filter((item) => item.id !== action.payload);
//       state.productCount = state.cart.length;
//       saveCartToLocalStorage(state.cart);
//     },

//     updateQuantity: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload.id);
//       if (item) {
//         item.quantity = action.payload.quantity;
//       }
//       state.productCount = state.cart.length;
//       saveCartToLocalStorage(state.cart);
//     },

//     clearCart: (state) => {
//       state.cart = [];
//       state.productCount = 0;
//       // saveCartToLocalStorage(state.cart);
//     },

//     resetCart: (state, action) => {
//       // Only reset the cart for the logged-in user, and preserve others
//       if (action.payload.cart) {
//         state.cart = action.payload.cart;
//         state.productCount = state.cart.length;
//       } else {
//         // Keep the previous cart data if no new cart is provided
//         state.productCount = state.cart.length;
//       }
//       saveCartToLocalStorage(state.cart);
//     }
    
//   },
// });

// export const { addCart, removeCart, updateQuantity, resetCart } = cartSlice.actions;
// export default cartSlice.reducer;
