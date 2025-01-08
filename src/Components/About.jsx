import React from 'react';
import basharat from '../assets/basharat-awan.jpg';
import shazerimg from '../assets/shazer-awan.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const About = () => {

  useGSAP(()=>{
    gsap.from("#div1",{
      x: -100,
      opacity: 0,
      duration: 3,
      delay: 1
    });
    gsap.from("#div2", {
      x: -100,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#div0",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#div3", {
      x: 100,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#div0",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#div4", {
      x: -100,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#div00",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#div5", {
      x: 100,
      duration: 3,
      delay: 1,
      ease: "power2.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#div00",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
  })
  return (
    <>
      <div className="w-full px-3 md:px-20 mt-24">
        <h1 className="text-4xl text-[#000288]">About</h1>
        <div id='div1' className="w-full">
        <div className="w-full flex justify-start items-start">
          <h1 className="text-2xl pt-10 pb-4 font-bold text-[#000288] uppercase">
            Company OverView:
          </h1>
        </div>
        <div className="w-full px-2 tracking-tight text-justify leading-none">
          <p>
            <b className="text-lg text-[#000288]">Prime Chemicals </b>is a full
            line{" "}
            <b className="text-lg text-black">
              Electroplating Chemicals Manufacturer and Distributor.
            </b>{" "}
            It supplies chemicals, raw materials, plants and accessories to the
            market place.{" "}
            <b className="text-lg text-[#000288]">Prime Chemicals</b>, in
            addition, also provides training and consulting services. The
            company also provides with on-site maintenance for the process with
            the help of its technical support team. This greatly reduces the
            production losses incurred in case of process anomalies. The company
            also offers free chemical analysis for various processes it offers.
            The technical experts also help the clients to achieve their quality
            and production objectives by studying the process details. The
            company offers consultation and turnkey projects for its clients.
            <br />
            <br /> Our
            <b className="text-lg text-black"> Technical Support Team </b>{" "}
            works by helping you to use our technology and expertise in your
            Metal Finishing business. By giving you all the information and
            training through various aspects of plant design and installation,
            we ensure increase in productivity and improve your profitability.
            <br />
            <br /> The{" "}
            <b className="text-lg text-[#000288]">
              company also offers its expertise
            </b>{" "}
            in the field of electroplating and surface treatment formulations.
            The company offers to collaborate with companies with similar
            interests to provide better products and technologies at a very
            competitive price in various markets. The company has a belief in
            the ideology that there is more prospect of growth in sharing the
            results of Research and Development in any field thus having a
            combined effort.
          </p>
        </div>
      </div>
      <hr className="w-full border-0 bg-gradient-to-r from-transparent mt-5 md:mt-20 via-white/10 to-transparent h-[2px]" />
      <div className="w-full my-10 md:my-20 px-4 md:px-8">
        <div  id='div0' className="flex flex-col md:flex-row gap-6 mb-10">
          <img
            id='div2'
            src={basharat}
            alt="Basharat Javed Awan"
            className="w-full md:w-[40%] rounded-lg shadow-xl h-[250px] md:h-[350px] object-cover"
          />
          <div id='div3' className="w-full md:w-[70%] rounded-lg p-4">
            <h1 className="text-xl md:text-2xl font-bold text-[#000288]">
              Basharat Javed Awan <br /> CEO & Founder
            </h1>
            <p className="mt-2 leading-tight text-justify">
              Mr. Basharat, CEO and founder of Prime Chemicals, has over 35
              years of experience in the surface finishing industry with an
              extensive background in plating shop management and operations. He
              is a member of Paksitan Association of Automotive Parts &
              Accessories Manufacturers{" "}
              <b className="text-lg text-[#000288]">
                <i>(PAAPAM)</i>
              </b>
              . Mr. Basharat has advised on product strategies and market trends
              with plating shops and distribution partners to help them grow
              their businesses. Mr. Basharat holds a B.S. Degree in Chemical
              Engineering from University of the Punjab.
            </p>
          </div>
        </div>

        <div id='div00' className="flex mt-5 flex-col md:flex-row gap-6">
          <div id='div4' className="w-full md:w-[70%] rounded-lg p-4 order-2 md:order-1">
            <h1 className="text-xl md:text-2xl font-bold text-[#000288]">
              Shazer Javed Awan <br /> Director Production
            </h1>
            <p className="mt-2 leading-tight text-justify">
              Shazer is a young and passionate chemical engineer. Shazer holds a
              B.S. Degree in Chemical Engineering from University of Engineering
              and Technology.
            </p>
          </div>
          <img
            id='div5'
            src={shazerimg}
            alt="Shazer Javed Awan"
            className="w-full order-1 md:order-2 md:w-[40%] rounded-lg shadow-xl h-[250px] md:h-[350px] object-cover"
          />
        </div>
      </div>
      </div>
    </>
  )
}

export default About
