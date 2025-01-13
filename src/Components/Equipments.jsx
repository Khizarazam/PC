import React from "react";
import plants from '../assets/platingTank.jpg';
import filter from '../assets/filter.jpg';
import Rectifier from '../assets/rectifiers.jpeg';
import dosingPump from '../assets/dosingpump.jpg';
import ro2000 from '../assets/ro2000.jpeg';
import ro4000 from '../assets/ro4000.jpeg';
import polishingbelts from '../assets/polishingbelts.jpg';
import phpaper from '../assets/phpaper.jpg';
import heater from '../assets/heater.jpeg'
import vibrator from '../assets/vibrator.gif';
import anodebasket from '../assets/anodebasket.jpeg'
import metalSurfaceMicroscope from '../assets/metalSurfaceMicroscope.jpg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Equipments = () => {
  const equipmentCards = [
    {
      title: "Plating Tanks and Barrels (PP and PVC)",
      description:
        "Heavy duty fabricated tanks and barrals in various sizes or as per your requirements are available.",
      image: plants,
    },
    {
      title: "Filter Units",
      description:
        "A filter pump is an essential device used in various applications, primarily to maintain the cleanliness of liquids by removing debris, particles, and contaminants.",
      image: filter,
    },
    {
      title: "Rectifiers",
      description:
        "Rectifiers are electronic devices that convert alternating current (AC) into direct current (DC), allowing for the controlled flow of electricity in circuits.",
      image: Rectifier,
    },
    {
      title: "Metal Surface Microscopes",
      description:
        "Metal surface microscopes are specialized instruments used to examine the fine details, texture, and structure of metal surfaces at high magnifications.",
      image: metalSurfaceMicroscope,
    },
    {
      title: "Dosing Pumps",
      description:
        "A dosing pump is a precise mechanical device used to inject a specific volume of liquid, such as chemicals or additives, into a system at a controlled rate.",
      image: dosingPump,
    },
    {
      title: "Polishing Belts",
      description:
        "Polishing belts are abrasive tools used in metalworking, woodworking, and manufacturing to smooth and refine surfaces by grinding away imperfections, resulting in a shiny, polished finish.",
      image: polishingbelts,
    },
    {
      title: "pH Papers",
      description:
        "pH papers are strips of paper treated with a pH-sensitive dye that change color when exposed to acidic or alkaline substances, providing a simple and quick method for measuring the pH level of a solution",
      image: phpaper,
    },
    {
      title: "2000 litre per hour RO plant",
      description:
        "A 2000-litre per hour (LPH) Reverse Osmosis (RO) plant is a water purification system designed to produce 2000 liters of purified water per hour by removing dissolved salts, impurities, and contaminants through a semi-permeable membrane, making it suitable for medium-scale industrial, commercial, or residential use.",
      image: ro2000,
    },
    {
      title: "4000 litre per hour RO plant",
      description:
        "A 4000-litre per hour (LPH) Reverse Osmosis (RO) plant is a water purification system designed to produce 2000 liters of purified water per hour by removing dissolved salts, impurities, and contaminants through a semi-permeable membrane, making it suitable for medium-scale industrial, commercial, or residential use.",
      image: ro4000,
    },
    {
      title: "Vibratory Polishing Machines",
      description:
        "Vibratory polishing machines use vibration and abrasive media to smooth and polish metal parts, enhancing surface finish and reducing roughness.",
      image: vibrator,
    },
    {
      title: "Anode Basket",
      description:
        "An anode basket is a crucial component in electroplating and electrochemical processes, designed to hold anodes in place while ensuring uniform current distribution and efficient plating or metal deposition onto the workpieces.",
      image: anodebasket,
    },
    {
      title: "Heaters (Glass, Titanium)",
      description:
        "A heater for heating chemicals is specifically designed to provide controlled and uniform heat to chemicals in industrial processes, such as mixing, reactions, or temperature-sensitive applications, ensuring safety, efficiency, and precision in temperature management without compromising the chemical integrity.",
      image: heater,
    },
  ];

  useGSAP(() => {
    const cards = document.querySelectorAll("#div > div");

    cards.forEach((card) => {
      gsap.from(card, {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: card,
          start: "top 50%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  return (
    <>
      <div className="w-full px-2 md:px-20 mt-24">
        <h1 className="text-4xl text-[#000288]">Equipments</h1>
        <div id="div" className="w-full">
          {equipmentCards.map(({ title, description, image }, index) => {
            return (
              <>
                <div
                  key={index}
                  className="w-full my-10 flex flex-col items-center border-2 border-black rounded-xl shadow-xl  justify-center gap-5 py-5 "
                >
                  <div className="md:w-[70%] text-justify tracking-tighter w-full px-3">
                    <h1 className="text-3xl tracking-tighter py-2 text-[#000288]">
                      {title}
                    </h1>
                    <p className=" tracking-tighter">{description}</p>
                  </div>
                  <div className="mt-8 w-[40%] h-[40%] md:w-[25%] md:h-[25%]">
                    <img
                      src={image}
                      id="image"
                      alt="Image"
                      className="rounded-lg border-[1px] border-black hover:scale-105 duration-300"
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Equipments;
