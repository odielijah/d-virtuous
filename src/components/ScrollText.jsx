import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

import { LeftWreath, RightWreath } from "../components/icons/Wreaths";
import { brands } from "../data/brandLogos";

// --- TextReveal Reusuable Component ---
const TextReveal = () => {
  const container = useRef(null);
  const text =
    "We craft brand identities, narratives, and digital experiences that keep up with your ambition. So you can focus on building what matters, while we shape how the world sees it.";

  const words = text.split(" ");

  useGSAP(
    () => {
      const chars = container.current.querySelectorAll(".char");

      gsap.fromTo(
        chars,
        { opacity: 0.4, color: "#555" },
        {
          opacity: 1,
          color: "white",
          duration: 1,
          stagger: 0.03,
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: true,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="max-w-[1350px] text-center leading-[-0.02em]"
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block whitespace-nowrap"
          style={{ marginRight: "0.2em" }}
        >
          {word.split("").map((char, j) => (
            <span key={j} className="char inline-block">
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default function ScrollText() {
  // 1. Create a "Block" of logos that is wide enough to cover the screen.
  // Repeating it 3-4 times is usually enough for large desktop screens.
  // This reduces the DOM size compared to your previous 10x loop.
  const logosBlock = [...brands, ...brands, ...brands, ...brands];

  return (
    <section
      id="scroll-text"
      className="h-screen w-full bg-black relative z-[2] max-w-[1560px] flex flex-col max-md:h-[1000px]"
      style={{
        backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <div className="relative z-10 flex-1 w-full text-white p-10 max-md:p-4 flex justify-center items-center leading-[1] text-center georgia-pro-light text-[40px] min-[1000px]:text-[55px] min-[1300px]:text-[67px]">
        <TextReveal />
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full flex items-center justify-center gap-[50px] max-w-[1400px] mx-auto text-white pb-[5rem] px-10 max-md:flex-col">
        <div className="flex items-center gap-3 opacity-70 select-none shrink-0">
          <LeftWreath className="max-md:w-[25px]" />
          <div className="text-center poppins leading-[1.3] text-[14px] max-md:text-[12px]">
            <p className="mb-1">Trusted by 60+</p>
            <p>Organizations</p>
          </div>
          <RightWreath className="max-md:w-[25px]" />
        </div>

        {/* MARQUEE WRAPPER */}
        <div className="flex-1 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            // Added will-change-transform for smoother mobile performance
            className="flex items-center w-max will-change-transform"
          >
            {/* THE FIX: Render TWO identical blocks.
               We animate the parent to -50%. 
               At -50%, Block 1 is gone, and Block 2 is exactly where Block 1 started.
               The reset happens instantly and invisibly.
            */}
            
            {/* Block 1 */}
            <div className="flex items-center gap-12 pr-12">
              {logosBlock.map((brand, index) => (
                <span
                  key={`b1-${index}`} // Unique keys
                  className={`
                    ${brand.className} 
                    text-[30px] 
                    flex-shrink-0 
                    opacity-60 
                    hover:grayscale-0 
                    hover:opacity-100 
                    transition-all 
                    duration-500
                    cursor-pointer
                  `}
                >
                  {brand.name}
                </span>
              ))}
            </div>

            {/* Block 2 (Identical Copy) */}
            <div className="flex items-center gap-12 pr-12">
              {logosBlock.map((brand, index) => (
                <span
                  key={`b2-${index}`} // Unique keys
                  className={`
                    ${brand.className} 
                    text-[30px] 
                    flex-shrink-0 
                    opacity-60 
                    hover:grayscale-0 
                    hover:opacity-100 
                    transition-all 
                    duration-500
                    cursor-pointer
                  `}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}