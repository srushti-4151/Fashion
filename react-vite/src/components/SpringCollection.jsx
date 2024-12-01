import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SpringCollection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: false,
    });
  }, []);

  const items = [
    {
      id: 1,
      image:
        "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%204.4fd59b0384620c059e47.jpeg",
      alt: "Spring Collection",
      aos: "slide-right",
    },
    {
      id: 2,
      image:
        "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%205.89205bff5b4e0e2ceead.jpeg",
      alt: "Spring Collection",
      aos: "zoom-in",
    },
    {
      id: 3,
      image:
        "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%206.8d542bbc420c113f29cb.jpeg",
      alt: "Spring Collection",
      aos: "slide-left",
    },
  ];

  return (
    <div className="m-auto overflow-hidden">
    <div className="mt-10 mb-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item) => (
            <div
              key={item.id}
              data-aos={item.aos}
              className="relative group"
            >
              <div className="relative overflow-hidden mt-4">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[480px] object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>

               <div
                 className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-lg shadow-gray-800 p-4 w-72 transition-all duration-500 group-hover:translate-y-[-50px]"
               >
                 <h4 className="text-lg font-sans font-base text-black">
                   {item.alt}
                 </h4>
                 <a
                   href="/productpage"
                   className="block mt-2 font-sans text-sm text-gray-600 hover:text-black"
                 >
                   Shop Now
                 </a>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>

  );
};

export default SpringCollection;
