import React from 'react'
import Slider from "react-slick";

const QuoteSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
    };
  
    const quotes = [
      {
        quote:
          "Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and...",
        name: "John Smith",
        image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2013.8563c402e3536c77b372.jpeg",
      },
      {
        quote:
          "Life is what happens when you're busy making other plans. Enjoy every moment of it and never look back.",
        name: "Jane Doe",
        image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2013.8563c402e3536c77b372.jpeg",
      },
      {
        quote:
          "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        name: "nina Doe",
        image: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2013.8563c402e3536c77b372.jpeg",
      },
    ];
  
    return (
      <div className="relative bg-transparent flex justify-center items-center">
        <Slider {...settings} className="w-full max-w-4xl">
          {quotes.map((item, index) => (
            <div key={index} className="p-6">
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
        
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full shadow-md"
                />
         
                <div>
                  <blockquote className="text-gray-600 italic">
                    "{item.quote}"
                  </blockquote>
                  <p className="mt-4 font-bold text-gray-800">- {item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
};

const ClientQuote = () => {
  return (
    <div
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
      </p>
      <QuoteSlider/>
    </div>
  </div> 

  )
}

export default ClientQuote





