import React from "react";
import CountUp from "react-countup";
import { statsData } from "../data/statsData";

export default function Stats() {
  return (
    <section className="w-full bg-black z-[2] relative pb-10 md:pb-20 text-white">
      {/* Added px-6 so content doesn't touch the screen edge on mobile */}
      <div className="w-full max-w-5xl mx-auto px-10 md:px-0">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="
              flex flex-col md:flex-row 
              items-center justify-center 
              gap-4 md:gap-16 
              py-8 md:py-12 
              border-b border-white/10 last:border-b-0
            "
          >
            {/* Number Section */}
            {/* Removed min-w-[200px] for mobile to avoid alignment bugs */}
            <div className="w-full md:w-auto md:min-w-[200px] flex justify-center md:justify-end">
              <span className="georgia-pro-light text-[50px] md:text-[70px] leading-none text-white/90">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  separator=""
                  // Removed the suffix prop here to avoid "++" duplication
                  // since you have a manual "+" below
                  formattingFn={(value) => value.toString().padStart(2, "0")}
                />
                +
              </span>
            </div>

            {/* Text Section */}
            <div className="flex flex-col w-full text-center md:text-left max-w-[470px] md:max-w-[370px]">
              <h3 className="text-[18px] poppins-light font-normal text-gray-100 mb-2 md:mb-3">
                {stat.title}
              </h3>
              {/* Adjusted font sizes for readability */}
              <p className="text-white/50 poppins-light text-[14px] leading-relaxed font-light">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}