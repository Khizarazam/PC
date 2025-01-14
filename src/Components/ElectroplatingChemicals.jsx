import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pdffile from "../assets/pdf.pdf";

gsap.registerPlugin(ScrollTrigger);

const ElectroplatingChemicals = () => {
  const Card = [
    {
      title: "Nickle",
      description:
        "Nickle is a fascinting silvery-white metal with atomic number 28 that combines strength, versatility , and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Brass",
      description:
        "Brass is a versatile metal alloy primarily composed of copper and zinc often with small amounts of other elements like lead, tin or iron.",
      btn: "Download now",
    },
    {
      title: "Acid Copper",
      description:
        "Acid Copper refers to a type of copper plating process where copper is deposited onto a substrate(such as metal or plastic) using an acidic electrolyte solution.",
      btn: "Download now",
    },
    {
      title: "Cynide Zinc",
      description:
        "Cynide Zinc plating is valude for its ability to produce a smooth,uniform coating of zinc that offers exellent corrosion resistance particularly for industerial and automotive applications.",
      btn: "Download now",
    },
    {
      title: "Tin",
      description:
        "Tin is soft silvery-white metal with the chemical symbol Sn and atomic number 50 it is known for  its corrosion resistance ,low toxicity,and ability to from alloys with other metal such as bronze and pewter.",
      btn: "Download now",
    },
    {
      title: "Acid Zinc",
      description:
        "The Acid Zinc process is commonly used for coating parts to provide corrosion resistance, improve the appearnce, and increase durability.",
      btn: "Download now",
    },
    {
      title: "Cynide Copper",
      description:
        "The Cynide Copper process is valued for producing high-quality copper coating with a smooth uniform finish .",
      btn: "Download now",
    },
    {
      title: "Chrome",
      description:
        "Chrome plating is particularly popular for automotive parts,faucets, and appliances due to its shiney, mirror like finish.",
      btn: "Download now",
    },
    {
      title: "Silver",
      description:
        "Silver is a chemical with the symbol Ag and atomic number 47 it is soft white lustrous metal kown for its high conductivity of heat and eletricity.",
      btn: "Download now",
    },
    {
      title: "Imitaion Gold",
      description:
        "Imitation Gold refers to materials or finishes that are designed to mimic the appearance of real gold but are made from less expensive or less valuable substances.",
      btn: "Download now",
    },
    {
      title: "24 Karat Gold",
      description:
        "24 karat gold (24K gold) refers to gold that is pure, with no other metals or alloys mixed inThe term karat is used to measure the purity of gold, with 24 karats representing pure gold.",
      btn: "Download now",
    },
    {
      title: "Chromatings",
      description:
        "The chromating process creates a thin, protective oxide layer that helps to prevent corrosion, improve wear resistance, and enhance the appearance of the metal.",
      btn: "Download now",
    },
    {
      title: "Water Based Lacquer",
      description:
        "Water-based lacquer is a type of clear or tinted protective finish used to coat and protect surfaces, such as wood, metal, or plastic.",
      btn: "Download now",
    },
    {
      title: "Stainless Stell Finishing",
      description:
        "Stainless steel finishing refers to the various processes applied to stainless steel surfaces to enhance their appearance, improve corrosion resistance, or prepare the surface for further treatments or fabrication.",
      btn: "Download now",
    },
    {
      title: "ElectroPhoretic Lacquer",
      description:
        "Electrophoretic lacqure often referred to as electrophoretic coating or e-coating, is a type of coating process that uses electrical current to deposit a layer of paint or lacquer onto a substrate, typically metal.",
      btn: "Download now",
    },
    {
      title: "Aluminium Finishing",
      description:
        "Aluminum finishing refers to the various processes used to improve the appearance, durability, and performance of aluminum surfaces .",
      btn: "Download now",
    },
    {
      title: "Dry Acid Salt",
      description:
        "Dry acid salt is a term typically used to describe a salt that is derived from an acid but is in its anhydrous (dry) form, meaning it does not contain water molecules in its structure.",
      btn: "Download now",
    },
    {
      title: "Nickle Stripper",
      description:
        "A nickel stripper is a chemical solution or product used to remove nickel plating from metal surfaces. Nickel plating is often applied to parts for its corrosion resistance, aesthetic appearance, and durability.",
      btn: "Download now",
    },
    {
      title: "Primer",
      description:
        "A primer is a preparatory coating applied to a surface before the application of a finish coat, such as paint or varnish.",
      btn: "Download now",
    },
    {
      title: "Rack Insulation Compound",
      description:
        "Rack insulation compound is a specialized material used to insulate electrical racks, which are structures that house and organize electrical components, such as circuit boards, transformers, and other electronic equipment.",
      btn: "Download now",
    },
    {
      title: "Super Protect Lacquer",
      description:
        "Super Protect Lacquer refers to a high-performance protective coating designed to provide an exceptionally durable, long-lasting layer of protection for various surfaces, typically in industrial and commercial applications.",
      btn: "Download now",
    },
    {
      title: "Trichrome 1706",
      description:
        "Trichrome 1706 is a specific type of chromate conversion coating typically used for corrosion protection and surface treatment of metals, particularly aluminum and its alloys.",
      btn: "Download now",
    },
  ];

  useGSAP(() => {
    const cards = document.querySelectorAll("#div > div");

    cards.forEach((card) => {
      gsap.from(card, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card, // Changed to individual card trigger
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment to debug
        },
      });
    });
  });

  return (
    <>
      <div className="w-full px-3 md:px-20 mt-24">
        <h1 className="md:text-4xl text-3xl text-[#000288]">
          ElectroPlatingChemicals
        </h1>
        <div id="div" className="w-full md:grid grid-cols-2">
          {Card.map(({ title, description, btn }, index) => {
            return (
              <div
                key={index}
                className=" text-justify tracking-tight p-2 my-8 mx-3 border-[1px] border-black h-[130px] rounded-lg"
              >
                <div className="w-full h-[60%]">
                  <h1 className="text-xl text-[#000288]">{title}</h1>
                  <p className="py-1 px-3 leading-none text-sm">
                    {description}
                  </p>
                </div>
                <div className="w-full h-[30%] mt-3">
                  <a href={pdffile} download="NickleDataSheet.pdf">
                    <button className="bg-[#000288] w-full hover:bg-[#4a4ce2] text-white border-[1px] border-black py-1 px-4 rounded-lg">
                      {btn}
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ElectroplatingChemicals;
