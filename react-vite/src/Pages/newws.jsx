// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const categories = [
//   "All Categories",
//   "beauty",
//   "fragrances",
//   "furniture",
//   "groceries",
//   "home-decoration",
//   "kitchen-accessories",
//   "laptops",
//   "mens-shirts",
//   "mens-shoes",
//   "mens-watches",
//   "mobile-accessories",
//   "motorcycle",
//   "skin-care",
//   "smartphones",
//   "sports-accessories",
//   "sunglasses",
//   "tablets",
//   "tops",
//   "vehicle",
//   "womens-bags",
//   "womens-dresses",
//   "womens-jewellery",
//   "womens-shoes",
//   "womens-watches",
// ];

// const Products1 = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedCategory, setSelectedCategory] = useState("All Categories");
//   const [searchQuery, setSearchQuery] = useState("");
//   const itemsPerPage = 6;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         let apiUrl = "https://dummyjson.com/products";

//         if (selectedCategory !== "All Categories") {
//           apiUrl = `https://dummyjson.com/products/category/${selectedCategory}`;
//         }

//         // const response = await axios.get(apiUrl);
//         const response = await axios.get('https://dummyjson.com/products', {
//             params: {
//                 limit: 100000000, 
//             },
//         });


//         setProducts(response.data.products);
//         setFilteredProducts(response.data.products);
//       } catch (err) {
//         setError("Failed to fetch products.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [selectedCategory]);

//   useEffect(() => {
//     const filtered = products.filter((product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery, products]);

//   const indexOfLastProduct = currentPage * itemsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

//   const currentProducts = filteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );
//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1);
//     setSearchQuery("");
//   };

//   const pageRange = 5; 
//   const startPage = Math.max(
//     Math.min(currentPage - Math.floor(pageRange / 2), totalPages - pageRange + 1),
//     1
//   );
//   const endPage = Math.min(startPage + pageRange - 1, totalPages);

//   if (error) return <div className="text-center py-10 text-black">{error}</div>;

//   return (
//     <div className="container mx-auto py-10 px-20">
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full lg:w-1/4 px-4 mb-5 lg:mb-0">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:ring-black"
//           />
//           <div className="py-4">
//             <h4 className="text-lg font-bold">Filter By Category</h4>
//             <div className="overflow-y-auto max-h-60 lg:max-h-none scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300">
//               <ul className="space-y-2 mt-4">
//                 {categories.map((category, index) => (
//                   <li
//                     key={index}
//                     onClick={() => handleCategoryChange(category)}
//                     className={`cursor-pointer ${
//                       category === selectedCategory
//                         ? "font-bold text-orange-600"
//                         : "hover:text-orange-600"
//                     }`}
//                   >
//                     {category}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="w-full lg:w-3/4 px-4">
//           {loading ? (
//             <div className="flex justify-center items-center py-10 space-x-2">
//               <div className="dot w-4 h-4 bg-black rounded-full animate-bounce animation-delay-0"></div>
//               <div className="dot w-4 h-4 bg-black rounded-full animate-bounce animation-delay-200"></div>
//               <div className="dot w-4 h-4 bg-black rounded-full animate-bounce animation-delay-400"></div>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {currentProducts.map((product) => (
//                 <Link
//                   to={`/productpage/${product.id}`}
//                   key={product.id}
//                   className="border rounded-lg overflow-hidden block"
//                 >
//                   <div className="relative">
//                     <img
//                       src={product.thumbnail}
//                       alt={product.title}
//                       className="w-full h-50 object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="block text-lg font-semibold text-gray-800">
//                       {product.title}
//                     </h3>
//                     <div className="flex justify-between items-center mt-2">
//                       <div>
//                         <h6 className="text-lg font-bold text-gray-800">
//                           ₹{product.price.toFixed(2)}
//                           <del className="text-gray-400 text-sm ml-2">
//                             ₹{(product.price * 1.1).toFixed(2)}
//                           </del>
//                         </h6>
//                       </div>
//                       <span className="flex items-center text-orange-600">
//                         ★<span className="ml-1 text-sm">{product.rating}</span>
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}

//           {!loading && (
//             <div className="mt-8 flex justify-center">
//               <ul className="flex space-x-2">
//                 <li>
//                   <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={`px-3 py-2 border rounded ${
//                       currentPage === 1
//                         ? "opacity-50"
//                         : "hover:bg-black hover:text-white"
//                     }`}
//                   >
//                     Prev
//                   </button>
//                 </li>
//                 {Array.from({ length: endPage - startPage + 1 }, (_, index) => 
//                   startPage + index).map((page) => (
//                   <li key={page}>
//                     <button
//                       onClick={() => handlePageChange(page)}
//                       className={`px-3 py-2 border rounded ${
//                         page === currentPage
//                           ? "bg-black text-white"
//                           : "hover:bg-black hover:text-white"
//                       }`}
//                     >
//                         {page}
//                       </button>
//                     </li>
//                   )
//                 )}
//                 <li>
//                   <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={`px-3 py-2 border rounded ${
//                       currentPage === totalPages
//                         ? "opacity-50"
//                         : "hover:bg-black hover:text-white"
//                     }`}
//                   >
//                     Next
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products1;
