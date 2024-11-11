import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-sm">
      <Link to="/">
        <p className="flex flex-row gap-5 text-[1.5rem] font-medium">
          <img src="/assets/images/logo_icon.png" alt="logo" /> Nettrot
        </p>
      </Link>
      <ul className="hidden sm:flex gap-5 text-md text-gray700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/products" className="flex flex-col items-center gap-1">
          <p>Products</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src="/assets/images/search_icon.png"
          className="w-5 cursor-pointer"
          alt="search-icon"
        />

        <div className="group relative">
          <img
            src="/assets/images/profile_icon.png"
            className="w-5 cursor-pointer"
            alt="profile-icon"
          />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
              <p className="cursor-pointer hover:text-black"> My Profile</p>
              <p className="cursor-pointer hover:text-black"> Orders</p>
              <p className="cursor-pointer hover:text-black"> Login</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src="/assets/images/cart_icon.png"
            className="w-5 min-w-5 cursor-pointer"
            alt="cart-icon"
          />
          <p className="absolute right-[5px] bottom-[5-px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src="/assets/images/menu_icon.png"
          className="w-5 cursor-pointer sm:hidden"
          alt="menu-icon"
        />
      </div>
      {/* Mobil meny */}
      <div
        className={`absolute top-0 right-0 overflow-hidden bg-white transition-all 
            ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src="/assets/images/dropdown_icon.png"
              className="h-4 rotate-180"
              alt="dropdown-icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-6 border"
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to="/products"
            className="py-2 pl-6 border"
          >
            Products
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-6 border"
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-6 border"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
