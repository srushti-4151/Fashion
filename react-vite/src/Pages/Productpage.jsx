import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BsCaretUp, BsCaretDown  } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/CartSlice";

const ProductPage = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addCart({...product, quantity}));
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (loading) return (
    <div className="text-center py-10">
      <div className="flex justify-center items-center space-x-2">
        <div className="dot w-4 h-4 bg-black rounded-full animate-bounce animation-delay-0"></div>
        <div className="dot w-4 h-4 bg-black rounded-full animate-bounce animation-delay-200"></div>
        <div className="dot w-4 h-4 bg-black rounded-full animate-bounce animation-delay-400"></div>
      </div>
    </div>
  );

  if (error) return <div className="text-center py-10 text-black">{error}</div>;

  return (
    <div className="container mx-auto px-7 py-7">
      <div className="flex flex-col lg:flex-row">
        
        <div className="lg:w-1/2">
          <div className="thumbimage mb-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="imagelist flex gap-4 mt-14">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index}`}
                className="w-20 h-20 object-cover border rounded-lg cursor-pointer hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-5xl font-medium font-sans break-word pr-4">{product.title}</h1>
          <h3 className="text-3xl font-semibold py-3 text-gray-800">
            ₹{product.price.toFixed(2)}{" "}
            <del className="text-gray-500 text-lg">₹{(product.price * 1.1).toFixed(2)}</del> 
          </h3>
          {/* ₹{(product.price * 1.1).toFixed(2)} */}
          <div className="flex items-center gap-2 py-2">
            <div className="text-orange-700 text-2xl">★★★★★</div>
            <span className="text-gray-500 text-lg">{product.rating} out of 5</span>
          </div>
          <p className="text-gray-600 py-1 pr-7">{product.description}</p>

          <h4 className="font-bold text-lg">Colors:</h4>
          <div className="containColor flex gap-4 py-2">
            {product.images.map((colorImage, index) => (
              <img
                key={index}
                src={colorImage}
                alt={`Color ${index}`}
                className="w-32 h-36 object-cover border border-gray-300 rounded-md cursor-pointer hover:border-black"
              />
            ))}
          </div>

          {/* <div className="flex items-center gap-6 py-4">
            <div className="flex items-center">
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border"
              />
              <button
                onClick={increaseQuantity}
                className="px-3 py-2 border rounded hover:bg-gray-200"
              >
                +
              </button>
              <button
                onClick={decreaseQuantity}
                className="px-3 py-2 border rounded hover:bg-gray-200"
              >
                -
              </button>
            </div>
            <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800">
              Add to Cart
            </button>
          </div> */}
          <div className="py-4">
            <div className="flex items-center">
                <div>
                <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-16 h-14 text-center border py-2"
                />
                </div>
                <div className="flex flex-col items-center">
                <button
                    onClick={increaseQuantity}
                    className="h-7 px-1 py-1 border hover:bg-black hover:text-white"
                >
                    <BsCaretUp/>
                </button>
                <button
                    onClick={decreaseQuantity}
                    className="h-7 px-1 py-1 border hover:bg-black hover:text-white"
                >
                    <BsCaretDown />
                </button>
                </div>
                <button
                onClick={handleAddToCart}
                type="button"
                className="btn w-48 text-base h-14 px-5 ms-3 addtobtn bg-gray-800 text-white py-2 hover:bg-black"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >
                Add to Cart
                </button>
            </div>
            </div>


          <div className="py-2">
            <button className="text-gray-600 flex items-center gap-1 hover:text-orange-700">
                <CiHeart className="h-5 w-5"/> Add to wishlist
            </button>
          </div>

          <div className="py-4 pl-4">
            <div className="text-gray-700 font-light">
              <p>
                <strong>SKU :</strong> {product.id}
              </p>
              <p className="inline-block">
                <strong>Category :</strong> 
              </p>
              <p className="inline-block text-sm px-1 text-gray-600">
                {product.category}
              </p>
              <p></p>
              <p className="inline-block">
                <strong>Brands :</strong> 
              </p>
              <p className="inline-block text-sm px-1 text-gray-600">
                {product.brand}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pt-10 px-7">
        <hr className="text-gray-700 border"/>
        <div className="flex justify-center gap-10 font-semibold text-lg py-6">
          <button className="text-black">Description</button>
          <button className="text-gray-700 hover:text-black">Reviews (3)</button>
        </div>
        <hr className="text-gray-700 border"/>
        <p className="text-gray-600 pt-10">{product.description}</p>
      </div> */}
      <div className="pt-10 px-7">
        <hr className="text-gray-700 border" />
        <div className="flex justify-center gap-10 font-semibold text-lg py-6">
          <button
            className={`${
              activeTab === "description" ? "text-black" : "text-gray-700"
            } hover:text-black`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`${
              activeTab === "reviews" ? "text-black" : "text-gray-700"
            } hover:text-black`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({product.reviews.length})
          </button>
        </div>
        <hr className="text-gray-700 border" />

        {/* Conditional Rendering */}
        <div className="pt-10">
          {activeTab === "description" ? (
            <div>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ) : (
            <div>
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center border-b border-gray-300 mb-4 pb-4"
                >
                  <div className="bg-gray-900 text-white px-4 py-3 font-bold w-14 h-20 flex items-center justify-center">
                    {review.reviewerName[0]}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{review.reviewerName}</span>
                      <div className="flex gap-1 text-orange-700 text-2xl">
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      {/* {new Date(review.date).toDateString()} */}
                      {new Date(review.date).toISOString().split("T")[0]}
                    </p>
                    <p className="text-gray-700 mt-2">{review.comment}</p>
                  </div>
                </div>
              ))}
              <h4 className="py-4 text-center text-gray-500 font-semibold">
                You have to buy this product to leave a review!
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const ProductPage = () => {
//   const { id } = useParams(); 
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`https://dummyjson.com/products/${id}`);
//         setProduct(response.data);
//       } catch (err) {
//         setError("Failed to fetch product.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const increaseQuantity = () => setQuantity((prev) => prev + 1);
//   const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   if (loading) return <div className="text-center py-10">Loading...</div>;
//   if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto px-6 py-10">
//       <div className="flex flex-col lg:flex-row gap-10">
        
