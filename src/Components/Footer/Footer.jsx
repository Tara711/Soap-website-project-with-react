import React from "react";
import logo from "../../assets/Logo.jpg";
import play from "../../assets/play-store.png";
import app from "../../assets/app-store.jpg";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footersection">
      <div className="footerimg">
        <Link to="/">
          <img src={logo} alt="" className="footerlogo" />
        </Link>
      </div>
      <div>
        <h2 className="text-bold text-center text-2xl mb-4">
          {" "}
          <center>Our Company</center>{" "}
        </h2>
        <ul className="company-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-bold text-center text-2xl mb-4">
          <center>Support</center>{" "}
        </h2>
        <ul className="support-links">
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/why-us"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Why Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instagram"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Instagram
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/FAQ"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-bold text-center text-2xl mb-4">
          <center>Download the app</center>{" "}
        </h2>
        <div className="footerstore">
          <div className="footerpicture">
            <img src={app} alt="" className="app h-fit w-fit" />
            <img src={play} alt="" className="play h-fit w-fit" />
          </div>
          <div>
            <h3 className="font-bold">10% off your first order</h3>
            <p>
              Subscribe to our mailing list for 10% <br /> off your first order
            </p>
          </div>
          <div>
            <h3 className="font-bold">45 Day Returns</h3>
            <p>
              Instant refunds & exchanges available for UK <br /> & EU customers
              using our online portal.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Free Worldwide Delivery</h3>
            <p>Free worldwide delivery on orders over €1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
