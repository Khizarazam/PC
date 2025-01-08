import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const links = ["Home", "About", "Services", "Contact"];
  const tl = gsap.timeline();
  const [toggle, setToggle] = useState(true);
  const mobileMenuRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setToggle(!toggle);
  };
  const toggleHandler = () => {
    setIsMenuOpen(!isMenuOpen);
    setToggle(!toggle);
    if (!toggle) {
      gsap.fromTo(
        "#mobilediv",
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".mobile-link",
        {
          x: 30,
          opacity: 0,
          duration: 3,
        },
        {
          x: 30,
          opacity: 1,
          duration: 3,
          stagger: 0.1,
          ease: "back.out",
        }
      );
    }
  };

  useGSAP(() => {
    gsap.from("#logodiv", {
      x: -30,
      opacity: 0,
      duration: 3,
      delay: 1,
    });

    gsap.from("#tagdiv", {
      y: -20,
      opacity: 0,
      duration: 3,
      delay: 1,
    });

    // gsap.from("#btndiv", {
    //   x: 30,
    //   opacity: 0,
    //   duration: 3,
    //   delay: 1,
    // });

    gsap.from("#icon", {
      x: 50,
      opacity: 0,
      duration: 3,
    });
  });

  return (
    <>
      <div className="flex px-6 fixed top-0 z-[100] w-full justify-around items-center bg-white/10 backdrop-blur-sm shadow-lg">
        <div
          id="logodiv"
          className="flex w-[80%] lg:w-[30%] justify-start items-center tracking-tighter"
        >
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 hover:rotate-12 transition-all duration-300"
          />
          <h1 className="text-2xl font-semibold">Prime-Chemicals</h1>
        </div>

        <div className="lg:hidden cursor-pointer w-[20%] flex justify-end items-center text-2xl font-bold">
          {toggle ? (
            <h1 id="icon" onClick={toggleHandler}>
              <GiHamburgerMenu />
            </h1>
          ) : (
            <h1 id="icon" onClick={toggleHandler}>
              <AiOutlineClose />
            </h1>
          )}
        </div>

        <div
          id="tagdiv"
          className="w-[40%] hidden gap-x-9 text-lg font-semibold lg:flex justify-center items-center"
        >
          {links.map((link) => (
            <div
              id="linkdiv"
              key={link}
              className="border-[1px] border-black py-1 hover:scale-105 px-4 rounded-full duration-300"
            >
              <Link to={link === "Home" ? "/" : link.toLowerCase()}>
                {link}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {isMenuOpen && !toggle && (
        <div
          ref={mobileMenuRef}
          id="mobilediv"
          className="right-3 mt-20 top-0 z-[100] rounded-xl border-[1px] border-black/20 bg-white/30 backdrop-blur-lg shadow-xl h-auto lg:hidden absolute w-[70%] sm:w-[50%] md:w-[30%] overflow-hidden"
        >
          {links.map((link, index) => (
            <div
              key={index}
              className="mobile-link pl-10 py-6 text-xl hover:bg-gray-100 transition-all duration-300 border-b border-gray-100 last:border-none"
            >
               <Link to={link === "Home" ? "/" : link.toLowerCase()}
               onClick={handleLinkClick}
               >
                {link}
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
