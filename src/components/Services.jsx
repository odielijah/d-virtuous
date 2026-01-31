import { services } from "../data/servicesData";

export default function Services() {
  return (
    <section
      id="services"
      // 1. OUTER WRAPPER: Handles the background color (Full Width)
      className="w-full bg-black z-[2] relative pt-40 pb-40 text-white"
    >
      {/* 2. INNER CONTAINER: Handles the width constraints (Centered) */}
      <div className="w-full max-w-[1220px] mx-auto px-10">
        {" "}
        {/* Added px-10 for safety on small screens */}
        {/* --- Header Section --- */}
        <div
          id="services-title"
          className="flex justify-center flex-col items-center w-full mb-24"
        >
          <h1 className="text-[60px] leading-[1.1] georgia-pro-light [text-shadow:0_0_10px_rgba(255,255,255,0.8)] tracking-[-0.02em] mb-4">
            <span className="italic">With</span> our services
          </h1>
          <p className="text-center text-[14px] opacity-60 poppins-light font-light">
            We help you achieve more at every stage <br /> of business growth
          </p>
        </div>
        {/* --- List Container --- */}
        <div id="service-list-container" className="flex flex-col w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex w-full py-16 border-b border-white/20 gap-[5rem] items-start justify-center"
            >
              {/* --- Column 1: Title --- */}
              <div className="w-[30%] flex flex-col gap-2">
                <h1 className="text-[40px] leading-tight georgia-pro-light [text-shadow:0_0_15px_rgba(255,255,255,0.5)]">
                  {service.title}
                </h1>
              </div>

              {/* --- Column 2: The List --- */}
              <div className="w-[20%] pt-2">
                {service.servicesList.map((item) => (
                  <span
                    key={item}
                    className="block poppins-light opacity-50 text-[14px] leading-[2]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* --- Column 3: The Image --- */}
              <div className="w-[35%] flex">
                <div className="rounded-[12px] overflow-hidden w-full max-w-[500px] aspect-[16/9] bg-[#1a1a1a]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
