import React, { useEffect, useState } from "react";
import AOS from "aos";
import Slider from "react-slick";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstaSection from "../components/InstaSection";
import ClientQuote from "../components/ClientQuote";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import SpringCollection from "../components/SpringCollection";
import AnimatedCarousel from "../components/AnimatedCarousel";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/CartSlice";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

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

const Cardsliders = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: false,
    });
  }, []);

  const [products, setProducts] = useState([]);
  let sliderRef = null;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const dispatch = useDispatch();
  // const handleAddToCart = () => {
  //   dispatch(addCart({...products}));
  //   toast.success("Added to Cart!");
  // }
  const handleAddToCart = (i) => {
    dispatch(
      addCart({
        id: i.id,
        title: i.title,
        price: i.price,
        quantity: 1,
        thumbnail: i.thumbnail,
      })
    );
    toast.success("Added to cart.");
  };
  
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

  return (
    <div className="w-full sm:w-3/4 m-auto slider-container overflow-hidden">
      {/* <div className="flex items-center justify-between mx-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black mb-1" data-aos="fade-up">
          Top Selling Products
        </h2>
        <a href="/" className="text-base text-black font-semibold">MORE PRODUCTS</a>
      </div> */}

      <div className="flex flex-col sm:flex-row sm:justify-between mx-3">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black mb-2 sm:mb-1"
          data-aos="fade-up"
        >
          Top Selling Products
        </h2>
        <a
          href="/"
          className="text-base text-black font-semibold"
        >
          MORE PRODUCTS
        </a>
      </div>


      <hr className="my-6 border-1 border-gray-400" />
      <div className="mt-10 mx-3">
        <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
          {products.map((i, index) => (
            <div key={index} className="px-2">
              <div className="bg-white h-auto text-black rounded-xl border border-black overflow-hidden">
                <div className="h-50 rounded-t-xl flex justify-center items-center relative group">
                  <img src={i.thumbnail} alt={i.title} className="object-cover h-full w-full" />

                  <div className="absolute inset-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-center items-end mb-1 gap-6">
                      <button className="w-12 h-12 bg-white rounded-full shadow-lg border border-zinc-400 flex justify-center items-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300 translate-y-10 group-hover:translate-y-2 opacity-0 group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                      </button>
                      <Link
                        to={`/productpage/${i.id}`}
                        className="w-12 h-12 bg-white rounded-full shadow-lg border border-zinc-400 flex justify-center items-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300 translate-y-10 group-hover:translate-y-2 opacity-0 group-hover:opacity-100"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </Link>
                      <button
                        onClick={() => handleAddToCart(i)}
                        className="w-12 h-12 bg-white rounded-full shadow-lg border border-zinc-400 flex justify-center items-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300 translate-y-10 group-hover:translate-y-2 opacity-0 group-hover:opacity-100"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-center overflow-hidden whitespace-nowrap text-ellipsis" style={{ maxWidth: '150px' }}>
                    {i.title}
                  </p>
                  <p>₹{i.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-200 text-black hover:bg-black hover:text-white border border-black p-2 mr-2"
            onClick={() => sliderRef?.slickPrev()}
          >
            <FaAngleLeft />
          </button>
          <button
            className="bg-gray-200 text-black hover:bg-black hover:text-white border border-black p-2 mr-2"
            onClick={() => sliderRef?.slickNext()}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );

};

const Cardsliders2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: false,
    });
  }, []);

  const [products, setProducts] = useState([]);
  let sliderRef = null;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const dispatch = useDispatch();
  // const handleAddToCart = () => {
  //   dispatch(addCart({...products}));
  //   toast.success("Added to Cart!");
  // }
  const handleAddToCart = (i) => {
    dispatch(
      addCart({
        id: i.id,
        title: i.title,
        price: i.price,
        quantity: 1,
        thumbnail: i.thumbnail,
      })
    );
    toast.success("Added to cart.");
  };
  
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
    return (
      <div className="w-full sm:w-3/4 m-auto slider-container overflow-hidden">
        {/* <div className="flex items-center justify-between mx-3">
          <h2 className="text-4xl sm:text-5xl font-medium text-black mb-1" data-aos="fade-up">Featured Products</h2>
          <a href="/" className="text-sm sm:text-base text-black font-semibold">MORE PRODUCTS</a>
        </div> */}

        <div className="flex flex-col sm:flex-row sm:justify-between mx-3">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black mb-2 sm:mb-1"
              data-aos="fade-up"
            >
              Featured Products
            </h2>
            <a
              href="/"
              className="text-base text-black font-semibold"
            >
              MORE PRODUCTS
            </a>
          </div>
    
        <hr className="my-6 border-1 border-gray-400" />
        <div className="mt-10 mx-3">
          <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
            {products.map((i, index) => (
              <div key={index} className="px-2">
                <div className="bg-white h-100 text-black rounded-xl border border-black overflow-hidden">
                  <div className="h-50 rounded-t-xl flex justify-center items-center relative group">
                    <img src={i.thumbnail} alt="" className="object-cover h-full w-full" />
    
                    <div className="absolute inset-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex justify-center items-end mb-1 gap-6">
                        <button className="w-12 h-12 bg-white rounded-full shadow-lg border border-zinc-400 flex justify-center items-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300 translate-y-10 group-hover:translate-y-2 opacity-0 group-hover:opacity-100">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                          </svg>
                        </button>
                        <Link
                        to={`/productpage/${i.id}`}
                        className="w-12 h-12 bg-white rounded-full shadow-lg border border-zinc-400 flex justify-center items-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300 translate-y-10 group-hover:translate-y-2 opacity-0 group-hover:opacity-100"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </Link>
                        <button onClick={() => handleAddToCart(i)} className="w-12 h-12 bg-white rounded-full shadow-lg border border-zinc-400 flex justify-center items-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300 translate-y-10 group-hover:translate-y-2 opacity-0 group-hover:opacity-100">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-center overflow-hidden whitespace-nowrap text-ellipsis" style={{ maxWidth: '150px' }}>{i.title}</p>
                    <p>₹{i.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
    
          <div className="flex justify-center mt-4">
            <button className="bg-gray-200 text-black hover:bg-black hover:text-white border border-black p-2 mr-2" onClick={() => sliderRef?.slickPrev()}>
              <FaAngleLeft />
            </button>
            <button className="bg-gray-200 text-black hover:bg-black hover:text-white border border-black p-2 mr-2" onClick={() => sliderRef?.slickNext()}>
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
    {/* <div className=" overflow-hidden max-w-screen"> */}
      {/* <Carousel autoSlide={true} /> */}
      <AnimatedCarousel/>
      <SpringCollection/>
      <Cardsliders/>

       <div
          className="m-auto w-full overflow-hidden bg-gray-900 text-white py-16 bg-cover bg-center mt-7 mb-16"
          style={{
            backgroundImage: `url('https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2023.022616af241623d7469d.jpeg')`,
          }}
        >
          <div className="font-sans container py-20 h-96 mx-auto text-center px-4 lg:px-8">
            <p className="text-orange-500 text-sm font-thin uppercase tracking-widest mb-2">
              T r e n d i n g
            </p>
            <h2 className="font-sans text-5xl font-bold mb-4" data-aos-duration="1000" data-aos="slide-right">Subscribe To Our Newsletter</h2>
            <p className="text-white max-w-lg mx-auto mb-6" data-aos-duration="1000" data-aos="slide-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi
              distinctio magni, iure deserunt doloribus optio.
            </p>
            <div className="flex justify-center gap-0 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter a valid Email Address"
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-gray-900"
              />
              <button className="bg-orange-500 text-white px-6 py-3 font-sans font-medium hover:bg-orange-600 transition">
                Submit
              </button>
            </div>
          </div>
        </div>

      <Cardsliders2/>
      <ClientQuote/>
      <InstaSection/>
      {/* </div> */}
    </>
  );
};
export default Home;
