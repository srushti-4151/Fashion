// this is updated
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const OrderDetails = () => {
//   const orders = useSelector((state) => state.order.order);

//   if (!orders) {
//     return (
//       <div className="container mx-auto px-4 py-2 text-center">
//         <h1 className="text-4xl font-bold text-center mb-6">No Orders Found</h1>
//         <p className="text-lg text-gray-600 mb-4">You have not placed any orders yet.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-2">
//       <h1 className="text-4xl font-bold text-center mb-6">Order History</h1>
//       <div className="overflow-x-auto mb-6">
//         <table className="w-full border-collapse table-auto border border-gray-400">
//           <thead className="bg-gray-50 text-gray-900 text-left border border-gray-400">
//             <tr className="text-sm uppercase">
//               <th className="p-3 text-center border border-gray-400">Status</th>
//               <th className="p-3 border border-gray-400">Products</th>
//               <th className="p-3 border border-gray-400">Address</th>
//               <th className="p-3 text-center border border-gray-400">Total</th>
//               <th className="p-3 text-center border border-gray-400">Date</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700 border border-gray-400">
//             <tr>
//               <td className="p-3 text-center border border-gray-400">{orders.status}</td>
//               <td className="p-3">
//                 {orders.products.map((product, index) => (
//                   <div key={index}>
//                     {product.title} (x{product.quantity}) - ₹{(product.price * product.quantity).toFixed(2)}
//                   </div>
//                 ))}
//               </td>
//               <td className="p-3 border border-gray-400">
//                 {orders.shippingAddress.label}, {orders.shippingAddress.city}, {orders.shippingAddress.state}
//               </td>
//               <td className="p-3 text-center border border-gray-400">₹{orders.grandTotal}</td>
//               <td className="p-3 text-center border border-gray-400">{orders.orderDate}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;

import React from 'react';
import { useSelector } from 'react-redux';

const OrderDetails = () => {
  const orders = useSelector((state) => state.order.order); 


  if (!orders || orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-2 text-center">
        <h1 className="text-4xl font-bold text-center mb-6">No Orders Found</h1>
        <p className="text-lg text-gray-600 mb-4">You have not placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-2">
      <h1 className="text-4xl font-bold text-center mb-6">Order History</h1>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse table-auto border border-gray-400">
          <thead className="bg-gray-50 text-gray-900 text-left border border-gray-400">
            <tr className="text-sm uppercase">
              <th className="p-3 text-center border border-gray-400">Status</th>
              <th className="p-3 border border-gray-400">Products</th>
              <th className="p-3 border border-gray-400">Address</th>
              <th className="p-3 text-center border border-gray-400">Total</th>
              <th className="p-3 text-center border border-gray-400">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 border border-gray-400">
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="p-3 text-center border border-gray-400">{order.status}</td>
                <td className="p-3 border border-gray-400">
                  {order.products.map((product, index) => (
                    <div key={index}>
                      {product.title} (x{product.quantity}) - ₹{(product.price * product.quantity).toFixed(2)}
                    </div>
                  ))}
                </td>
                <td className="p-3 border border-gray-400">
                  {order.shippingAddress?.label}, {order.shippingAddress?.city}, {order.shippingAddress?.state}
                </td>
                <td className="p-3 text-center border border-gray-400">₹{order.grandTotal}</td>
                <td className="p-3 text-center border border-gray-400">{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;



// import React from 'react';
// import { useSelector } from 'react-redux'; 
// import { Link } from 'react-router-dom'; 

// const OrderDetails = () => {
//   const order = useSelector((state) => state.order.order); 

//   if (!order || order.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-2 text-center">
//         <h1 className="text-4xl font-bold text-center mb-6">No Orders Found</h1>
//         <p className="text-lg text-gray-600 mb-4">You have not placed any orders yet.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-2">
//       <h1 className="text-4xl font-bold text-center mb-6">Order History</h1>
//       <div className="overflow-x-auto mb-6">
//         <table className="w-full border-collapse table-auto border border-gray-400">
//           <thead className="bg-gray-50 text-gray-900 text-left border-gray-400">
//             <tr className="text-sm uppercase">
//               <th className="p-3 text-center">Status</th>
//               <th className="p-3">Products</th>
//               <th className="p-3">Address</th>
//               <th className="p-3">Total</th>
//               <th className="p-3">Date / Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {order.map((order) => (
//               <tr key={order.id} className="hover:bg-gray-100">
//                 <td className="border border-gray-400 py-2 px-4 text-center text-lg font-bold">
//                   <Link to={`/proceed`} className="text-warning hover:underline text-yellow-500">
//                     {/* {order.status} */}
//                     Pending
//                   </Link>
//                 </td>
//                 <td className="py-2 px-4 border border-gray-400">
//                   <ul className="m-0">
//                     {order.map((product) => (
//                       <li key={product.id}>
//                         <Link to={`/productpage/${product.id}`} className="text-black text-lg hover:underline">
//                           {product.title}
//                         </Link>
//                         <span className="ps-2">x {product.quantity}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </td>
//                 <td className="py-2 px-4 border border-gray-400">{order.address}</td>
//                 <td className="py-2 px-4 border border-gray-400">₹ {order.total}</td>
//                 <td className="py-2 px-4 border border-gray-400">{order.dateTime}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };




// export default OrderDetails;

