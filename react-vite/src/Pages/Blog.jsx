import React from "react";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
import InstaSection from "../components/InstaSection";


const Blog = () => {
  const comments = [
    {
      name: "Dichel Newn",
      text: "Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards.",
    },
    {
      name: "Dichel Newn",
      text: "Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards.",
    },
  ];

  return (
    <div className="container mx-auto px-12 py-10">

      <div className="text-center pb-10">
        <h1 className="text-4xl font-extrabold">BLOG PAGE</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
        <div className="lg:col-span-8">
          <img
            src="https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2027.571975ce0024591fb6d0.jpeg"
            alt="Blog"
            className="w-full rounded-lg"
          />
          <div className="pt-6 space-y-4">
            <h3 className="text-3xl font-bold">
              Appearance is the first impression you convey to others major factor that contributes
            </h3>
            <p className="opacity-55">
              Wasn't a dream. His room, a proper human room although a little too small, lay
              peacefully between its four familiar walls. A collection of textile samples lay
              spread out on the table - Samsa was a travelling salesman - and above it there hung a
              picture that he had recently cut out of an illustrated magazine and housed in a nice,
              gilded frame.
            </p>
            <div className="flex gap-3 items-start">
              <i className="bi bi-patch-question"></i>
              <h4 className="text-xl font-semibold">
                Wasn't a dream. His room, a proper human room although a little too small, lay
                peacefully between its four familiar walls. A collection of sample textile lay.
              </h4>
            </div>
            <p className="opacity-55">
              Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It
              showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy
              fur muff.
            </p>
          </div>

          <div className="flex gap-4 mt-4">
          <NavLink to="#" className="text-blue-600">
              <FontAwesomeIcon icon={faShare} />
            </NavLink>
            <NavLink to="#" className="text-blue-600">
              <FontAwesomeIcon icon={faFacebook} />
            </NavLink>
            <NavLink to="#" className="text-blue-400">
              <FontAwesomeIcon icon={faTwitter} />
            </NavLink>
            <NavLink to="#" className="text-pink-500">
              <FontAwesomeIcon icon={faInstagram} />
            </NavLink>
            <NavLink to="#" className="text-blue-800">
              <FontAwesomeIcon icon={faLinkedin} />
            </NavLink>
          </div>

          <hr className="my-6 border-1 border-gray-400" />

         
          <div className="flex py-5 items-center gap-4">
            <img
              src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCREQ4QjRDNUFGQTExRUI4RTMyRkY3MDBFMkRBRDg5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCREQ4QjRCNUFGQTExRUI4RTMyRkY3MDBFMkRBRDg5IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4N0NEMUYwNDQzNkExMUVCQTNFNTk5MzVGMTI4QzkzRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4N0NEMUYwNTQzNkExMUVCQTNFNTk5MzVGMTI4QzkzRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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"
              alt="Author"
              className="w-30 h-34"
            />
            <div>
              <b>Author: Shaim Jone</b>
              <p className="text-gray-500 text-sm">
                Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur
                boa who sat upright.
              </p>
            </div>
          </div>

          <hr className="my-6 border-1 border-gray-400" />
        
          <div>
            <h4 className="font-bold text-lg mb-4">2 COMMENTS</h4>
            {comments.map((comment, index) => (
              <div key={index} className="flex gap-4 py-4">
                <img
                  src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCREQ4QjRDNUFGQTExRUI4RTMyRkY3MDBFMkRBRDg5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCREQ4QjRCNUFGQTExRUI4RTMyRkY3MDBFMkRBRDg5IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4N0NEMUYwNDQzNkExMUVCQTNFNTk5MzVGMTI4QzkzRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4N0NEMUYwNTQzNkExMUVCQTNFNTk5MzVGMTI4QzkzRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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"
                  alt="Commenter"
                  className="w-22 h-24"
                />
                <div>
                  <p className="text-grey-700 text-xl pl-2">{comment.name}</p>
                  <p className="text-gray-600 text-sm pl-2">{comment.text}</p>
                  <a href="#" className="text-blue-500 text-sm flex items-center mt-2">
                    <i className="bi bi-reply-all-fill mr-2"></i> REPLY
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 mt-8">
              <div className="col-span-12">
                <h4 className="uppercase font-bold text-lg">Leave Your Thought</h4>
              </div>

              <div className="col-span-12"> 
                <textarea
                  rows="5"
                  placeholder="Write your comment..."
                  className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="col-span-12">
                <input
                  type="url"
                  placeholder="Website"
                  className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="col-span-12 md:col-span-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="col-span-12">
              <button className="w-1/5 bg-blue-600 text-white py-3 rounded-md uppercase font-bold hover:bg-blue-700 cursor-pointer">
                Submit
              </button>
              </div>
            </div>
        </div>

        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>

      <InstaSection/>
    </div>
  );
};

export default Blog;
