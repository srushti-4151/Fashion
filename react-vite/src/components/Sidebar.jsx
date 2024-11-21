import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearchengin} from '@fortawesome/free-brands-svg-icons';
import React from "react";

const posts = [
  {
    imgSrc: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2027.571975ce0024591fb6d0.jpeg",
    title: "Upright, raising a heavy fur muff that covered the whole lower",
    date: "Jan 19 2021",
    link: "/blog",
  },
  {
    imgSrc: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2027.571975ce0024591fb6d0.jpeg",
    title: "Arm towards the viewer, Pegor then turned to look out the window",
    date: "Jan 19 2021",
    link: "/blog",
  },
  {
    imgSrc: "https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%2027.571975ce0024591fb6d0.jpeg",
    title: "Housed in a nice, gilded frame, showed a lady fitted out with",
    date: "Jan 19 2021",
    link: "/blog",
  },
];

const categories = [
  { name: "Funding", count: 2, link: "/blog" },
  { name: "Charity organization", count: 7, link: "/blog" },
  { name: "Helpless", count: 51, link: "/blog" },
  { name: "Charity", count: 5, link: "/blog" },
  { name: "Children", count: 10, link: "/blog" },
];

const Sidebar = () => {
  return (
    <div className="col-span-12 lg:col-span-4 px-4 lg:px-6">
      <div className="pb-4">
        <h5 className="font-bold mb-3 text-2xl">Search</h5>
        <div className="flex items-center border rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search Post..."
            className="w-full p-2 outline-none"
          />
          <button className="p-3 bg-gray-200">
          <FontAwesomeIcon icon={faSearchengin} />
          </button>
        </div>
      </div>

      <div className="py-4">
        <h5 className="font-bold mb-3 text-2xl">Categories</h5>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a
                href={category.link}
                className="flex hover:underline"
              >
                <span>{category.name}</span>
                <div className="p-1"></div>
                <span>({category.count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-2 pb-4">
        <h5 className="font-bold mb-3 text-2xl">Recent Posts</h5>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="pt-3 flex items-start space-x-4">
              <img
                src={post.imgSrc}
                alt="Post"
                className="w-16 h-16 object-cover"
              />
              <div>
                <h6 className="font-bold text-sm">
                  <a href={post.link} className="hover:underline">
                    {post.title}
                  </a>
                </h6>
                <div className="text-xl mt-1 text-gray-500">{post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-4">
        <h5 className="font-bold mb-3 text-2xl">About</h5>
        <p className="text-gray-600">
          Towards the viewer, Gregor then turned to look out the window at the
          dull weather towards the viewer Gregor then turned to look.
        </p>
      </div>

      <div className="py-4">
        <h5 className="font-bold mb-3 text-2xl">Tags</h5>
        <p className="text-gray-600">
          Charity, Organization, Donation, Manufacturing, Children, Funds
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
