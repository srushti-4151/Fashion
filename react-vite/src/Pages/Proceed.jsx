// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import { setOrder } from "../redux/OrderSlice";

// const Proceed = () => {
//   const cart = useSelector((state) => state.cart.cart);
//   const addresses = useSelector((state) => state.address.addresses); 
//   const calculateSubtotal = () => {
//     return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   };
//   const shippingCost = 0; 
//   const totalCost = calculateSubtotal() + shippingCost;
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   //address
//   const dispatch = useDispatch();
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   const handleSelectAddress = (address) => {
//     setSelectedAddress(address);
//   }

//   const handleConfirmOrder = () => {
//     if(!selectedAddress){
//        toast.error("Please select address");
//        return;
//     }
//     dispatch(setOrder({
//       cart,
//       address: selectedAddress,
//       totalCost
//     }))
//     //navigate to page
//     toast.success("order placed");
//   }

//   return (
//     <div className="container mx-auto px-4 py-2">
//   {/* Coupon Section */}
//     <div className="w-full pt-14 pb-4">
//         <div className="border border-gray-200 rounded-md">
//           <div className="border-b">
//             <button
//               type="button"
//               onClick={toggleAccordion}
//               aria-expanded={isOpen}
//               className={`w-full flex justify-between items-center px-4 py-3 text-left text-lg font-semibold ${
//                 isOpen ? "bg-gray-100" : ""
//               }`}
//             >
//               <span>Have a Coupon?</span>
//               <span className="hidden md:inline-block text-gray-600 font-bold">
//                 Click here to enter your code
//               </span>
//               <svg
//                 className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${
//                   isOpen ? "rotate-180" : "rotate-0"
//                 }`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//           </div>

//         <div
//           className={`overflow-hidden transition-all duration-300 ${
//             isOpen ? "max-h-[200px] p-4" : "max-h-0"
//           }`}
//         >
//           <div className="flex flex-col space-y-4">
//             <input
//               type="text"
//               placeholder="Coupon Code"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//             />
//             <button className="bg-black w-28 text-white uppercase font-semibold p-2 hover:bg-white hover:text-black">
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>

//   {/* Content Section */}
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     <div className="space-y-6 ">
//       <div>
//         {addresses.map((address) => (
//           <div key={address.id} className="container mx-auto mt-2 py-6 px-4 border border-gray-300 text-lg">
//             <p>{address.label}</p>
//             <p>{address.area}</p>
//             <p>{address.city}, {address.state}, {address.country} - {address.postcode}</p>
//             <div className="flex justify-start gap-4 pt-2">
//               {/* <button
//                 type="button"
//                 // onClick={() => handleEdit(address)}
//                 className="px-4 py-2 text-base border border-black bg-white text-black font-base hover:bg-black hover:text-white w-full md:w-auto"
//               >
//                 SELECT
//               </button> */}
//                <button
//                  type="button"
//                  onClick={() => handleSelectAddress(address)}
//                  className={`px-4 py-2 text-base border ${selectedAddress?.id === address.id ? 'bg-black text-white' : 'bg-white text-black'} font-base hover:bg-black hover:text-white w-full md:w-auto`}
//                 >
//                   {selectedAddress?.id === address.id ? "SELECTED" : "SELECT"}
//                 </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>

//     {/* Right Section (Order Summary) */}
//     <div className="border p-4 mt-2">
//       <h2 className="text-lg font-bold mb-4">Your Order</h2>

//       <div className="space-y-4">
//         {cart.map((item) => (
//           <div key={item.id} className="flex justify-between">
//             <span>
//               {item.title} (x{item.quantity})
//             </span>
//             <span>₹{(item.price * item.quantity).toFixed(2)}</span>
//           </div>
//         ))}
//       </div>

//       <hr className="my-4" />

//       <div className="space-y-2">
//         <div className="flex justify-between">
//           <span>Subtotal</span>
//           <span>₹{calculateSubtotal().toFixed(2)}</span>
//         </div>

//         <div className="flex justify-between">
//           <span>Shipping</span>
//           <span className="text-green-600 font-semibold">
//             {shippingCost === 0 ? "Free Shipping" : `₹${shippingCost}`}
//           </span>
//         </div>

//         <div className="flex justify-between">
//           <span>Coupon Discount</span>
//           <span>Coupon not applied yet!</span>
//         </div>

//         <hr className="my-4" />

//         <div className="flex justify-between font-bold">
//           <span>Total</span>
//           <span>₹{totalCost.toFixed(2)}</span>
//         </div>
//       </div>

//       <button 
//       onClick={handleConfirmOrder}
//       // disabled={!selectedAddress}
//       className="mt-4 w-43 bg-black text-white py-2 px-4 uppercase font-semibold">
//         Order Confirm
//       </button>
//     </div>
//   </div>
// </div>
//   );
// };

// export default Proceed;


//this is updated
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { setOrder } from "../redux/OrderSlice";
import { useState } from "react";
import { clearCart } from "../redux/CartSlice";

const Proceed = () => {
  const cart = useSelector((state) => state.cart.cart);
  const addresses = useSelector((state) => state.address.addresses);
  
  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  
  const shippingCost = 0; 
  const totalCost = calculateSubtotal() + shippingCost;

  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  const handleConfirmOrder = () => {
    if (!selectedAddress) {
      toast.error("Please select address");
      return;
    }

    const order = {
      status: "confirm", 
      products: cart.map(item => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
      shippingAddress: selectedAddress,
      subTotal: calculateSubtotal().toFixed(2),
      shippingCharges: shippingCost,
      grandTotal: totalCost.toFixed(2),
      orderDate: new Date().toLocaleString(),  
    };

    dispatch(setOrder(order));
    //  dispatch(setOrder([order])); 
    dispatch(clearCart());

    toast.success("Order placed successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-2">
      {/* Coupon Section */}
      <div className="w-full pt-14 pb-4">
        <div className="border border-gray-200 rounded-md">
          <div className="border-b">
            <button
              type="button"
              onClick={toggleAccordion}
              aria-expanded={isOpen}
              className={`w-full flex justify-between items-center px-4 py-3 text-left text-lg font-semibold ${isOpen ? "bg-gray-100" : ""}`}
            >
              <span>Have a Coupon?</span>
              <span className="hidden md:inline-block text-gray-600 font-bold">
                Click here to enter your code
              </span>
              <svg className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[200px] p-4" : "max-h-0"}`}>
            <div className="flex flex-col space-y-4">
              <input type="text" placeholder="Coupon Code" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
              <button className="bg-black w-28 text-white uppercase font-semibold p-2 hover:bg-white hover:text-black">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6 ">
          {addresses.map((address) => (
            <div key={address.id} className="container mx-auto mt-2 py-6 px-4 border border-gray-300 text-lg">
              <p>{address.label}</p>
              <p>{address.area}</p>
              <p>{address.city}, {address.state}, {address.country} - {address.postcode}</p>
              <div className="flex justify-start gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => handleSelectAddress(address)}
                  className={`px-4 py-2 text-base border ${selectedAddress?.id === address.id ? 'bg-black text-white' : 'bg-white text-black'} font-base hover:bg-black hover:text-white w-full md:w-auto`}
                >
                  {selectedAddress?.id === address.id ? "SELECTED" : "SELECT"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border p-4 mt-2">
          <h2 className="text-lg font-bold mb-4">Your Order</h2>

          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.title} (x{item.quantity})</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{calculateSubtotal().toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600 font-semibold">
                {shippingCost === 0 ? "Free Shipping" : `₹${shippingCost}`}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Coupon Discount</span>
              <span>Coupon not applied yet!</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{totalCost.toFixed(2)}</span>
            </div>
          </div>

          <button onClick={handleConfirmOrder} className="mt-4 w-43 bg-black text-white py-2 px-4 uppercase font-semibold">
            Order Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proceed;

