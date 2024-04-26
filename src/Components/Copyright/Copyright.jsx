import React from "react";
import "./Copyright.css";
import { FaRegCopyright, FaViber } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Copyright = () => {
  return (
    <div className="copyright-container">
      <div className="copy-logo">
        <FaFacebook className="text-white text-2xl mx-1 cursor-pointer" />
        <FaInstagram className="text-white text-2xl mx-1 cursor-pointer" />
        <FaTwitter className="text-white text-2xl mx-1 cursor-pointer" />
        <FaWhatsapp className="text-white text-2xl mx-1 cursor-pointer" />
        <FaViber className="text-white text-2xl mx-1 cursor-pointer" />
      </div>
      <div>
        <ul className="copyright-links">
          <li>Privacy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div>
        <h4 className="flex flex-row flex-wrap text-white">
          Harmony Honey Beauty Bar - Copyright Reseved{" "}
          <FaRegCopyright className="flex justify-center items-center" /> -
          {new Date().getFullYear()}
        </h4>
      </div>
    </div>
  );
};

export default Copyright;
