import React from "react";
import { BsBank2 } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsAlarm } from "react-icons/bs";
import InstaSection from "../components/InstaSection";

const Contact = () => {
  return (
    <>
    <div className="overflow-hidden container mx-auto px-4 sm:px-6 lg:px-28 py-12">
      <div className="flex justify-center items-center bg-gray-50 py-4">
        <h1 className="tracking-wide font-base text-3xl sm:text-4xl lg:text-5xl text-gray-800">
          Contact
        </h1>
      </div>

      <div className="flex flex-wrap mx-2 sm:mx-4 mt-8 gap-y-10">
 
        <div className="w-full lg:w-1/2 pl-4 sm:pl-8 lg:pl-12 pr-4 sm:pr-8 lg:pr-24">
          <div className="space-y-10 sm:space-y-14">
            <div className="flex items-start space-x-4">
              <BsBank2 className="text-6xl sm:text-7xl lg:text-8xl text-gray-500" />
              <div>
                <h4 className="font-bold text-base sm:text-lg text-gray-800 pl-2 sm:pl-4">
                  Office Address
                </h4>
                <p className="text-gray-600 pl-2 sm:pl-4 mt-1 text-sm sm:text-base">
                  Ailded frame showed a lady fitted out with fur hat and fur boa
                  who sat upright.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CiMobile2 className="text-5xl sm:text-6xl lg:text-7xl text-gray-500" />
              <div>
                <h4 className="font-bold text-base sm:text-lg text-gray-800">
                  Phone Number
                </h4>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  54875465-65741895-6547 <br />
                  2222-3333-4444-555
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <TfiEmail className="text-4xl sm:text-6xl lg:text-7xl text-gray-500" />
              <div>
                <h4 className="font-bold text-base sm:text-lg text-gray-800 pl-2 sm:pl-4">
                  Email Us
                </h4>
                <p className="text-gray-600 pl-2 sm:pl-4 mt-1 text-sm sm:text-base">
                  admin@mail.com <br />
                  example@mail.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <BsAlarm className="text-4xl sm:text-6xl lg:text-7xl text-gray-500" />
              <div>
                <h4 className="font-bold text-base sm:text-lg text-gray-800 pl-2 sm:pl-4">
                  Office Time
                </h4>
                <p className="text-gray-600 pl-2 sm:pl-4 mt-1 text-sm sm:text-base">
                  10 AM - 5 PM, Sunday closed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-800">
            Let's Talk to Us
          </h3>
          <form className="space-y-6">

          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Name*"
              required
              className="flex-1 min-w-[200px] border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="flex-1 min-w-[200px] border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            />
          </div>

            <select
              required
              className="w-full border text-gray-400 border-gray-300 px-4 py-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            >
              <option value="">Subject 1</option>
              <option value="">Subject 2</option>
              <option value="">Subject 3</option>
            </select>

            <textarea
              rows="7"
              placeholder="Case Description..."
              className="w-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full sm:w-auto tracking-widest bg-gray-800 text-sm text-white text-center uppercase font-bold py-4 sm:py-5 px-8 sm:px-16 hover:bg-black"
            >
              Submit it now
            </button>
          </form>
        </div>
      </div>
    </div>
    
    <div className="container mx-auto px-2 py-4">
        <div className="relative pb-[60%] lg:pb-[40%] sm:pb-[50%] md:pb-[60%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.448254857155!2d72.88419477471935!3d21.214066281389208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6f3a2bac99%3A0x6b65a1c0c419a14f!2sRajveer%20Fashion!5e0!3m2!1sen!2sin!4v1710338265763!5m2!1sen!2sin"
            title="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0 w-full h-full border-0"
          ></iframe>
        </div>
      </div>

    <InstaSection/>
   </>
    
  );
};

export default Contact;

