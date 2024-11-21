import React from 'react';
import InstaSection from '../components/InstaSection';
import ClientQuote from '../components/ClientQuote';

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className="container py-12">
        <div className="text-center text-uppercase pb-8">
          <h1 className="text-3xl font-extrabold uppercase">About Us</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src="https://final-frontend-fashionweb-dummyjson.vercel.app/static/media/asset%204.4fd59b0384620c059e47.jpeg" alt="About Us" className="w-full" />
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="text-2xl font-extrabold">
              "Clothes that <br /> will be your best friends"
            </h1>
            <ul className="text-gray-600">
              <li>
                Compared with the size of the rest of him, waved about helplessly as he looked.
              </li>
            </ul>
            <button className="btn-primary uppercase py-2 px-6 mt-4">
              Contact Us
            </button>
          </div>
        </div>

        {/* Mission and Goal Section */}
        <div className="text-center space-y-12 mt-12">
          <div>
            <h2 className="text-2xl font-extrabold">Our Mission</h2>
            <p className="text-gray-600">
              Pitifully thin compared with the size of the rest of him, waved about helplessly as
              he looked.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">Goal Of Our Business</h2>
            <p className="text-gray-600">
              Pitifully thin compared with the size of the rest of him, waved about helplessly as
              he looked.
            </p>
            <button className="btn-primary uppercase py-2 px-6 mt-4">
              Go to Shop
            </button>
          </div>
        </div>
      </div>

        <ClientQuote/>

      {/* Recent News Section */}
      <div className="container py-12">
        <div className="text-center space-y-4 mb-8">
          <h4 className="uppercase text-gray-500">Recent news</h4>
          <h2 className="text-3xl font-bold capitalize">From our blog</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="space-y-4">
              <img
                src={`https://picsum.photos/400/300?random=${index + 1}`}
                alt={`Blog ${index + 1}`}
                className="w-full"
              />
              <div className="text-gray-600 text-sm uppercase space-x-2 flex items-center">
                <span>27 Nov 2020</span>
                <span className="text-yellow-500">•</span>
                <a href="/about" className="text-yellow-600">
                  Fashion, Trend
                </a>
              </div>
              <p className="text-lg font-semibold">
                Clothing Stores understands the human nature of presenting.
              </p>
              <a href="/about" className="text-yellow-600 font-bold">
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
      <InstaSection/>

    </div>
  );
};

export default About;
