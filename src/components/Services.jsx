import { useState } from "react";
import { services } from "../data/servicesData";

export default function Services() {
  const [openServiceId, setOpenServiceId] = useState(null);

  const toggleService = (id) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="w-full bg-black z-[2] relative py-40 max-lg:py-20 text-white"
    >
      <div className="w-full max-w-[1220px] mx-auto px-10 max-md:px-5">
        {/* --- Header Section --- */}
        <div className="flex justify-center flex-col items-center w-full mb-24 max-md:mb-12">
          <h1 className="text-[60px] leading-[1] georgia-pro-light [text-shadow:0_0_10px_rgba(255,255,255,0.8)] text-center tracking-[-0.02em] mb-4 max-lg:text-[35px]">
            <span className="italic">With</span> our services
          </h1>
          <p className="text-center text-[14px] opacity-60 poppins-light max-w-[250px] font-light">
            We help you achieve more at every stage of business growth
          </p>
        </div>

        {/* --- List Container --- */}
        <div id="service-list-container" className="flex flex-col w-full">
          {services.map((service, index) => {
            const isOpen = openServiceId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`
                  flex w-full py-16 border-b border-white/20 items-start justify-center transition-all duration-300
                  /* Gaps: Wide on desktop, smaller on tablet */
                  gap-[2rem] xl:gap-[5rem]
                  /* Mobile: Stack vertically */
                  max-md:flex-col max-md:gap-6 max-md:py-8 max-md:cursor-pointer
                `}
              >
                {/* --- Column 1: Title --- */}
                <div
                  className="
                    flex flex-col gap-2 
                    w-[30%] max-lg:w-[30%] /* Desktop/Tablet Width */
                    max-md:w-full max-md:flex-row max-md:justify-between max-md:items-center
                  "
                >
                  <h1
                    className="
                        georgia-pro-light leading-tight [text-shadow:0_0_15px_rgba(255,255,255,0.5)]
                        text-[32px] lg:text-[40px] max-[400px]:text-[22px]
                      "
                  >
                    {service.title}
                  </h1>

                  {/* Mobile Icon (Animated Plus) */}
                  <div className="hidden max-md:flex items-center justify-center w-8 h-8">
                    <span
                      className={`
                        text-xl leading-none mb-[2px] transition-transform duration-300 ease-in-out
                        ${isOpen ? "rotate-45" : "rotate-0"}
                      `}
                    >
                      +
                    </span>
                  </div>
                </div>

                {/* --- CONTENT WRAPPER (List + Image) --- */}
                <div
                  className={`
                    md:flex md:flex-1 justify-between md:opacity-100
                    max-md:grid max-md:w-full max-md:transition-[grid-template-rows,opacity,margin] max-md:duration-500 max-md:ease-out
                    ${
                      isOpen
                        ? "max-md:grid-rows-[1fr] max-md:opacity-100 max-md:mt-4"
                        : "max-md:grid-rows-[0fr] max-md:opacity-0 max-md:mt-0"
                    }
                  `}
                >
                  <div className="overflow-hidden flex md:contents max-md:flex-col max-md:gap-8">
                    {/* --- Column 2: The List --- */}
                    <div className="w-full md:w-[35%] xl:w-[30%] pt-2 max-md:pt-0">
                      {service.servicesList.map((item) => (
                        <span
                          key={item}
                          className="block poppins-light opacity-50 text-[12px] lg:text-[14px] leading-[2]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* --- Column 3: The Image --- */}
                    <div className="flex-1 md:flex-none md:w-[50%]">
                      <div className="rounded-[12px] overflow-hidden w-full max-w-[500px] max-md:max-w-full aspect-[16/9] bg-[#1a1a1a]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
