import React from "react";

export default function Donate() {
  return (
    <section id="donate" className="w-full bg-black z-[2] relative py-32 max-lg:py-10 text-white">
      <div className="w-full max-w-[1560px] mx-auto px-6 flex flex-col items-center text-center z-10 px-4">
        {/* Main Title */}
        <h1 className="text-white text-[60px] max-lg:text-[35px] georgia-pro-light leading-[1] [text-shadow:0_0_10px_rgba(255,255,255,0.8)] tracking-[-0.02em] mb-2">
          <span className="italic">Donate?</span>
        </h1>

        <p className="text-white/50 text-[14px] max-w-[250px] mx-auto poppins-light">
          Any amount goes a long way
        </p>
        <div className="inline-block max-w-[1300px] h-[500px] px-10 py-4 w-full bg-[#ce2017] text-black rounded-[30px] poppins font-medium text-[16px] my-10 max-md:mb-0"></div>
      </div>
    </section>
  );
}
