import React from "react";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import InstaSection from "../components/InstaSection";
import { PiSealQuestionLight } from "react-icons/pi";
import { CiShare2 } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Blog = () => {
  const comments = [
    {
      image: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQ5N0JCQ0E0MzZCMTFFQkE1ODhDMTFFMjgwMTgxNjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQ5N0JCQ0I0MzZCMTFFQkE1ODhDMTFFMjgwMTgxNjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRDk3QkJDODQzNkIxMUVCQTU4OEMxMUUyODAxODE2OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRDk3QkJDOTQzNkIxMUVCQTU4OEMxMUUyODAxODE2OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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",
      name: "Dichel Newn",
      text: "Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards.",
    },
    {
      image: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTRENTJDQjE0MzZCMTFFQjkzMDk5REI2Mjg5QjAyNzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTRENTJDQjI0MzZCMTFFQjkzMDk5REI2Mjg5QjAyNzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNEQ1MkNBRjQzNkIxMUVCOTMwOTlEQjYyODlCMDI3MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNEQ1MkNCMDQzNkIxMUVCOTMwOTlEQjYyODlCMDI3MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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",
      name: "Dichel Newn",
      text: "Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards.",
    },
    {
      image: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjY1NTI0NUE0MzZCMTFFQjhCMDFFQjE2MTg1RTVBQkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjY1NTI0NUI0MzZCMTFFQjhCMDFFQjE2MTg1RTVBQkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNjU1MjQ1ODQzNkIxMUVCOEIwMUVCMTYxODVFNUFCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNjU1MjQ1OTQzNkIxMUVCOEIwMUVCMTYxODVFNUFCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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",
      name: "Dichel Newn",
      text: "Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards.",
    },
  ];

  return (
    <>
    <div className="lg:px-24 sm:px-8 lg:py-10 sm:py-10 m-auto overflow-hidden">
    <div className="container m-auto">
      <div className="text-center pb-8 sm:pb-10">
        <h1 className="text-4xl font-bold">BLOG PAGE</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mx-4">
        <div className="lg:col-span-8">
          <img
            src="https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2027.571975ce0024591fb6d0.jpeg"
            alt="Blog"
            className="w-full"
          />
          <div className="pt-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Appearance is the first impression you convey to others, a major factor that contributes
            </h3>
            <p className="text-gray-600 text-sm sm:text-base lg:pb-3">
              Wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four
              familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling
              salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and
              housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, 
              raising a heavy fur muff that covered the whole of her lower arm towards.
            </p>

            <div className="flex gap-3 items-center border border-gray-300 p-4">
              <div className="text-5xl sm:text-5xl text-gray-700">
                <PiSealQuestionLight />
              </div>
              <h4 className="text-xl font-semibold lg:py-5 lg:my-1">
                Wasn't a dream. His room, a proper human room although a 
                little too small,lay peacefully between its four familiar walls. A 
                collection of textile samples lay
              </h4>
            </div>

            <p className="text-gray-600 text-sm sm:text-base lg:pt-3">
              Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted
              out with a fur hat and fur boa who sat upright.raising a heavy fur muff that covered the whole of her lower arm towards the viewer dregor. 
              hat he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
            </p>
          </div>

          <div className="flex gap-3 mt-4 text-lg">
                <NavLink to="#" className="text-black">
                  <CiShare2/>
                </NavLink>
                <NavLink to="#" className="text-black">
                  <FaFacebook/>
                </NavLink>
                <NavLink to="#" className="text-black">
                  <FaXTwitter/>
                </NavLink>
                <NavLink to="#" className="text-black">
                  <FaLinkedin/>
                </NavLink>
                <NavLink to="#" className="text-black">
                  <FaInstagram/>
                </NavLink>
          </div>

          <hr className="my-6 border-gray-300" />
          {/* <div className="flex items-center gap-4 py-5">
            <img
              src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCREQ4QjRDNUFGQTExRUI4RTMyRkY3MDBFMkRBRDg5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCREQ4QjRCNUFGQTExRUI4RTMyRkY3MDBFMkRBRDg5IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4N0NEMUYwNDQzNkExMUVCQTNFNTk5MzVGMTI4QzkzRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4N0NEMUYwNTQzNkExMUVCQTNFNTk5MzVGMTI4QzkzRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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"
              alt="Author"
              className="w-28 h-28 object-cover"
            />
            <div>
              <b className="block text-lg">Author: Shaim Jone</b>
              <p className="text-gray-500 text-sm mt-1">
                Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright.
                 raising a heavy fur muff that covered the whole of her lower arm towards
              </p>
              <div className="flex gap-4 mt-2">
                  <NavLink to="#" className="text-black">
                    <FontAwesomeIcon icon={faFacebook} />
                  </NavLink>
                  <NavLink to="#" className="text-black">
                    <FontAwesomeIcon icon={faTwitter} />
                  </NavLink>
                  <NavLink to="#" className="text-black">
                    <FontAwesomeIcon icon={faInstagram} />
                  </NavLink>
                  <NavLink to="#" className="text-black">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </NavLink>
                </div>
            </div>
          </div> */}
          <div className="flex flex-col sm:flex-row items-start gap-4 py-5">
            <img
              src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCREQ4QjRDNUFGQTExRUI4RTMyRkY3MDBFMkRBRDg5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCREQ4QjRCNUFGQTExRUI4RTMyRkY3MDBFMkRBRDg5IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4N0NEMUYwNDQzNkExMUVCQTNFNTk5MzVGMTI4QzkzRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4N0NEMUYwNTQzNkExMUVCQTNFNTk5MzVGMTI4QzkzRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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"
              alt="Author"
              className="w-28 h-28 object-cover"
            />
            <div className="sm:pl-4">
              <b className="block text-lg">Author: Shaim Jone</b>
              <p className="text-gray-500 text-sm mt-1">
                Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright,
                raising a heavy fur muff that covered the whole of her lower arm towards.
              </p>
              <div className="flex gap-4 mt-3">
                <NavLink to="#" className="text-black">
                  <FaFacebook/>
                </NavLink>
                <NavLink to="#" className="text-black">
                  <FaXTwitter/>
                </NavLink>
                <NavLink to="#" className="text-black">
                  <FaLinkedin/>
                </NavLink>
                <NavLink to="#" className="text-black">
                  <FaInstagram/>
                </NavLink>
              </div>
            </div>
          </div>


          <hr className="my-6 border-gray-300" />

          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-5">3 COMMENTS</h4>
            {comments.map((comment, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 py-8 mb-4">
                <img
                  src={comment.image}
                  alt="Comment"
                  className="w-20 h-20 sm:w-10 sm:h-10 lg:w-20 lg:h-20 object-cover"
                />
                <div className="sm:pl-2">
                  <p className="font-semibold text-gray-800">{comment.name}</p>
                  <p className="text-gray-600 text-sm">{comment.text}</p>
                  <a href="#" className="flex items-center text-blue-500 text-sm mt-2">
                    REPLY
                  </a>
                </div>
              </div>
            ))}
          </div>


          {/* <div>
            <h4 className="text-lg sm:text-xl font-bold mb-5">3 COMMENTS</h4>
            {comments.map((comment, index) => (
              <div key={index} className="flex gap-6 py-8 mb-4">
                <img
                  src={comment.image}
                  alt="Comment"
                  className="lg:w-20 lg:h-20 sm:w-8 sm:h-8 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800 pl-2">{comment.name}</p>
                  <p className="text-gray-600 text-sm pl-2">{comment.text}</p>
                  <a href="#" className="flex items-center text-blue-500 text-sm mt-2">
                    REPLY
                  </a>
                </div>
              </div>
            ))}
          </div> */}
          
          <div className="mt-8">
            <h4 className="text-lg sm:text-base font-bold mb-4">LEAVE YOUR THOUGHT</h4>
            <form className="space-y-4">
              <textarea
                rows="5"
                placeholder="Write your comment..."
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
              <input
                  type="text"
                  placeholder="Website"
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <button
              type="submit"
              className="lg:w-full sm:w-auto tracking-widest bg-gray-800 text-sm text-white text-center uppercase font-bold py-4 sm:py-5 px-8 sm:px-16 hover:bg-black"
            >
              Submit
            </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </div>
    </div>
    <InstaSection />
</>
  );

};

export default Blog;