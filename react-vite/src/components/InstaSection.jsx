import React from 'react'
import { FaInstagram } from "react-icons/fa";

const InstaSection = () => {
  const images = [
    "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2013.8563c402e3536c77b372.jpeg",
    "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2014.b9149a34ab71514c2d9c.jpeg",
    "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2015.c9afc14c4f6d775f90eb.jpeg",
    "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2016.17538a03eda48c97f447.jpeg",
    "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2017.51a2dd98db4f11f0ca13.jpeg",
    "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2018.5e603a83a3a24078b239.jpeg",
  ];

  return (
    <section className="py-10" data-aos="zoom-in-up">
      <div className="container mx-auto pb-12">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 relative">

          {images.map((image, index) => (
            <div key={index} className="relative group">
              <a href="#" target="_blank" className="block">
                <img
                  src={image}
                  alt={"insta"}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500 via-pink-500 to-yellow-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaInstagram className="text-white text-8xl transform scale-0 group-hover:scale-105 transition-opacity duration-300" />
                </div>
              </a>
            </div>
          ))}

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4 sm:w-1/2 md:w-1/3 bg-white p-4 rounded-lg shadow-lg z-10">
            <h4 className="text-lg font-semibold text-center">Follow our Instagram</h4>
            <a
              href="https://www.instagram.com/therajveerfashion/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline block text-center mt-2"
            >
              @therajveerfashion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstaSection;