//         <div className="lg:w-1/2">
//           <div className="thumbimage mb-4">
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               className="w-full h-96 object-contain"
//             />
//           </div>
//           <div className="imagelist flex gap-4">
//             {product.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Product ${index}`}
//                 className="w-20 h-20 object-cover border rounded-lg cursor-pointer hover:scale-105 transition-transform"
//               />
//             ))}
//           </div>
//         </div>

//         <div className="lg:w-1/2">
//           <h1 className="text-3xl font-bold">{product.title}</h1>
//           <h3 className="text-2xl font-bold py-3 text-gray-800">
//             ₹{product.price.toFixed(2)}{" "}
//             <del className="text-gray-500 text-lg">₹{(product.price * 1.1).toFixed(2)}</del>
//           </h3>
//           <div className="flex items-center gap-2 py-2">
//             <div className="text-yellow-500">★ ★ ★ ★ ★</div>
//             <span className="text-gray-500">{product.rating} out of 5</span>
//           </div>
//           <p className="text-gray-600 py-4">{product.description}</p>

          
//           <h4 className="font-bold text-lg">Colors:</h4>
//           <div className="containColor flex gap-4 py-3">
//             {product.images.map((colorImage, index) => (
//               <img
//                 key={index}
//                 src={colorImage}
//                 alt={`Color ${index}`}
//                 className="w-12 h-12 object-cover border rounded-md cursor-pointer hover:border-black"
//               />
//             ))}
//           </div>

//           <div className="flex items-center gap-6 py-4">
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={decreaseQuantity}
//                 className="px-3 py-2 border rounded hover:bg-gray-200"
//               >
//                 -
//               </button>
//               <input
//                 type="text"
//                 value={quantity}
//                 readOnly
//                 className="w-12 text-center border"
//               />
//               <button
//                 onClick={increaseQuantity}
//                 className="px-3 py-2 border rounded hover:bg-gray-200"
//               >
//                 +
//               </button>
//             </div>
//             <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800">
//               Add to Cart
//             </button>
//           </div>

//           <div className="py-2">
//             <button className="text-gray-600 flex items-center gap-2 hover:text-red-500">
//               ♥ Add to wishlist
//             </button>
//           </div>

//           <div className="py-4">
//             <div className="text-gray-500">
//               <p>
//                 <strong>SKU:</strong> {product.id}
//               </p>
//               <p>
//                 <strong>Category:</strong> {product.category}
//               </p>
//               <p>
//                 <strong>Brand:</strong> {product.brand}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="py-10">
//         <hr />
//         <div className="flex justify-center gap-10 font-semibold text-lg py-4">
//           <button className="text-black">Description</button>
//           <button className="text-gray-500 hover:text-black">Reviews (3)</button>
//         </div>
//         <hr />
//         <p className="text-gray-600 py-6">{product.description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
