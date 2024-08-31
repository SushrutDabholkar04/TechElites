import React, { useEffect, useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const navigateTo = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // Close dropdown after navigation
  };

  return (
    <>
      <nav
        className={`flex fixed justify-between items-center list-none w-full pl-8 pr-8 mt-4 h-16 z-[9999] 
        border-t-2 border-b-2 transition-colors duration-300 ${
          isScrolled
            ? "bg-custom_gray text-grey-900 mt-[0] h-20"
            : "bg-grey-900 text-white"
        }`}
      >
        <li className="text-[1.4rem] font-bold font-new-amsterdam">
          Website Name
        </li>
        <li className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none gap-2 relative group"
          >
            <RiAccountCircleLine size={26} />
            <span className="relative text-[1.2rem] font-bold font-new-amsterdam">
              Login
              <span className="absolute bottom-[-0.25rem] w-16 h-0.5 bg-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 left-0"></span>
            </span>
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-4 w-60 bg-white text-grey-900 shadow-lg rounded-lg">
              <li
                onClick={() => navigateTo("/user-login")}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
              >
                User Login
              </li>
              <li
                onClick={() => navigateTo("/collector-login")}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
              >
                Collector Login
              </li>
            </ul>
          )}
        </li>
      </nav>
    </>
  );
};

export default Navbar;
