import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, updateQuantity } from "../redux/CartSlice";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";


const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div className="container mx-auto px-5 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty!</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-gray-100 rounded-lg shadow-md p-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  Price: ₹{item.price.toFixed(2)}
                </p>
                <p className="text-gray-600">
                  Quantity: <strong>{item.quantity}</strong>
                </p>
                <p className="text-gray-800 font-semibold">
                  Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-700"
                >
                  <FaPlus/>
                </button>
                <button
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-700"
                >
                  <FiMinus/>
                </button>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;



// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeCart, updateQuantity } from '../redux/CartSlice';

// const CartPage = () => {
//   const cart = useSelector(state => state.cart.cart);
//   const dispatch = useDispatch();

//   const handleRemove = (id) => {
//     dispatch(removeCart(id));
//   };

//   const handleUpdateQuantity = (id, quantity) => {
//     dispatch(updateQuantity({ id, quantity }));
//   };

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         cart.map(item => (
//           <div key={item.id}>
//             <h3>{item.title}</h3>
//             <p>
//               ₹{item.price} x {item.quantity}
//             </p>
//             <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
//             <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default CartPage;
