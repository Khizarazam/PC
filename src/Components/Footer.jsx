import React from "react";
import { Link } from "react-router-dom";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const links = ["About", "Services", "Contact"];
  return (
    <>
      <div className="w-full py-10 text-[#000288] text-center md:flex justify-center items-center bg-[#e3e0e0]">
        <div className=" w-full pt-10 md:pt-0">
          <h1>Copyright © Prime Chemicals 1990-2020.</h1> All rights reserved.
        </div>
        <div className="w-full pt-10 md:pt-0">
          {links.map((link) => {
            return (
              <div
                key={link}
                className="md:flex text-lg justify-center items-center"
              >
                <Link
                  to={link}
                  className="hover:bg-white rounded-full transition-all duration-300 py-1 px-5"
                >
                  {link}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="w-full pt-10 md:pt-0">
          <div className="text-2xl flex justify-center gap-x-10">
            <a href="https://mail.google.com/mail/u/0/" target="_blank">
              <IoMailOpenOutline className=" cursor-pointer hover:text-[#4345ca]" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF className=" cursor-pointer hover:text-[#4345ca]" />
            </a>
            <a href="" target="_blank">
              <FaPhoneAlt className=" cursor-pointer hover:text-[#4345ca]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
