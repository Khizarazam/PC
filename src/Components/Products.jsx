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
      <div className="w-full pl-20 text-[#000288] mt-24">
        <h1 className="text-4xl">Products</h1>
      </div>
    </>
  );
};

export default Products;
