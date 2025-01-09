import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GeneralChemicals = () => {
  const Card = [
    {
      title: "Chromic Acid",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Nitric Acid",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "MetaSilicate",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Sodium HypoPhosphite",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Sodium HydroOxide",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Sodium MetaSilicate",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Potassium Chloride",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Zinc Chloride",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Boric Acid",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Nickle Sulphate",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Nickle Chloride",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Copper Sulphate",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Tin Cholride",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Tin Sulphate",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "S-100(Degreaser)",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Rack Insulaton Compound",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Primer",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "PCR",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Nickle Stripper",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Sulpuric Acid",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "ElectroLytic Cleaner",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Caustic Soda",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "HydroChloric Acid (HCL)",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Dry Acid Salt",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Aluminium Cleaner",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Pickle Acid",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "De-Scalent",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
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
          GeneralChemicals
        </h1>
        <div id="div" className="w-full md:grid grid-cols-2">
          {Card.map(({ title, description, btn }, index) => {
            return (
              <div
                key={index}
                className="relative text-justify tracking-tight p-2 my-8 mx-3 border-[1px] border-black h-[130px] rounded-lg"
              >
                <h1 className="text-xl text-[#000288]">{title}</h1>
                <p className="py-1 px-3 leading-none text-sm">{description}</p>
                <button className="absolute bottom-3 hover:text-[#000288] border-[1px] border-black py-1 px-4 rounded-lg right-10">
                  {btn}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GeneralChemicals;
