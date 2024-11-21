import React from 'react'

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
      <section className="pt-5 pb-5" data-aos="zoom-in-up">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <a
                  href="#"
                  target="_blank"
                  className="block"
                >
                  <img
                    src={image}
                    alt={"insta"}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                 
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default InstaSection