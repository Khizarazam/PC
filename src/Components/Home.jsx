import React from "react";
import bg3 from "../assets/bg-3.jpg";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FlaskIcon from "./Myicon";

const Home = () => {

  useGSAP(() => {
    gsap.from("#text1", {
      x: 50,
      duration: 0.5,
      delay: 2
    })
  })
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: "cover",
        }}
        className="bg-gradient-to-l py-20 lg:flex justify-center items-center from-[#2e80dd] to-[#c6d9e3] w-full"
      >
        <div className="lg:w-[60%] mt-10 pl-5 md:pl-20">
          <h1 className="text-5xl text-black font-bold">Prime-Chemicals</h1>
          <h3 className="text-2xl text-black font-bold">A Sign Of Quality</h3>
          <p className=" pt-5 text-left">
            Prime Chemicals could be a company involved in the manufacturing,
            distribution, and sales of various chemicals for different
            industries, including pharmaceuticals, agriculture, construction,
            food, and industrial applications.
          </p>
          <br />
          <p className=" text-left">
            The company might produce chemicals such as solvents, fertilizers,
            specialty chemicals, cleaning agents, and other essential materials
            used in daily and industrial processes
          </p>
          <div
            id="btndiv"
            className="md:w-[30%] my-4 flex items-center gap-x-3"
          >
            <button className="px-6 text-nowrap py-2 rounded-full hover:scale-105 duration-300 ease-linear hover:shadow-2xl border-black border-[1px] bg-white/30">
              <Link to="Products">Our Products</Link>
            </button>
            <button className="px-6 py-2 rounded-full hover:scale-105 duration-300 ease-linear hover:shadow-2xl border-black border-[1px] bg-white/30 ">
              <Link to="Equipments">Equipments</Link>
            </button>
          </div>
        </div>
        <div className="lg:w-[50%] w-[97%] relative h-[400px]">
          <div id="text1" className=" absolute border-2 border-black rounded-xl right-[-18%] md:right-[-9%] lg:right-[-9%] top-[30%] w-[150px] flex justify-center items-center text-xl font-bold h-14 rotate-90">Chemicals</div>
          <FlaskIcon />
        </div>
      </div>
      <div className="w-full h-[600px] bg-red-400">

      </div>
    </>
  );
};

export default Home;
