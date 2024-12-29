import React, { useState } from "react";
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

  const toggleHandler = () => {
    setToggle(!toggle);
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
    // tl.from("#linkdiv", {
    //   y: -20,
    //   opacity: 0,
    //   duration: 2,
    //   stagger: 0.5,
    // });
    gsap.from("#btndiv", {
      x: 30,
      opacity: 0,
      duration: 3,
      delay: 1,
    });
  });

  return (
    <>
      <div className="flex fixed top-0 z-[100] w-full justify-around items-center bg-white/10">
        <div
          id="logodiv"
          className="flex w-[50%] lg:w-[30%] justify-center items-center tracking-tighter"
        >
          <img src={logo} alt="logo" className="w-20 h-20" />
          <h1 className="text-2xl font-semibold">Prime-Chemicals</h1>
        </div>
        <div className=" lg:hidden cursor-pointer w-[50%] flex justify-end items-center mr-20 text-2xl font-bold">
          {toggle ? (
            <h1 onClick={toggleHandler}>
              <GiHamburgerMenu />
            </h1>
          ) : (
            <h1 onClick={toggleHandler}>
              <AiOutlineClose />
            </h1>
          )}
        </div>

        <div
          id="tagdiv"
          className="w-[40%] hidden gap-x-9 text-lg font-semibold lg:flex justify-center items-center"
        >
          {links.map((link, index) => {
            return (
              <div
                id="linkdiv"
                key={index}
                className="hover:scale-105 duration-300"
              >
                <Link to={link}>{link}</Link>
              </div>
            );
          })}
        </div>

        <div
          id="btndiv"
          className=" w-[30%] hidden lg:flex items-center gap-x-3 justify-center"
        >
          <button className="px-6 py-2 rounded-full hover:scale-105 duration-300 ease-linear hover:shadow-2xl border-black border-[1px]">
            <Link to="Products">Products</Link>
          </button>
          <button className="px-6 py-2 rounded-full hover:scale-105 duration-300 ease-linear hover:shadow-2xl border-black border-[1px]">
            <Link to="Equipments">Equipments</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
