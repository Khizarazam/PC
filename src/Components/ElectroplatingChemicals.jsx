import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ElectroplatingChemicals = () => {
  const Card = [
    {
      title: "Nickle",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Brass",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Acid Copper",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Cynide Copper",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Tin",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Acid Zinc",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Cynide Zinc",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Chrome",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Silver",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Imitaion Gold",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "24 Karat Gold",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Chromatings",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "Water Based Lacquer",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Stainless Stell Finishing",
      description:
        "Nickel is a fascinating silvery-white metal with atomic number 28 that combines strength, versatility, and remarkable properties.",
      btn: "Download now",
    },
    {
      title: "ElectroPhoretic Lacquer",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Aluminium Finishing",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Dry Acid Salt",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Nickle Stripper",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Primer",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Rack Insulation Compound",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Super Protect Lacquer",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
      btn: "Download now",
    },
    {
      title: "Trichrome 1706",
      description:
        "Acid Zinc plating is an excellent electroplating process that delivers superior corrosion protection and a bright, attractive finish.",
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
        }
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

export default ElectroplatingChemicals;
