import React from "react";

export default function Donate() {
  return (
    <section id="donate" className="w-full bg-black z-[2] relative py-32 text-white">
      <div className="w-full max-w-[1560px] mx-auto px-6 flex flex-col items-center text-center mb-10 z-10 px-4">
        {/* Main Title */}
        <h1 className="text-white text-[50px] md:text-[60px] georgia-pro-light leading-[1.1] [text-shadow:0_0_10px_rgba(255,255,255,0.8)] tracking-[-0.02em] mb-2">
          <span className="italic pr-[1.2rem]">Get</span>
          in touch with us
        </h1>

        <p className="text-white/50 text-[16px] poppins-light">
          We're always up for a good coffee chat
        </p>
        <div className="inline-block max-w-[1300px] h-[500px] px-10 py-4 w-full bg-[#ce2017] text-black rounded-[30px] poppins font-medium text-[16px] my-20"></div>
      </div>
    </section>
  );
}
