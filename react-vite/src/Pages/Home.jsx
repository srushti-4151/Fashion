import React, { useEffect, useState } from "react";
import AOS from "aos";
import Slider from "react-slick";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstaSection from "../components/InstaSection";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import ClientQuote from "../components/ClientQuote";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";


const AnimatedCarousel1 = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  const slides = [
    {
      id: 1,
      img: img1,
      title: "Stylish Coat",
      subtitle: "STYLISH SHOP",
    },
    {
      id: 2,
      img: img2, 
      title: "Great Lookbook 2021",
      subtitle: "STYLISH SHOP",
    },
    {
      id: 3,
      img: img3, 
      title: "Trendy Collection",
      subtitle: "STYLISH SHOP",
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
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* <div
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white"
            data-aos="zoom-in"
          >
            <p className="text-lg font-semibold tracking-wide uppercase text-gray-200 mb-4" data-aos="fade-down">
              {slide.subtitle}
            </p>
            <h2
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              data-aos="fade-up"
            >
              {slide.title}
            </h2>
            <a
              href={slide.link}
              className="inline-block px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Shop Now
            </a>
          </div> */}
          <div
            className="absolute left-16 md:left-32 top-1/2 transform -translate-y-1/2 text-white"
            data-aos="zoom-in"
          >
            <p
              className="text-lg font-semibold tracking-wide uppercase text-gray-200 mb-4"
              data-aos="fade-down"
            >
              {slide.subtitle}
            </p>
            <h2
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              data-aos="fade-up"
            >
              {slide.title}
            </h2>
            <a
              href={slide.link}
              className="inline-block px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Shop Now
            </a>
          </div>
        </div>
      ))}

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white text-3xl"
        onClick={prevSlide}
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white text-3xl"
        onClick={nextSlide}
      >
        <FaAngleRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

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
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Caption */}
          <div
            className="absolute left-16 top-1/3 transform -translate-y-1/2 text-white"
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
              className="inline-block px-8 py-3 bg-white text-gray-800 font-semibold shadow-md hover:bg-gray-200 transition"
              // data-aos="fade-down"
              // data-aos-delay="200"
            >
              Shop Now
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white text-3xl"
        onClick={prevSlide}
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full text-white text-3xl"
        onClick={nextSlide}
      >
        <FaAngleRight />
      </button>

      {/* Indicators */}
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
    <div className="overflow-hidden my-10">
      <div className="container mx-auto py-16 px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              data-aos={item.aos}
              className="group relative overflow-hidden shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  className="w-full h-98 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  src={item.image}
                  alt={item.alt}
                />
              </div>

              <div
                className="absolute inset-x-0 bottom-0 translate-y-1/2 bg-white p-6 shadow-lg rounded-lg transition-transform duration-500 group-hover:translate-y-0"
              >
                <h4 className="text-lg font-semibold text-black text-center">
                  {item.alt}
                </h4>
                <a
                  href="/productpage"
                  className="mt-2 block text-sm font-medium text-gray-600 hover:text-black text-center"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "red", display: "none" }}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "green", display: "none" }}
        onClick={onClick}
      />
    );
  }

// const QuoteSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   const quotes = [
//     {
//       quote:
//         "Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and...",
//       name: "John Smith",
//       image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2013.8563c402e3536c77b372.jpeg",
//     },
//     {
//       quote:
//         "Life is what happens when you're busy making other plans. Enjoy every moment of it and never look back.",
//       name: "Jane Doe",
//       image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2013.8563c402e3536c77b372.jpeg",
//     },
//     {
//       quote:
//         "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
//       name: "nina Doe",
//       image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2013.8563c402e3536c77b372.jpeg",
//     },
//   ];

//   return (
//     <div className="relative bg-transparent flex justify-center items-center">
//       <Slider {...settings} className="w-full max-w-4xl">
//         {quotes.map((item, index) => (
//           <div key={index} className="p-6">
//             <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
      
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-16 h-16 rounded-full shadow-md"
//               />
       
//               <div>
//                 <blockquote className="text-gray-600 italic">
//                   "{item.quote}"
//                 </blockquote>
//                 <p className="mt-4 font-bold text-gray-800">- {item.name}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };  

