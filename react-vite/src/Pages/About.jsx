import React from 'react';
import InstaSection from '../components/InstaSection';
import ClientQuote from '../components/ClientQuote';
import { FaCircle } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

const About = () => {
  const blogPosts = [
    {
      id: 1,
      imgSrc: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2038.293d67bcffe73956f3ce.jpeg",
      date: "27 Nov 2020",
      category: "Fashion, Trend",
      title: "Clothing Stores understands the human nature of presenting",
      link: "/about",
    },
    {
      id: 2,
      imgSrc: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2039.ad60db5eaf5aaaceabbe.jpeg",
      date: "27 Nov 2020",
      category: "Fashion, Trend",
      title: "Clothing Stores understands the human nature of presenting",
      link: "/about",
    },
    {
      id: 3,
      imgSrc: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2040.918d08119695d5f9d80a.jpeg",
      date: "27 Nov 2020",
      category: "Fashion, Trend",
      title: "Appearance is the first impression you convey to others",
      link: "/about",
    },
  ];

  return (
    <>
      <div className="px-6 lg:px-24 py-8">
        <div className="text-center text-uppercase pt-7 pb-12">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase">About Us</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <img 
              src="https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2037.d4a2c56fedfe8d11a9dc.jpeg" 
              alt="Fashion Image" 
              className="w-full"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="pb-4">
              <h1 
                style={{ backgroundColor: "#aab9c0" }} 
                className="py-4 tracking-wider font-bold text-3xl lg:text-4xl text-center text-white"
              >
                "Clothes That <br /> Will Be Your Best Friends"
              </h1>

              <ul className="pt-4 text-center px-2">
                <li className="text-gray-500">
                  Compared with the size of the rest of him, waved about helplessly as he looked to me Gregor then turned to look.
                </li>
              </ul>

              <div className="flex justify-center mt-4">
                <input
                  type="submit"
                  className="bg-white text-black font-semibold text-xs tracking-wide border-2 border-black uppercase py-5 px-12 cursor-pointer hover:bg-black hover:text-white transition"
                  value="C o n t a c t   U s"
                />
              </div>
            </div>

            <div className="px-4 lg:px-8 py-4 text-center pt-10">
              <h2 className="font-base text-3xl sm:text-4xl text-gray-900">Our Mission</h2>
              <p className="text-gray-500 mt-2">
                Pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. 
                "What's happened to me?" Gregor then turned to look out the window at the dull weather deal to the day.
              </p>
            </div>

            <div className="px-4 lg:px-8 py-4 text-center pt-10">
              <h2 className="font-base text-3xl sm:text-4xl text-gray-900">Goal Of Our Business</h2>
              <p className="text-gray-500 mt-2">
                Pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. 
                "What's happened to me?" Gregor then turned to look out the window at the dull weather deal to the day.
              </p>
              <button
                type="submit"
                className="lg:w-full mt-5 sm:w-auto tracking-widest bg-gray-800 text-sm text-white text-center uppercase font-bold py-4 sm:py-5 px-8 sm:px-16 hover:bg-black"
              >
                Go to shop
              </button>
            </div>
          </div>
        </div>
      </div>

      <ClientQuote/>

      <div className="py-5 container mx-auto px-6 lg:px-24 pt-20">
        <div className="text-center mb-8">
          <div className="tracking-widest uppercase text-amber-700 text-lg mb-2">Recent News</div>
          <div className="capitalize text-4xl font-semibold">From our Blog</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="space-y-4">
              <img src={post.imgSrc} alt="Blog Post" className="w-full" />

              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <div>{post.date}</div>
                <FaCircle />
                <a href={post.link} className="hover:text-gray-800 uppercase text-sm font-semibold">{post.category}</a>
              </div>

              <div>
                <a href={post.link} className="block text-lg font-semibold text-black">
                  {post.title}
                </a>
              </div>

              <div>
                <a href={post.link} className="text-gray-800 font-bold flex items-center space-x-2 hover:text-black">
                  <span>Read More</span>
                  <LuArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <InstaSection/>
    </>
  );
};

export default About;
