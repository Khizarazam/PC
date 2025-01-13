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
        "Chromic acid is a highly corrosive and powerful acid composed of chromium trioxide (CrO₃) dissolved in water Chemical Formula: CrO₃ (Chromium trioxide) dissolved in water, often forming a solution.",
      btn: "Download now",
    },
    {
      title: "Nitric Acid",
      description:
        "Nitric acid (HNO₃) is a strong, highly corrosive acid commonly used in various industrial, chemical, and laboratory processes.",
      btn: "Download now",
    },
    {
      title: "MetaSilicate",
      description:
        "Metasilicate is a type of silicate compound that contains a silicate anion with the general chemical formula SiO₃²⁻.",
      btn: "Download now",
    },
    {
      title: "Sodium HypoPhosphite",
      description:
        "Sodium Hypophosphite (NaPO₂H) is a chemical compound that consists of sodium (Na), phosphorous (P), and oxygen (O) Chemical Formula: NaPO₂H Molecular Weight: Approximately 66.00 g/mol.",
      btn: "Download now",
    },
    {
      title: "Sodium HydroOxide",
      description:
        "Sodium hydroxide (NaOH), commonly known as lye or caustic soda, is a highly caustic and strong alkaline compound Chemical Formula: NaOH.",
      btn: "Download now",
    },
    {
      title: "Sodium MetaSilicate",
      description:
        "Sodium Metasilicate (Na₂SiO₃) is a sodium salt of metasilicic acid, and it is a compound commonly used in industrial and cleaning applications due to its alkaline nature and solubility in water Molecular Weight: Approximately 122.06 g/mol.",
      btn: "Download now",
    },
    {
      title: "Potassium Chloride",
      description:
        "Potassium chloride (KCl) is a common inorganic salt composed of potassium (K) and chlorine (Cl) Chemical Formula: KCl Molecular Weight: Approximately 74.55 g/mol.",
      btn: "Download now",
    },
    {
      title: "Zinc Chloride",
      description:
        "Zinc chloride (ZnCl₂) is an inorganic chemical compound composed of zinc and chlorine Molecular Weight: Approximately 136.3 g/mol.",
      btn: "Download now",
    },
    {
      title: "Boric Acid",
      description:
        "Boric acid (H₃BO₃) is a weak acid that contains boron, hydrogen, and oxygen Chemical Formula: H₃BO₃ or B(OH)₃ Molecular Weight: Approximately 61.83 g/mol.",
        
        
      btn: "Download now",
    },
    {
      title: "Nickle Sulphate",
      description:
        "Nickel sulfate (NiSO₄) is an inorganic compound composed of nickel, sulfur, and oxygen Molecular Weight: Approximately 154.75 g/mol (for the hexahydrate NiSO₄·6H₂O).",
      btn: "Download now",
    },
    {
      title: "Nickle Chloride",
      description:
        "Nickel chloride (NiCl₂) is an inorganic compound composed of nickel and chlorine Molecular weight  Anhydrous NiCl₂: Approximately 129.6 g/mol NiCl₂·6H₂O (hexahydrate): Approximately 237.7 g/mol.",
      btn: "Download now",
    },
    {
      title: "Copper Sulphate",
      description:
               "Copper sulfate (CuSO₄) is an inorganic compound made up of copper, sulfur, and oxygen Chemical Formula: CuSO₄ (anhydrous), CuSO₄·5H₂O (pentahydrate).",
      btn: "Download now",
    },
    {
      title: "Tin Cholride",
      description:
        "Tin chloride refers to a group of chemical compounds containing tin and chlorine Chemical Formula: SnCl₂ Molecular Weight: 189.64 g/mol.",
      btn: "Download now",
    },
    {
      title: "Tin Sulphate",
      description:
        "Tin sulfate (SnSO₄) is an inorganic compound composed of tin and sulfate Chemical Formula: SnSO₄ Molecular Weight: 214.7 g/mol.",
      btn: "Download now",
    },
    {
      title: "S-100(Degreaser)",
      description:
        "S-100 (in the context of degreaser) refers to a type of industrial cleaning product designed for removing oils, greases, and other contaminants from metal surfaces, machinery, and various equipment.",
      btn: "Download now",
    },
    {
      title: "Rack Insulaton Compound",
      description:
        "In the context of general chemicals, a rack insulation compound refers to a protective material or coating applied to racks, fixtures, or holding devices used in various chemical processes, such as electroplating, anodizing, or other industrial treatments.",
      btn: "Download now",
    },
    {
      title: "Primer",
      description:
        "In general chemicals, a primer refers to a type of preparatory coating applied to a surface before the application of a topcoat or final finish.",
      btn: "Download now",
    },
    {
      title: "PCR",
      description:
        "In the context of general chemicals, PCR typically refers to Post-Consumer Recycled materials, which are products made from recycled materials that have been used by consumers and then collected for recycling.",
      btn: "Download now",
    },
    {
      title: "Nickle Stripper",
      description:
        "A nickel stripper is a chemical solution or product designed to remove nickel plating from metal surfaces. It is commonly used in industries like metal finishing, electroplating, and repairing plated components.",
      btn: "Download now",
    },
    {
      title: "Sulpuric Acid",
      description:
        "Sulfuric acid (chemical formula: H₂SO₄) is a highly corrosive and strong mineral acid. It is one of the most widely used industrial chemicals, with applications ranging from fertilizer production to oil refining.",
      btn: "Download now",
    },
    {
      title: "ElectroLytic Cleaner",
      description:
        "An electrolyte cleaner is a type of cleaning solution or chemical used in electrochemical cleaning processes.",
      btn: "Download now",
    },
    {
      title: "Caustic Soda",
      description:
           "Caustic soda, also known as sodium hydroxide (NaOH), is a highly corrosive, alkaline compound that is commonly used in various industrial and chemical processes." ,
      btn: "Download now",
    },
    {
      title: "HydroChloric Acid (HCL)",
      description:
        "Hydrochloric acid (HCl) is a strong, corrosive, and highly reactive acid that is widely used in various industrial, laboratory, and household applications . As a strong acid, it dissociates completely in water, releasing hydrogen ions (H⁺) and chloride ions (Cl⁻).",
      btn: "Download now",
    },
    {
      title: "Dry Acid Salt",
      description:
        "Dry acid salt refers to a type of salt that is typically in a solid, crystalline form and releases acidic ions when dissolved in water, acting as an acid.",
      btn: "Download now",
    },
    {
      title: "Aluminium Cleaner",
      description:
        "Aluminum cleaner refers to a specialized cleaning solution or product designed to remove dirt, grime, oxidation, stains, and other contaminants from aluminum surfaces . Aluminum cleaners are commonly used in various industries, including aerospace, automotive, construction.",
      btn: "Download now",
    },
    {
      title: "Pickle Acid",
      description:
        "Pickle acid refers to a strong acid solution used in the pickling process, which is a method for cleaning and preparing metal surfaces, particularly steel and aluminum, by removing oxides, rust, scale, and other impurities .",
      btn: "Download now",
    },
    {
      title: "De-Scalent",
      description:
        "De-scalent (also known as descaling agent) is a chemical solution or substance used to remove scale (mineral deposits, usually calcium carbonate) and other unwanted build-up from various surfaces, particularly those exposed to hard water or high temperatures.",
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
                className=" text-justify tracking-tight p-2 my-8 mx-3 border-[1px] border-black rounded-lg"
              >
                <h1 className="text-xl text-[#000288]">{title}</h1>
                <p className="py-3 px-3 leading-none text-sm">{description}</p>
                <button className=" bg-[#000288] text-white border-[1px] border-black py-1 px-4 rounded-lg">
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
