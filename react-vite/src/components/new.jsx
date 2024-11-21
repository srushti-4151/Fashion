import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="mt-0 w-full">
        <div className="flex justify-center">
          <div className="w-full text-center text-light py-3 px-4 bg-gray-800 text-white">
            Join and get 10% off! Coupon code: FIRST10
          </div>
        </div>
      </div>

      <div>
        <nav className="bg-gray-100 sticky top-0 py-2 lg:py-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
           
            <NavLink to="/" className="navbar-brand">
              <img
                className="h-4 lg:h-4 w-auto"
                src="data:image/png;base64,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"
                alt="Logo"
              />
            </NavLink>

            <button
              type="button"
              className="navbar-toggler lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-2xl">&#9776;</span>
            </button>

            <div
              id="offcanvasNavbar"
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } lg:flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-4 w-full lg:w-auto`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-gray-800 font-medium hover:text-yellow-600 ${
                      isActive ? 'text-yellow-600' : ''
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    `text-gray-800 font-medium hover:text-yellow-600 ${
                      isActive ? 'text-yellow-600' : ''
                    }`
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `text-gray-800 font-medium hover:text-yellow-600 ${
                      isActive ? 'text-yellow-600' : ''
                    }`
                  }
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-gray-800 font-medium hover:text-yellow-600 ${
                      isActive ? 'text-yellow-600' : ''
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-gray-800 font-medium hover:text-yellow-600 ${
                      isActive ? 'text-yellow-600' : ''
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>

            

            <div className="hidden lg:flex items-center space-x-4">
              <NavLink to="/login">
                <button className="btn btn-outline-dark border border-gray-600 text-gray-800 px-4 py-1 rounded hover:bg-gray-200">
                  Login/Sign In
                </button>
              </NavLink>
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  `relative text-gray-800 hover:text-yellow-600 ${
                    isActive ? 'text-yellow-600' : ''
                  }`
                }
              >
                Wishlist
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `relative text-gray-800 hover:text-yellow-600 ${
                    isActive ? 'text-yellow-600' : ''
                  }`
                }
              >
                Cart
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};





import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="mt-0 w-full">
        <div className="flex justify-center">
          <div className="w-full text-center text-light py-3 px-4 bg-gray-800 text-white">
            Join and get 10% off! Coupon code: FIRST10
          </div>
        </div>
      </div>

      <div>
        <nav className="bg-gray-100 sticky top-0 py-2 lg:py-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            <NavLink to="/" className="navbar-brand">
              <img className="h-4 lg:h-4 w-auto" src="data:image/png;base64,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" alt="Logo" />
            </NavLink>

            <button
              type="button"
              className="navbar-toggler lg:hidden"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">&#9776;</span>
            </button>

            <div id="offcanvasNavbar" className="hidden lg:flex flex-grow justify-center items-center">
              <div className="flex items-center space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-gray-800 font-medium hover:text-yellow-600 ${
                      isActive ? 'text-yellow-600' : ''
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    `text-gray-800 font-medium hover:text-yellow-600 ${
                      isActive ? 'text-yellow-600' : ''
                    }`
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `text-gray-800 font-medium hover:text-yellow-600 ${
                      isActive ? 'text-yellow-600' : ''
                    }`
                  }
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-gray-800 font-medium hover:text-yellow-600 ${
                      isActive ? 'text-yellow-600' : ''
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-gray-800 font-medium hover:text-yellow-600 ${
                      isActive ? 'text-yellow-600' : ''
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <NavLink to="/login">
                <button className="btn btn-outline-dark border border-gray-600 text-gray-800 px-4 py-1 rounded hover:bg-gray-200">
                  Login/Sign In
                </button>
              </NavLink>
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  `relative text-gray-800 hover:text-yellow-600 ${
                    isActive ? 'text-yellow-600' : ''
                  }`
                }
              >
                Wishlist
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `relative text-gray-800 hover:text-yellow-600 ${
                    isActive ? 'text-yellow-600' : ''
                  }`
                }
              >
                Cart
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
