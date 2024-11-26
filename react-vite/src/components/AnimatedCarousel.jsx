import React, { useEffect, useState } from "react";
import AOS from "aos";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

const AnimatedCarousel = () => {
    useEffect(() => {
      AOS.init(); 
    }, []);
  
   const slides = [
       {
        id: 1,
        img: img1,
        title: "Stylish Coat",
        subtitle: "STYLISH SHOP",
        link: "/shop",
      },
      {
        id: 2,
        img: img2, 
        title: "Great Lookbook 2021",
        subtitle: "STYLISH SHOP",
        link: "/shop",
      },
      {
        id: 3,
        img: img3,
        title: "Trendy Collection",
        subtitle: "STYLISH SHOP",
        link: "/shop",
      },
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000); 
      return () => clearInterval(interval);
    }, [slides.length]);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  
    return (
      <div className="relative w-full h-[600px] overflow-hidden bg-gray-100">
        
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* back-g img */}
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            <div
              className="absolute left-16 top-1/3 transform -translate-y-1/2 text-white ml-16"
              data-aos="zoom-in"
            >
              <p className="text-lg font-semibold tracking-wide uppercase text-gray-200 mb-4" data-aos="fade-down">
                {slide.subtitle}
              </p>
              <h2
                className="text-5xl md:text-6xl font-bold leading-tight mb-6"
                data-aos="fade-down"
              >
                {slide.title}
              </h2>
              <a
                href={slide.link}
                className="inline-block px-8 py-3 bg-white text-gray-800 font-semibold shadow-md hover:bg-black hover:text-white transition"
                // data-aos="fade-down"
                // data-aos-delay="200"
              >
                Shop Now
              </a>
            </div>
          </div>
        ))}
        
  
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent p-8 rounded-full text-white text-3xl"
          onClick={prevSlide}
        >
          <FaAngleLeft />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent p-8 rounded-full text-white text-3xl"
          onClick={nextSlide}
        >
          <FaAngleRight />
        </button>
  
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 border-2 border-white ${
                currentSlide === index ? "bg-white" : "bg-transparent"
              }`}
            ></button>
          ))}
        </div>
      </div>
    );
};
export default AnimatedCarousel;



// const AnimatedCarousel1 = () => {
//     useEffect(() => {
//       AOS.init(); 
//     }, []);
  
//     const slides = [
//       {
//         id: 1,
//         img: img1,
//         title: "Stylish Coat",
//         subtitle: "STYLISH SHOP",
//       },
//       {
//         id: 2,
//         img: img2, 
//         title: "Great Lookbook 2021",
//         subtitle: "STYLISH SHOP",
//       },
//       {
//         id: 3,
//         img: img3, 
//         title: "Trendy Collection",
//         subtitle: "STYLISH SHOP",
//       },
//     ];
  
//     const [currentSlide, setCurrentSlide] = useState(0);
  
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 3000); 
//       return () => clearInterval(interval);
//     }, [slides.length]);
  
//     const nextSlide = () => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     };
  
//     const prevSlide = () => {
//       setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     };
  
//     return (
//       <div className="relative w-full h-[600px] overflow-hidden bg-gray-100">
//         {/* Slides */}
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               currentSlide === index ? "opacity-100" : "opacity-0"
//             }`}
//           >
            
//             <img
//               src={slide.img}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
            
//             {/* <div
//               className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white"
//               data-aos="zoom-in"
//             >
//               <p className="text-lg font-semibold tracking-wide uppercase text-gray-200 mb-4" data-aos="fade-down">
//                 {slide.subtitle}
//               </p>
//               <h2
//                 className="text-5xl md:text-6xl font-bold leading-tight mb-6"
//                 data-aos="fade-up"
//               >
//                 {slide.title}
//               </h2>
//               <a
//                 href={slide.link}
//                 className="inline-block px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//               >
//                 Shop Now
//               </a>
//             </div> */}
//             <div
//               className="absolute left-16 md:left-32 top-1/2 transform -translate-y-1/2 text-white"
//               data-aos="zoom-in"
//             >
//               <p
//                 className="text-lg font-semibold tracking-wide uppercase text-gray-200 mb-4"
//                 data-aos="fade-down"
//               >
//                 {slide.subtitle}
//               </p>
//               <h2
//                 className="text-5xl md:text-6xl font-bold leading-tight mb-6"
//                 data-aos="fade-up"
//               >
//                 {slide.title}
//               </h2>
//               <a
//                 href={slide.link}
//                 className="inline-block px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//               >
//                 Shop Now
//               </a>
//             </div>
//           </div>
//         ))}
  
//         <button
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white text-3xl"
//           onClick={prevSlide}
//         >
//           <FaAngleLeft />
//         </button>
//         <button
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white text-3xl"
//           onClick={nextSlide}
//         >
//           <FaAngleRight />
//         </button>
  
//         {/* Indicators */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-4 h-4 rounded-full ${
//                 currentSlide === index ? "bg-gray-800" : "bg-gray-400"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
  // const Carousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  //   const slides = [
  //     {
  //       image: img1,
  //       caption: "Great Lookbook 2021",
  //     },
  //     {
  //       image: img2,
  //       caption: "Stylish Coat",
  //     },
  //     {
  //       image: img3,
  //       caption: "Trendy Collection",
  //     },
  //   ];
  //   const [curr, setCurr] = useState(0);
  
  //   const prevSlide = () => {
  //     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  //   };
  
  //   const nextSlide = () => {
  //     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  //   };
  
  //   useEffect(() => {
  //     if (!autoSlide) return;
  
  //     const slideInterval = setInterval(nextSlide, autoSlideInterval);
  //     return () => clearInterval(slideInterval);
  //   }, [curr, autoSlide, autoSlideInterval]);
  
  //   return (
  //     <div className="relative overflow-hidden">
       
  //       <div
  //         className="flex transition-transform duration-500 ease-out"
  //         style={{ transform: `translateX(-${curr * 100}%)` }}
  //       >
  //         {slides.map((slide, index) => (
  //           <div key={index} className="w-full flex-shrink-0">
  //             <img
  //               src={slide.image}
  //               alt={slide.caption}
  //               className="w-full h-97 object-cover"
  //             />
  //             {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
  //               <p className="text-lg font-bold">{slide.caption}</p>
  //               <a
  //                 href="/productpage"
  //                 className="mt-4 py-2 px-4 bg-white text-black rounded hover:bg-gray-200"
  //               >
  //                 Shop Now
  //               </a>
  //             </div> */}
  //             {curr === index && ( 
  //                 <div className="absolute flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
  //                 <p className="text-lg font-bold">{slide.caption}</p>
  //                 <a
  //                     href="/productpage"
  //                     className="mt-4 py-2 px-4 bg-white text-black rounded hover:bg-gray-200"
  //                 >
  //                     Shop Now
  //                 </a>
  //                 </div>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  
  //       <button
  //         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white text-3xl"
  //         onClick={prevSlide}
  //       >
  //         <FaAngleLeft />
  //       </button>
  //       <button
  //         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white text-3xl"
  //         onClick={nextSlide}
  //       >
  //         <FaAngleRight />
  //       </button>
  
  //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
  //         {slides.map((_, index) => (
  //           <button
  //             key={index}
  //             onClick={() => setCurr(index)}
  //             className={`w-3 h-3 rounded-full ${
  //               index === curr ? "bg-white" : "bg-gray-500"
  //             }`}
  //           ></button>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };
  