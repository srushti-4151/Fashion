import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 py-16">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12">
        
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
            <p className="text-sm mb-2">Phone: 888-999-000-1425</p>
            <p className="text-sm mb-2">Email: azedev@mail.com</p>
            <p className="text-sm">Address: 22/1 National City, Austria, Dream Land, Huwai</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Best services</li>
              <li>Recent insight</li>
              <li>Shipping guide</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">PAYMENT & SHIPPING</h3>
            <ul className="space-y-2 text-sm">
              <li>Payment method</li>
              <li>Terms of use</li>
              <li>Shipping policy</li>
              <li>Shipping guide</li>
              <li>Return policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">SOCIAL MEDIA</h3>
            <ul className="space-y-2 text-sm">
              <li>tryinstagram</li>
              <li>tryfacebook</li>
              <li>trytwitter</li>
              <li>trywhatsapp</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
