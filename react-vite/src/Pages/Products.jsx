import React, { useState } from "react";

const productData = [
  {
    id: 1,
    name: "Essence",
    price: 9.99,
    originalPrice: 11,
    rating: 4.94,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 2,
    name: "Eyeshadow",
    price: 19.99,
    originalPrice: 21,
    rating: 3.28,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 3,
    name: "Eyeshadow",
    price: 19.99,
    originalPrice: 21,
    rating: 3.28,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 4,
    name: "Eyeshadow",
    price: 19.99,
    originalPrice: 21,
    rating: 3.28,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 5,
    name: "Eyeshadow",
    price: 19.99,
    originalPrice: 21,
    rating: 3.28,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 6,
    name: "Eyeshadow",
    price: 19.99,
    originalPrice: 21,
    rating: 3.28,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 7,
    name: "Eyeshadow",
    price: 19.99,
    originalPrice: 21,
    rating: 3.28,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 8,
    name: "Eyeshadow",
    price: 19.99,
    originalPrice: 21,
    rating: 3.28,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 9,
    name: "Eyeshadow",
    price: 19.99,
    originalPrice: 21,
    rating: 3.28,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
];

const categories = [
  "All Categories",
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

const Products = () => {

  const itemsPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct); // ex 6 to 12 extracting product for this current page

  const totalPages = Math.ceil(productData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <>
    <div className="container mx-auto py-10 px-20">
      <div className="flex flex-wrap -mx-4">

        <div className="w-full lg:w-1/4 px-4 mb-5 lg:mb-0">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="py-4">
            <h4 className="text-lg font-bold">Filter By Category</h4>
            <ul className="space-y-2 mt-4">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${
                    category === "All Categories" ? "font-bold text-orange-600" : ""
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="w-full lg:w-3/4 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productData.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-50 object-cover"
                  />
                </div>
                <div className="p-4">
                  <a
                    href={`/productpage/${product.id}`}
                    className="block text-lg font-semibold text-gray-800 hover:text-orange-500"
                  >
                    {product.name}
                  </a>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <h6 className="text-lg font-bold text-gray-800">
                        ₹{product.price.toFixed(2)}
                        <del className="text-gray-400 text-sm ml-2">
                          ₹{product.originalPrice}
                        </del>
                      </h6>
                    </div>
                    <span className="flex items-center text-orange-600">
                      ★<span className="ml-1 text-sm">{product.rating}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <ul className="flex space-x-2">
              <li>
                <a
                  href="/productpage"
                  className="px-3 py-2 border rounded hover:bg-black hover:text-white"
                >
                  Prev
                </a>
              </li>
              {[1, 2, 3, 4].map((page) => (
                <li key={page}>
                  <a
                    href={`/productpage?page=${page}`}
                    className={`px-3 py-2 border rounded hover:bg-black hover:text-white ${
                      page === 1 ? "bg-black text-white" : ""
                    }`}
                  >
                    {page}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/productpage"
                  className="px-3 py-2 border rounded hover:bg-black hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="w-full lg:w-3/4 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div key={product.id} className="border rounded-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-50 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <a
                      href={`/productpage/${product.id}`}
                      className="block text-lg font-semibold text-gray-800 hover:text-orange-500"
                    >
                      {product.name}
                    </a>
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <h6 className="text-lg font-bold text-gray-800">
                          ₹{product.price.toFixed(2)}
                          <del className="text-gray-400 text-sm ml-2">
                            ₹{product.originalPrice}
                          </del>
                        </h6>
                      </div>
                      <span className="flex items-center text-orange-600">
                        ★<span className="ml-1 text-sm">{product.rating}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <ul className="flex space-x-2">
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 border rounded ${
                      currentPage === 1 ? "opacity-50" : "hover:bg-black hover:text-white"
                    }`}
                  >
                    Prev
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <li key={page}>
                    <button
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 border rounded ${
                        page === currentPage
                          ? "bg-black text-white"
                          : "hover:bg-black hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 border rounded ${
                      currentPage === totalPages
                        ? "opacity-50"
                        : "hover:bg-black hover:text-white"
                    }`}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default Products;