const Cardsliders = () => {
  let sliderRef = null;
    const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const cards = [
        {
            name: 'Green chili paper',
            img: 'https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png',
            price: '$0.99'
        },
        {
            name: 'Ice-cream',
            img: 'https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png',
            price: '$6.99'
        },
        {
            name: 'Honey-jar',
            img: 'https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png',
            price: '$5.49'
        },
        {
            name: 'Juice',
            img: 'https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png',
            price: '3.99'
        },
        {
            name: 'Kiwi',
            img: 'https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png',
            price: '2.49'
        },
        {
            name: 'Red-Lipstick',
            img: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png',
            price: '12.99'
        },
        {
            name: 'Powder Canister',
            img: 'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png',
            price: '14.99'
        },
        {
            name: 'Gucci Bloom Eau de',
            img: 'https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png',
            price: '79.99'
        }
    ]

   return(
    <div className="w-3/4 m-auto slider-container">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-semibold text-black">Top Selling Products</h2>
        <a href="/" className="text-base text-black font-semibold">MORE PRODUCTS</a>
      </div>

        {/* <div>
        <h2 className="text-5xl font-semibold text-black">Top Selling Products</h2>
        <h6 className="mr-0 flex justify-end text-xl">more products</h6>
        </div> */}
        <hr className="my-6 border-1 border-gray-400" />
        <div className="mt-20">
        <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
            {cards.map((i, index) => (
              <div key={index} className="px-2">
                <div className="bg-white h-100 text-black rounded-xl border border-black overflow-hidden">
               
                  <div className="h-50 rounded-t-xl flex justify-center items-center relative group">
                    <img src={i.img} alt="" className="object-cover h-full w-full" />
                    
                    <div className="absolute inset-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex justify-center items-end mb-1 gap-6">
                        <button className="w-12 h-12 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 hover:bg-gray-300 transition-all duration-300 translate-y-10 group-hover:translate-y-2 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        </button>
                        <button className="w-12 h-12 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 hover:bg-gray-300 transition-all duration-300 translate-y-10 group-hover:translate-y-2 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        </button>
                        <button className="w-12 h-12 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 hover:bg-gray-300 transition-all duration-300 translate-y-10 group-hover:translate-y-2 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p>{i.name}</p>
                    <p>{i.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>


            <div className="flex justify-center mt-4">
              <button className="bg-gray-200 text-black hover:bg-black hover:text-white border border-black p-2 mr-2"
              onClick={() => sliderRef?.slickPrev()}>
               <FaAngleLeft />
              </button>
              <button className= "bg-gray-200 text-black hover:bg-black hover:text-white border border-black p-2 mr-2"
              onClick={() => sliderRef?.slickNext()}>
                <FaAngleRight />
              </button>
            </div>
        </div>
    </div>
   );
  
};

const Cardsliders2 = () => {
  let sliderRef = null;
    const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const cards = [
        {
            name: 'Green chili paper',
            img: 'https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png',
            price: '$0.99'
        },
        {
            name: 'Ice-cream',
            img: 'https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png',
            price: '$6.99'
        },
        {
            name: 'Honey-jar',
            img: 'https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png',
            price: '$5.49'
        },
        {
            name: 'Juice',
            img: 'https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png',
            price: '3.99'
        },
        {
            name: 'Kiwi',
            img: 'https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png',
            price: '2.49'
        },
        {
            name: 'Red-Lipstick',
            img: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png',
            price: '12.99'
        },
        {
            name: 'Powder Canister',
            img: 'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png',
            price: '14.99'
        },
        {
            name: 'Gucci Bloom Eau de',
            img: 'https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png',
            price: '79.99'
        }
    ]

   return(
    <div className="mb-8 w-3/4 m-auto slider-container">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-semibold text-black">Featured Products</h2>
        <a href="/" className="text-base font-semibold text-black">MORE PRODUCTS</a>
      </div>

        {/* <div>
        <h2 className="text-5xl font-semibold text-black">Top Selling Products</h2>
        <h6 className="mr-0 flex justify-end text-xl">more products</h6>
        </div> */}
        <hr className="my-6 border-1 border-gray-400" />
        <div className="mt-20">
        <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
            {cards.map((i, index) => (
              <div key={index} className="px-2">
                <div className="bg-white h-100 text-black rounded-xl border border-black overflow-hidden">
               
                  <div className="h-50 rounded-t-xl flex justify-center items-center relative group">
                    <img src={i.img} alt="" className="object-cover h-full w-full" />
                    
                    <div className="absolute inset-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex justify-center items-end mb-2 gap-6">
                        <button className="w-12 h-12 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 transition-all duration-300 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        </button>
                        <button className="w-12 h-12 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 hover:bg-gray-300 transition-all duration-300 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        </button>
                        <button className="w-12 h-12 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 hover:bg-gray-300 transition-all duration-300 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p>{i.name}</p>
                    <p>{i.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>


            <div className="flex justify-center mt-4">
              <button className="bg-gray-200 text-black hover:bg-black hover:text-white border border-black p-2 mr-2"
              onClick={() => sliderRef?.slickPrev()}>
               <FaAngleLeft />
              </button>
              <button className= "bg-gray-200 text-black hover:bg-black hover:text-white border border-black p-2 mr-2"
              onClick={() => sliderRef?.slickNext()}>
                <FaAngleRight />
              </button>
            </div>
        </div>
    </div>
   );
  
};


const Home = () => {
   
  return (
    <>
      {/* <Carousel autoSlide={true} /> */}
      <AnimatedCarousel/>
      <SpringCollection/>
      <Cardsliders/>

        <div
          className="bg-gray-900 text-white py-16 bg-cover bg-center mt-7 mb-16"
          style={{
            backgroundImage: `url('https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2023.022616af241623d7469d.jpeg')`,
          }}
        >
          <div className="container py-20 h-96 mx-auto text-center px-4 lg:px-8">
            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-2">
              Trending
            </p>
            <h2 className="text-4xl font-bold mb-4">Subscribe To Our Newsletter</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi
              distinctio magni, iure deserunt doloribus optio.
            </p>
            <div className="flex justify-center gap-0 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter a valid Email Address"
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900"
              />
              <button className="bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-600 transition">
                Submit
              </button>
            </div>
          </div>
        </div>

    <Cardsliders2/>
 
       {/* <div
          className="bg-gray-600 text-white py-16 bg-cover bg-center mt-7"
          style={{
            backgroundImage: `url('https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2041.055bcfacd1e21f3978b9.jpeg')`,
            height: '600px',
          }}
        >
          <div className="container mx-auto ml-2 px-4 lg:px-7">
            <h2 className="text-4xl font-bold mt-7">Client's Quote</h2>
            <p className="text-white mx-auto mt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, totam.
            </p> */}
            <ClientQuote/>
          {/* </div>
        </div>  */}

      <InstaSection/>
      
    </>
  );
};
export default Home;
