import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-custom_black text-gray-500 py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="/"
            className=" text-teal-600 text-[0.9rem] font-bold uppercase hover:text-gray-700"
          >
            About
          </a>
          <a
            href="/"
            className=" text-teal-600 text-[0.9rem] font-bold uppercase hover:text-gray-700"
          >
            Servies
          </a>
          <a
            href="/"
            className=" text-teal-600 text-[0.9rem] font-bold uppercase hover:text-gray-700"
          >
            Team
          </a>
          <a
            href="/"
            className=" text-teal-600 text-[0.9rem] font-bold uppercase hover:text-gray-700"
          >
            Privacy
          </a>
          <a
            href="/"
            className=" text-teal-600 text-[0.9rem] font-bold uppercase hover:text-gray-700"
          >
            Terms
          </a>
          {/* <a href="/" className="hover:text-gray-700">
            Partners
          </a> */}
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/" className="text-gray-400 hover:text-gray-600">
            <FaFacebookF size={24} />
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-600">
            <FaInstagram size={24} />
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-600">
            <FaTwitter size={24} />
          </a>
          <a
            href="https://github.com/SushrutDabholkar04/TechElites"
            className="text-gray-400 hover:text-gray-600"
          >
            <FaGithub size={24} />
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-600">
            <FaYoutube size={24} />
          </a>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-400">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
