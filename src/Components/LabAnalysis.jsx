import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const LabAnalysis = () => {

  useGSAP(()=>{
    gsap.from("#div1", {
      x: -100,
      duration: 3,
      opacity: 0,
      delay:1
    })
    gsap.from("#div2", {
      x: 100,
      duration: 3,
      opacity: 0,
      delay:1
    })
  })
  return (
    <>
      <div className="w-full px-3 md:px-20 mt-24">
        <h1 className="text-4xl text-[#000288]">LabAnalysis</h1>
        <div className="w-full py-10">
          <p id="div1" className="text-justify tracking-tighter leading-1">
            We offer comprehensive <b><i className="text-[#000288]">lab facilities</i></b> for electroplating chemicals,
            providing <b><i className="text-black">high-quality</i></b> solutions for various metal plating
            applications. Our lab services include precise formulation, testing,
            and analysis of electroplating solutions, ensuring optimal
            performance and superior surface finishes for your components. With
            advanced equipment and expert support, we enable efficient and
            consistent electroplating results tailored to your specific needs.
          </p>
          <br />
          <p id="div2" className="text-justify tracking-tighter leading-1">
            <b><i className="text-[#000288]">Our electroplating</i></b> chemical lab facilities are equipped with
            state-of-the-art technology to support a wide range of metal plating
            processes, including decorative, functional, and corrosion-resistant
            coatings. We specialize in formulating and optimizing electroplating
            solutions for diverse industries, ensuring high-quality results with
            excellent adhesion, durability, and precision. Our team of skilled
            technicians and chemists provides thorough analysis,
            troubleshooting, and tailored solutions to meet the unique
            requirements of each project. Whether for small-scale research or
            large-scale production, we strive to offer reliable, efficient, and
            cost-effective electroplating chemical solutions that enhance the
            performance and aesthetics of your products.
          </p>
        </div>
      </div>
    </>
  );
};

export default LabAnalysis;
