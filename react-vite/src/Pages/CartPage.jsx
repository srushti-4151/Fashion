import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart, updateQuantity } from "../redux/CartSlice";
import { FaInfoCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const { isLoggedIn,logUser  } = useSelector((state) => state.auth); 
  
  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to remove this product from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeCart(id));
        Swal.fire("Removed!", "The product has been removed.", "success");
      }
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const shippingCost = 0; 
  const totalCost = calculateSubtotal() + shippingCost;
  
  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-center mb-6">Please Login</h1>
        <p className="text-lg text-gray-600 mb-4">
          log in for add to cart
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty!</p>
      ) : (
        <>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse hidden md:table">
              <thead className="bg-gray-200 text-gray-900 text-left">
                <tr className="text-sm uppercase">
                  <th className="p-3"></th>
                  <th className="p-3"></th>
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3 text-center">Quantity</th>
                  <th className="p-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-100 text-center md:text-left"
                  >
                    <td className="p-3">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </td>
                    <td className="p-3">
                    <Link to={`/productpage/${item.id}`}>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded"
                        />
                      </Link>
                    </td>
                    <td className="p-3">
                      <a
                        href={`/productpage/${item.id}`}
                        className="text-black"
                      >
                        {item.title}
                      </a>
                    </td>
                    <td className="p-3">₹{item.price.toFixed(2)}</td>
                    <td className="p-3">
                        <div className="flex items-center justify-center">
                          <input
                            type="text"
                            value={item.quantity}
                            readOnly
                            className="w-14 h-14 text-center border py-2"
                          />
                          <div className="flex flex-col items-center">
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity + 1)
                              }
                              className="h-7 w-7 flex items-center justify-center border hover:bg-black hover:text-white"
                            >
                              <BsCaretUp />
                            </button>
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity - 1)
                              }
                              className="h-7 w-7 flex items-center justify-center border hover:bg-black hover:text-white"
                            >
                              <BsCaretDown />
                            </button>
                          </div>
                        </div>
                    </td>
                    <td className="p-3 font-bold">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            
            {/* Mobile View */}
              <div className="md:hidden">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center text-center border border-black p-4 mb-4 space-y-4"
                  >
                    {/* Product Image */}
                    <div>
                    <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-red-800"
                      >
                        Remove
                      </button>
                      <Link to={`/productpage/${item.id}`}>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded"
                        />
                      </Link>
                    </div>

                    <div className="text-lg font-semibold">{item.title}</div>

                    <div className="text-gray-600">₹{item.price.toFixed(2)}</div>

                    <div className="flex items-center justify-center gap-4">
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="w-16 h-12 text-center border py-2 rounded"
                      />
                      <div className="flex flex-col items-center">
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="h-7 w-7 flex items-center justify-center border rounded hover:bg-black hover:text-white"
                        >
                          <BsCaretUp />
                        </button>
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                          className="h-7 w-7 flex items-center justify-center border rounded hover:bg-black hover:text-white"
                        >
                          <BsCaretDown />
                        </button>
                      </div>
                    </div>

                  <div className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>    

          </div>

          <div className="py-5 space-y-6 lg:px-72">
          
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold uppercase">Subtotal</h4>
              <span className="text-gray-800 font-medium">₹{calculateSubtotal().toFixed(2)}</span>
            </div>

           
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold uppercase">Shipping</h4>
              <div className="flex items-center space-x-2">
                {/* <span className="text-gray-800 font-medium">+ ₹{shippingCost.toFixed(2)}</span> */}
                <span className="text-gray-800 font-medium">free shipping</span>
                <FaInfoCircle className="text-gray-500 cursor-pointer hover:text-gray-700" title="Shipping details" />
              </div>
            </div>

           
            <div className="flex justify-between items-center border-t pt-4">
              <h4 className="text-lg font-bold uppercase">Total</h4>
              <span className="text-gray-800 font-semibold text-xl">₹{totalCost.toFixed(2)}</span>
            </div>

           
            {/* <div className="flex justify-center md:justify-end">
              <button className="px-6 py-3 bg-gray-800 text-white uppercase font-bold rounded-md hover:bg-gray-700 transition-all duration-200">
                Proceed to Checkout
              </button>
            </div> */}
            <div className="flex justify-center md:justify-end">
              <NavLink
                to="/proceed" 
                className="px-6 py-3 bg-gray-800 text-white uppercase font-bold rounded-md hover:bg-gray-700 transition-all duration-200"
              >
                Proceed to Checkout
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
