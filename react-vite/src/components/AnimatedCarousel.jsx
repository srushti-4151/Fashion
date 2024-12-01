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
        img: img2,
        title: "Stylish Coat",
        subtitle: "STYLISH SHOP",
        link: "/shop",
      },
      {
        id: 2,
        img: img1, 
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
      <div className="m-auto overflow-hidden">
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
              <p className="text-lg font-semibold tracking-wide uppercase text-white mb-4" data-aos="fade-down">
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
      
      </div>
    );
};
export default AnimatedCarousel;

