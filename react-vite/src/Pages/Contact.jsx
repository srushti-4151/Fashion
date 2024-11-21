import React from "react";

const Contact = () => {
  return (
    <div className="container py-12">
      {/* Contact Header */}
      <div className="text-center py-6 bg-gray-100">
        <h1 className="text-4xl font-extrabold">Contact</h1>
      </div>

      {/* Contact Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Office Address */}
          <div className="flex items-start space-x-4">
            <i className="bi bi-bank2 text-3xl text-yellow-600"></i>
            <div>
              <h4 className="text-xl font-bold">Office address</h4>
              <p className="text-gray-600">
                Ailded frame showed a lady fitted out with fur hat and fur boa
                who sat upright
              </p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-start space-x-4">
            <i className="bi bi-phone text-3xl text-yellow-600"></i>
            <div>
              <h4 className="text-xl font-bold">Phone number</h4>
              <p className="text-gray-600">
                54875465-65741895-6547 <br />
                2222-3333-4444-555
              </p>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex items-start space-x-4">
            <i className="bi bi-envelope text-3xl text-yellow-600"></i>
            <div>
              <h4 className="text-xl font-bold">Email us</h4>
              <p className="text-gray-600">
                admin@mail.com <br />
                example@mail.com
              </p>
            </div>
          </div>

          {/* Office Time */}
          <div className="flex items-start space-x-4">
            <i className="bi bi-alarm text-3xl text-yellow-600"></i>
            <div>
              <h4 className="text-xl font-bold">Office time</h4>
              <p className="text-gray-600">10AM - 5 PM, Sunday closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Let’s talk to us</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <input
                type="text"
                placeholder="Name*"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />

              {/* Email Input */}
              <input
                type="email"
                placeholder="Email*"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />
            </div>

            {/* Subject Select */}
            <select
              className="w-full p-3 border border-gray-300 rounded-md text-gray-600 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
            >
              <option value="">Subject 1</option>
              <option value="">Subject 2</option>
              <option value="">Subject 3</option>
            </select>

            {/* Case Description */}
            <textarea
              rows="7"
              placeholder="Case Description..."
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-600 focus:outline-none"
            ></textarea>

            {/* Submit Button */}
            <input
              type="submit"
              value="Submit it now"
              className="w-full bg-yellow-600 text-white text-lg font-bold py-3 rounded-md cursor-pointer hover:bg-yellow-700 transition"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
