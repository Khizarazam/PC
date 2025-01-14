import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Contact = () => {

  useGSAP(()=>{
    gsap.from("#div1", {
      x: -100,
      duration: 3,
      delay: 1,
      opacity: 0
    })
    gsap.from("#div2", {
      x: 100,
      duration: 3,
      delay: 1,
      opacity: 0
    })
  })

  return (
    <>
      <div className="w-full px-3 md:px-20 mt-24">
        {/* <h1 className="text-4xl text-[#000288]">Contact</h1> */}
        <div className="w-full md:mb-20 mb-48 md:flex justify-center items-center h-[500px] ">
          <div id="div1" className="md:w-[50%] my-40 md:my-0  flex justify-center items-center w-full">
            <h1 className="md:text-7xl text-5xl">Get In Touch</h1>
          </div>
          <div id="div2" className="md:w-[50%] border-2 shadow-xl border-black py-10 rounded-xl w-full flex justify-center items-center">
            <form>
              <div className="my-5">
                <h1 className="pl-1 pb-1 text-[#000288]">Full Name</h1>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="w-[300px] hover:border-[#000288] outline-none p-2 h-[35px] rounded-lg border-b-[1px] border-t-[1px] border-black"
                />
              </div>
              <div className="my-5">
                <h1 className="pl-1 pb-1 text-[#000288]">Email</h1>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-[300px] outline-none p-2 h-[35px] rounded-lg border-b-[1px] border-t-[1px] border-black"
                />
              </div>
              <div className="my-5">
                <h1 className="pl-1 pb-1 text-[#000288]">Message</h1>
                <textarea
                  type="text"
                  placeholder="Enter Your Message"
                  className="w-[300px] outline-none p-2 rounded-lg border-b-[1px] border-t-[1px] h-[120px] border-black"
                />
              </div>
              <button className="bg-[#000288] text-white font-bold w-full py-2 rounded-lg hover:bg-[#474add]">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
