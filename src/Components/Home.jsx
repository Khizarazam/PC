import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import homeimage from "../assets/homeimg.png";
import Electroplatingimg from "../assets/electroplatingimg.jpg";
import Labimage from "../assets/Labimg.jpg";
import Equipimage from "../assets/2ndimg.jpg";
import video from "../assets/video.mov";
import img1 from "../assets/basf.jpg";
import img2 from "../assets/hc-iso.jpeg";
import img3 from "../assets/jas-naz.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    gsap.from("#div1", {
      x: -50,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
    });
    gsap.from("#div2", {
      x: 50,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
    });
    gsap.from("#div3", {
      x: -70,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#div3",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#div4", {
      x: 100,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#div4",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#div5", {
      x: -100,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#div5",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#div6", {
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#div6",
        start: "top 90%",
        end: "bottom 60%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#div7", {
      x: -100,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#div7",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#div8", {
      x: -100,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#div10",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#div9", {
      x: 100,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#div10",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
  });

  const Cards = [
    {
      id: 1,
      name: "ElectroPlating Chemicals:",
      ankerLink: "Products/ElectroplatingChemicals",
      image: Electroplatingimg,
      desc: "If anything made of matter is made up of chemicals, which means that only phenomena that aren't made of matter are not chemicals: Energy is not a chemical.",
    },
    {
      id: 2,
      name: "ElectroPlating Equipments:",
      ankerLink: "Equipments",
      image: Equipimage,
      desc: "We have in-house electroplating plants, providing all PP & PVC of metal finishing services.",
    },
    {
      id: 3,
      name: "Lab Analysis:",
      ankerLink: "LabAnalysis",
      image: Labimage,
      desc: "We provide, complete lab facilities, analysis and testing of your electroplating systems and metal finishing procedures.",
    },
  ];

  return (
    <>
      <div className=" py-20 lg:flex justify-center items-center w-full">
        <div id="div1" className="lg:w-[60%] mt-10 pl-5 md:pl-20">
          <h1 className="text-5xl text-black text-nowrap font-bold">Prime-Chemicals</h1>
          <h3 className="text-2xl text-black font-bold">A Sign Of Quality</h3>
          <p className=" pt-5 text-left">
            <b>
              <i className="text-[#000288] text-xl">Prime Chemicals</i>
            </b>{" "}
            could be a company involved in the manufacturing, distribution, and
            sales of various chemicals for different industries, including
            pharmaceuticals, agriculture, construction, food, and industrial
            applications.
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
            <Link to="Products" className=" duration-300">
              <button className="px-6 text-nowrap hover:text-white py-2 rounded-full hover:bg-[#000288] hover:scale-105 duration-300 ease-linear hover:shadow-2xl border-black border-[1px] bg-white/30">
                Our Products
              </button>
            </Link>
            <Link to="Equipments" className=" duration-300">
              <button className="px-6 py-2 rounded-full hover:text-white hover:scale-105 hover:bg-[#000288] duration-300 ease-linear hover:shadow-2xl border-black border-[1px] bg-white/30 ">
                Equipments
              </button>
            </Link>
          </div>
        </div>
        <div
          id="div2"
          className="lg:w-[50%] mix-blend-multiply flex justify-center items-center w-[97%] relative h-[400px]"
        >
          <img src={homeimage} alt="image" className="h-[80%] w-[80%]" />
        </div>
      </div>
      <div className="w-full my-5">
        <div id="div3" className="w-full my-5 flex justify-center items-center">
          <h1 className=" p-5 pl-8 md:pl-0 text-2xl md:text-4xl">
            Electroplating Chemicals Manufacturer and Distributor.
          </h1>
        </div>
        <div id="div4" className="w-full my-5 flex justify-center items-center">
          <div className="border-[1px] border-black shadow-xl p-5 rounded-xl w-[90%] md:w-[50%] ">
            <h1>
              <span className="text-xl font-bold text-[#000288]">
                Prime Chemicals:
              </span>
              <br />
              Crafting Excellence. We make it all, proudly contributing to
              Pakistan's growth and beyond!
            </h1>
          </div>
        </div>
        <div id="div5" className="w-full my-5 flex justify-center items-center">
          <h1 className="p-3 text-[#000288] text-4xl">OUR EXPERTISE</h1>
        </div>
        <div
          id="div6"
          className="w-full place-items-center grid grid-cols-1 md:grid-cols-3 gap-4 p-5 my-14"
        >
          {Cards.map(({ id, name, desc, ankerLink, image }) => (
            <div
              key={id}
              style={{ backgroundImage: `url(${image || ""})` }}
              className="group rounded-lg w-full bg-cover bg-center overflow-hidden flex-row items-center md:w-[80%] h-[280px] shadow-xl cursor-pointer hover:scale-105 duration-500 transition-all bg-[#efdfd1] relative"
            >
              <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <div className="h-[160px]">
                  <h1 className="text-2xl text-left pl-2 pt-4 text-white">
                    <i>
                      <b>{name}</b>
                    </i>
                  </h1>
                  <h3 className="text-md text-left pl-2 pt-2 text-white">
                    {desc}
                  </h3>
                </div>
                <div className="flex relative justify-center w-full h-[100px] items-center">
                  <Link to={ankerLink} className="absolute bottom-0 right-6">
                    <button className="border border-white bg-transparent text-white hover:scale-105 transition-all px-4 py-1 rounded-full hover:bg-white/20">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full my-3 md:my-5 sm:my-10 p-4 flex flex-col justify-center items-center text-center">
        <h1 id="div7" className="sm:text-4xl font-bold sm:font-normal text-lg">
          We help customers to increase quality and profitability in their metal
          finishing business
        </h1>
      </div>

      <div
        id="div10"
        className="w-full mb-6 p-4 relative flex flex-col md:flex-row"
      >
        <div className="md:w-1/2 h-[600px] md:sticky md:top-0">
          <div id="div8" className="w-full h-full p-4">
            <video
              src={video}
              controls
              className="w-full max-w-[632px] h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div
          id="div9"
          className="md:w-[50%] mt-4 md:mt-0 rounded-xl w-full p-4 h-[600px] flex flex-col justify-center items-center"
        >
          <h1 className="px-2 w-[180px] py-3 text-center my-3 hover:scale-105  transition-all shadow-lg bg-opacity-50 hover:bg-green-500 bg-green-500 rounded-full">
            We Are Certified
          </h1>
          <div className="w-full h-[500px] relative rounded-xl bg-zinc-300">
            <img
              src={img1}
              alt="Image"
              className="w-[150px] h-[150px] rounded-xl absolute top-4 left-4"
            />
            <img
              src={img2}
              alt=""
              className="w-[150px] h-[150px] rounded-xl absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={img3}
              alt=""
              className="w-[150px] h-[150px] rounded-xl absolute bottom-4 right-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
