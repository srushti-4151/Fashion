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

const slides = [
  {
    image: img1,
    caption: "Great Lookbook 2021",
  },
  {
    image: img2,
    caption: "Stylish Coat",
  },
  {
    image: img3,
    caption: "Trendy Collection",
  },
];

const Carousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prevSlide = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr, autoSlide, autoSlideInterval]);

  return (
    <div className="relative overflow-hidden">
     
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-97 object-cover"
            />
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <p className="text-lg font-bold">{slide.caption}</p>
              <a
                href="/productpage"
                className="mt-4 py-2 px-4 bg-white text-black rounded hover:bg-gray-200"
              >
                Shop Now
              </a>
            </div> */}
            {curr === index && ( 
                <div className="absolute flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
                <p className="text-lg font-bold">{slide.caption}</p>
                <a
                    href="/productpage"
                    className="mt-4 py-2 px-4 bg-white text-black rounded hover:bg-gray-200"
                >
                    Shop Now
                </a>
                </div>
            )}
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
        onClick={nextSlide}
      >
        &gt;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurr(index)}
            className={`w-3 h-3 rounded-full ${
              index === curr ? "bg-white" : "bg-gray-500"
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
        image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%204.4fd59b0384620c059e47.jpeg",
        alt: "Spring Collection",
        aos: "slide-right",
      },
      {
        id: 2,
        image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%205.89205bff5b4e0e2ceead.jpeg",
        alt: "Spring Collection",
        aos: "zoom-in", 
      },
      {
        id: 3,
        image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%206.8d542bbc420c113f29cb.jpeg",
        alt: "Spring Collection",
        aos: "slide-left", 
      },
    ];
  
    return (
      <div className="overflow-hidden">
        <div className="container mx-auto my-auto py-16 px-16">
          <h2 className="text-2xl font-bold text-center mb-6">Spring Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item) => (
              <div
                key={item.id}
                data-aos={item.aos}
                className="pt-3"
              >
                <div className="pup text-center text-black bg-white rounded-lg shadow-lg">
                  <div className="ovr">
                    <img
                      className="w-full h-98 object-cover rounded-t-lg"
                      src={item.image}
                      alt={item.alt}
                    />
                  </div>
                  <div className="pin mt-4 p-4">
                    <h4 className="text-lg font-semibold">{item.alt}</h4>
                    <a
                      href="/productpage"
                      className="mt-2 inline-block text-black hover:underline bg-white"
                    >
                      Shop now
                    </a>
                  </div>
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
        <div>
        <h2 className="text-4xl font-bold text-black underline underline-offset-4">Top Selling Products</h2>
        <h6 className="mr-0 flex justify-end">more products</h6>
        </div>
        <div className="mt-20">
        <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
            {cards.map((i, index) => (
              <div key={index} className="px-2">
                <div className="bg-white h-100 text-black rounded-xl border border-black overflow-hidden">
               
                  <div className="h-50 rounded-t-xl flex justify-center items-center relative group">
                    <img src={i.img} alt="" className="object-cover h-full w-full" />
                    
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex justify-center items-end mb-2 gap-4">
                        <button className="w-10 h-10 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 hover:bg-gray-300 transition-all duration-300 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        </button>
                        <button className="w-10 h-10 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 hover:bg-gray-300 transition-all duration-300 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        </button>
                        <button className="w-10 h-10 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 hover:bg-gray-300 transition-all duration-300 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
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
              <button className="bg-gray-200 hover:bg-gray-300 text-black border border-black p-2 mr-2"
              onClick={() => sliderRef?.slickPrev()}>
               &#8592;
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-black border border-black p-2"
              onClick={() => sliderRef?.slickNext()}>
                &#8594;
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
    <div className="w-3/4 m-auto slider-container">
        <div>
        <h2 className="text-4xl font-bold text-black underline underline-offset-4">Top Selling Products</h2>
        <h6 className="mr-0 flex justify-end">more products</h6>
        </div>
        <div className="mt-20">
        <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
            {cards.map((i, index) => (
              <div key={index} className="px-2">
                <div className="bg-white h-100 text-black rounded-xl border border-black overflow-hidden">
               
                  <div className="h-50 rounded-t-xl flex justify-center items-center relative group">
                    <img src={i.img} alt="" className="object-cover h-full w-full" />
                    
                    <div className="absolute inset-0 flex justify-center items-center  bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex justify-center items-end mb-2 gap-4">
                        <button className="w-10 h-10 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 hover:bg-gray-300 transition-all duration-300 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        </button>
                        <button className="w-10 h-10 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 hover:bg-gray-300 transition-all duration-300 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        </button>
                        <button className="w-10 h-10 bg-gray-200 rounded-full shadow-lg flex justify-center items-center text-gray-700 hover:bg-gray-300 transition-all duration-300 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
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
              <button className="bg-gray-200 hover:bg-gray-300 text-black border border-black p-2 mr-2"
              onClick={() => sliderRef?.slickPrev()}>
               &#8592;
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-black border border-black p-2"
              onClick={() => sliderRef?.slickNext()}>
                &#8594;
              </button>
            </div>
        </div>
    </div>
   );
  
};


const Home = () => {
   
  return (
    <>
      <Carousel autoSlide={true} />
      <SpringCollection/>
      <Cardsliders/>

        <div
          className="bg-gray-900 text-white py-16 bg-cover bg-center mt-7 mb-7"
          style={{
            backgroundImage: `url('https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2023.022616af241623d7469d.jpeg')`,
          }}
        >
          <div className="container mx-auto text-center px-4 lg:px-8">
            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-2">
              Trending
            </p>
            <h2 className="text-4xl font-bold mb-4">Subscribe To Our Newsletter</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi
              distinctio magni, iure deserunt doloribus optio.
            </p>
            <div className="flex justify-center gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter a valid Email Address"
                className="w-full px-4 py-3 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-900"
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded-r-md font-medium hover:bg-orange-600 transition">
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
