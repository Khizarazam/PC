import React from "react";
import service1 from "../assets/services1.jpg";
import service2 from "../assets/services2.jpg";
import service3 from "../assets/services3.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesCard = [
    {
      title: "CHEMICAL LABORATORY",
      description:
        "We provide, complete lab facilities, analysis and testing of your electroplating systems and metal finishing procedures. Our team of chemists and engineers goes an extra mile in helping you and achieving you success.",
      image: service1,
    },
    {
      title: "Salt Spray Test Machine",
      description:
        "We provide, Salt Spray Test facility to keep our customers upto-date with the quality of corrosion protection of their components. We work with our clients on a wide range of projects helping them solve their materials problems.",
      image: service2,
    },
    {
      title: "Electroplating Plant",
      description:
        "We have in-house electroplating plants, providing you Bright Nickel, Semi-Bright Nickel, Acid Zinc, Cyanide Copper and Acid Copper electroplating services. Along with electroplating services, other metal finishing facilities, are also available in-house.",
      image: service3,
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
        <h1 className="text-4xl text-[#000288]">Services</h1>
        <div id="div" className="w-full">
          {servicesCard.map(({ title, description, image }, index) => {
            return (
              <>
                <div
                key={index} className="w-full my-10 flex flex-col items-center border-2 border-black rounded-xl shadow-xl  justify-center gap-5 py-5 ">
                  <div className="md:w-[70%] text-justify tracking-tighter w-full px-3">
                    <h1 className="text-3xl text-nowrap py-2 text-[#000288]">
                      {title}
                    </h1>
                    <p>{description}</p>
                  </div>
                  <div className="mt-8">
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

export default Services;
