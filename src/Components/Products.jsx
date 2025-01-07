import React from "react";
import backgroundImage from "../assets/bg-2.jpg";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Products = () => {
  const card = [
    {
      id: 0,
      title: "ElectroPlating Chemicals:",
      description:
        "Electroplating chemicals are specialized substances used in the electroplating process, where a metal is deposited onto a surface using an electric current.",
      btn: "View More",
      to: "ElectroplatingChemicals",
      bgImage: backgroundImage,
    },
  ];

  const card2 = [
    {
      id: 1,
      title: "General Chemicals:",
      description:
        "General chemicals are substances used in industries for manufacturing, agriculture, and everyday products.",
      btn: "View More",
      to: "GeneralChemicals",
      bgImage: backgroundImage,
    },
  ];

  useGSAP(() => {
    gsap.from("#div1", {
      x: -100,
      opacity: 0,
      duration: 3,
      delay: 1,
    });
    gsap.from("#div2", {
      x: 100,
      opacity: 0,
      duration: 3,
      delay: 1,
    });
  });

  return (
    <>
      <div className="w-full mt-24">
        <h1 className="text-4xl text-[#000288] pl-20">Products</h1>
        <div className="w-full p-10  md:flex gap-5">
          {card.map(({ title, description, btn, to, id }) => {
            return (
              <>
                <div id="div1" className="gap-5">
                  <div className="md:w-[320px] w-full border-[1px] border-black hover:scale-105 duration-300 hover:shadow-xl relative p-3 h-[290px] rounded-xl">
                    <h1 className="text-[24px] text-nowrap text-[#000288]">
                      {title}
                    </h1>
                    <p className="pt-3 leading-tight tracking-tight text-normal">
                      {description}
                    </p>
                    <button className="border-[1px] hover:text-[#000288] border-black bottom-5 right-5 absolute rounded-full px-5 hover:scale-105 duration-300 hover:shadow-xl py-2">
                      <Link to={to}>{btn}</Link>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          <p id="div2" className="text-justify pt-10 md:pt-5">
            <b>
              <i className="text-[#000288]">Electroplating chemicals</i>
            </b>{" "}
            are specialized solutions used in the process of electroplating,
            which involves the deposition of a thin layer of metal onto a
            substrate. These chemicals play a crucial role in controlling the
            plating process, enhancing the quality of the coating, and achieving
            the{" "}
            <b>
              <i className="text-[#000288]">desired characteristics</i>
            </b>
            , such as durability, conductivity, and aesthetic finish.
            <br />
            <br /> Common electroplating chemicals include{" "}
            <b>
              <i className="text-[#000288]">metal salts</i>
            </b>{" "}
            (such as gold, silver, copper, and nickel salts), electrolytes,
            buffers, and additives like brighteners and leveling agents that
            optimize the coating process. By carefully adjusting the
            concentration and composition of these chemicals, manufacturers can
            fine-tune the plating thickness, uniformity, and hardness to meet{" "}
            <b>
              <i className="text-[#000]">specific industrial requirements</i>
            </b>
            .
          </p>
        </div>
        <div className=" w-full p-10  md:flex gap-5">
          {card2.map(({ title, description, btn, to, id }) => {
            return (
              <>
                <div id="div1" className="gap-5">
                  <div className="md:w-[320px] w-full border-[1px] border-black hover:scale-105 duration-300 hover:shadow-xl relative p-3 h-[290px] rounded-xl">
                    <h1 className="text-[24px] text-nowrap text-[#000288]">
                      {title}
                    </h1>
                    <p className="pt-3 leading-tight tracking-tight text-normal">
                      {description}
                    </p>
                    <button className="border-[1px] hover:text-[#000288] border-black bottom-5 right-5 absolute rounded-full px-5 hover:scale-105 duration-300 hover:shadow-xl py-2">
                      <Link to={to}>{btn}</Link>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          <p id="div2" className="text-justify pt-10 md:pt-5">
            <b><i className="text-[#000288]">General Chemicals</i></b> is a company that specializes in the manufacturing
            and distribution of a wide range of industrial chemicals. They
            provide <b><i className="text-[#000]">high-quality</i></b> chemicals for diverse industries, including
            agriculture, food processing, water treatment, and pharmaceuticals.<br /><br />
            The company is known for its commitment to <b><i className="text-[#000288]">sustainability</i></b> and
            <b><i className="text-[#000288]">innovation</i></b>, offering products that support environmental
            responsibility and operational efficiency. With a focus on customer
            satisfaction, General Chemicals delivers customized solutions to meet
            the unique needs of businesses, ensuring optimal performance and
            safety in their operations.
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;
