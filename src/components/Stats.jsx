import React from "react";
import CountUp from "react-countup";
import { statsData } from "../data/statsData";

export default function Stats() {
  return (
    <section className="w-full bg-black z-[2] relative pb-20 text-white">
      <div className="w-full max-w-5xl mx-auto">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 py-12 border-b border-white/10 last:border-b-0"
          >
            {/* Number Section */}
            <div className="w-full md:w-auto flex justify-center md:justify-end min-w-[200px]">
              <span className="georgia-pro-light text-[80px] md:text-[70px] leading-none">
                <CountUp
                  start={0}
                  end={stat.value} // Use the dynamic value from your data
                  duration={2.5}
                  enableScrollSpy={true} // <--- Only starts when visible
                  scrollSpyOnce={true} // <--- Only runs once (doesn't reset on scroll up)
                  separator=""
                  suffix="+" // Adds the + sign automatically
                  formattingFn={(value) => value.toString().padStart(2, "0")} // Keeps the "06" format
                />
                +
              </span>
            </div>

            {/* Text Section */}
            <div className="max-w-[370px] flex flex-col w-full text-center md:text-left">
              <h3 className="text-[18px] poppins-light md:text-[18px] font-normal text-gray-100 mb-3">
                {stat.title}
              </h3>
              <p className="text-white/50 poppins-light text-base md:text-[14px] leading-relaxed font-light">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
