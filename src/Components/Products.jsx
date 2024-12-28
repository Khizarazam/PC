import React from "react";
import backgroundImage from "../assets/bg-2.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  const card = [
    {
      title: "ElectroPlating Chemicals",
      description:
        "Electroplating chemicals are specialized substances used in the electroplating process, where a metal is deposited onto a surface using an electric current.",
      btn: "View More",
      to: "ElectroplatingChemicals",
      bgImage: backgroundImage,
    },
    {
      title: "General Chemicals",
      description:
        "General chemicals are substances used in industries for manufacturing, agriculture, and everyday products.",
      btn: "View More",
      to: "GeneralChemicals",
      bgImage: backgroundImage,
    },
  ];

  return (
    <>
      <div className="px-20 py-10 lg:flex w-full gap-5">
        {card.map(({ title, description, btn, to }, index) => {
          return (
            <div
              key={index}
              className="w-[300px] relative overflow-hidden  h-[300px] hover:scale-105 duration-300 p-5 border-black border-2 rounded-xl"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-2xl leading-tight font-bold">{title}</h2>
              <p className="tracking-tighter leading-4 py-2">{description}</p>
              <div className="w-full h-[50px] bottom-8 left-32 absolute"> 
                <button className="px-5 hover:scale-105 duration-300 hover:bg-zinc-300 rounded-full my-3 py-3 border-2 border-black w-[150px] text-center">
                  <Link to={to}>{btn}</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
