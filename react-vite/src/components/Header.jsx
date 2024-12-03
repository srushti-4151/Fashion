import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaXmark } from "react-icons/fa6";
import { CiShoppingCart,CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { GoPerson } from "react-icons/go";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const { isLoggedIn, logUser } = useSelector((state) => state.auth);
  // const cartItemCount = useSelector((state) => state.cart.productCount);
  // const [cartQuantity, setCartQuantity] = useState(0);

  //  useEffect(() => {
  //   if (isLoggedIn) {
  //     setCartQuantity(cartItemCount);
  //     console.log("User logged in. Cart item count:", cartItemCount);
  //   } else {
  //     setCartQuantity(0);
  //     console.log("User logged out. Cart item count reset.");

  //     dispatch(resetCart({ cart: [] }));
  //   }
  // }, [cartItemCount,logUser, isLoggedIn, dispatch]); 

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
 
  const cartItemCount = useSelector((state) => state.cart.productCount);
  const [cartQuantity, setCartQuantity] = useState(0);
  
  useEffect(() => {
    if (isLoggedIn) {
      setCartQuantity(cartItemCount);
      console.log("cartItemCount:", cartItemCount);
    } else {
      setCartQuantity(0);
      console.log("cartItemCount:", cartItemCount);
    }
  }, [cartItemCount, isLoggedIn]);


  console.log(isLoggedIn)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-100 top-0 z-50 m-auto overflow-hidden">
      <div className="bg-black text-white text-center py-4 text-sm font-sans">
        Join and get 10% off! Coupon code: FIRST10
      </div>

    
      <nav className="max-w-7xl mx-auto px-4 lg:px-10 py-5 flex text-base items-center justify-between">
       
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
          <img
            className="h-4 lg:h-7 w-auto pl-10"
            src="data:image/png;base64,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"
            alt="Logo"
          />
          </NavLink>
        </div>

        <div className="text-base hidden lg:flex space-x-7 font-sans font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-orange-400 ${
                isActive ? "text-orange-400" : "text-gray-800"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `hover:text-orange-400 ${
                isActive ? "text-orange-400" : "text-gray-800"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover:text-orange-400 ${
                isActive ? "text-orange-400" : "text-gray-800"
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-orange-400 ${
                isActive ? "text-orange-400" : "text-gray-800"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-orange-400 ${
                isActive ? "text-orange-400" : "text-gray-800"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        
        <div className="hidden lg:flex items-center space-x-6">
          {!isLoggedIn ? (
            <NavLink to="/login">
              <button className="border border-black px-4 py-2 rounded-md text-black hover:bg-gray-200">
                Login/Sign In
              </button>
            </NavLink>
            ) : (
            <NavLink
                  to="/user/dashboard"
                  className={({ isActive }) =>
                    `hover:text-orange-400 ${
                      isActive ? "text-orange-400" : "text-gray-800"
                    }`
                  }
                >
                  <GoPerson className="h-8 w-8"/>
              </NavLink>
            )}
            <NavLink to="/wishlist" className="relative text-black hover:text-orange-400">
              <CiHeart className="h-8 w-8" />
              <div className="absolute top-[-5px] right-[-5px] bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {!isLoggedIn ? (0) : (0) }
              </div>
            </NavLink>
            
            <NavLink to="/cart" className="relative text-gray-800 hover:text-orange-400">
              <CiShoppingCart className="h-8 w-8" />
              <div className="absolute top-[-5px] right-[-5px] bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartQuantity}  
                {/* {!isLoggedIn ? (0) : (cartQuantity) } */}
              </div>
            </NavLink>
          </div>

         {/* mobie menu */}
      
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
               <FaXmark className="h-6 w-6" /> 
              
            ) : (
               <Bars3Icon className="h-6 w-6" />
            
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 z-40 w-full bg-gray-100 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "h-full" : "h-0"
        } overflow-hidden lg:hidden`}
      >
        <div className="flex flex-col items-center gap-8 pt-20 text-lg font-medium">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-orange-400 ${
                isActive ? "text-orange-400" : "text-gray-800"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-orange-400 ${
                isActive ? "text-orange-400" : "text-gray-800"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/blog"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-orange-400 ${
                isActive ? "text-orange-400" : "text-gray-800"
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-orange-400 ${
                isActive ? "text-orange-400" : "text-gray-800"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `hover:text-orange-400 ${
                isActive ? "text-orange-400" : "text-gray-800"
              }`
            }
          >
            Contact
          </NavLink>
          {!isLoggedIn ? (
            <NavLink to="/login" onClick={toggleMenu}>
              <button className="border border-gray-300 px-6 py-2 rounded-full text-gray-800 hover:bg-gray-200">
                Login/Sign In
              </button>
            </NavLink>
          ) : (
            <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `hover:text-orange-400 ${
                      isActive ? "text-orange-400" : "text-gray-800"
                    }`
                  }
                >
                  <GoPerson className="h-6 w-6"/>
            </NavLink>
          )}
          <NavLink to="/wishlist" onClick={toggleMenu} className="relative text-black hover:text-orange-400">
              <CiHeart className="h-8 w-8" />
              <div className="absolute top-[-5px] right-[-5px] bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {!isLoggedIn ? (0) : (0) }
              </div>
            </NavLink>
            
            <NavLink to="/cart" onClick={toggleMenu} className="relative text-gray-800 hover:text-orange-400">
              <CiShoppingCart className="h-8 w-8" />
              <div className="absolute top-[-5px] right-[-5px] bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {/* {cartQuantity}   */}
                {!isLoggedIn ? (0) : (cartQuantity) }
              </div>
            </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
