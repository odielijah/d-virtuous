import { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { LeftWreath, RightWreath } from "../assets/icons/Wreaths";
import { brands } from "../data/brandLogos";

import { bibleVerses } from "../data/bibleVerses";

// Animations
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const TextReveal = ({ verse }) => {
  const container = useRef(null);
  const words = verse.text.split(" ");

  useGSAP(
    () => {
      // Animate the main verse chars
      gsap.fromTo(
        ".char",
        { opacity: 0.2, color: "#444" },
        {
          opacity: 1,
          color: "white",
          duration: 1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
          },
        },
      );

      // Animate the reference (the source) slightly after
      gsap.fromTo(
        ".verse-ref",
        { opacity: 0, y: 10 },
        {
          opacity: 0.5,
          y: 0,
          scrollTrigger: {
            trigger: container.current,
            start: "top 60%",
            end: "bottom 30%",
            scrub: true,
          },
        },
      );
    },
    { scope: container, dependencies: [verse] },
  );

  return (
    <div ref={container} className="max-w-[1150px] mx-auto text-center">
      <div className="leading-[1.1] tracking-tight">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block whitespace-nowrap"
            style={{ marginRight: "0.25em" }}
          >
            {word.split("").map((char, j) => (
              <span key={j} className="char inline-block">
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>

      {/* Scriptural Reference */}
      <motion.div
        variants={{
          hidden: { y: 40 },
          visible: {
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className="verse-ref mt-6 text-[18px] min-[1000px]:text-[24px] uppercase tracking-[0.2em] opacity-50 italic"
      >
        — {verse.ref}
      </motion.div>
    </div>
  );
};

export default function ScrollText() {
  const selectedVerse = useMemo(() => {
    return bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
  }, []);

  const logosBlock = [...brands, ...brands];

  return (
    <section
      id="scroll-text"
      className="h-screen w-full bg-black relative z-[2] max-w-[1560px] flex flex-col max-md:h-[800px]"
      style={{
        backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 flex-1 w-full text-white p-10 max-md:p-4 flex justify-center items-center text-center georgia-pro-light text-[35px] min-[1000px]:text-[50px] min-[1300px]:text-[60px]"
      >
        <motion.div variants={itemVariants}>
          <TextReveal verse={selectedVerse} />
        </motion.div>
      </motion.div>

      {/* Marquee Section */}
      <div className="w-full flex items-center justify-center gap-[50px] max-w-[1400px] mx-auto text-white pb-[5rem] px-10 max-md:flex-col">
        <div className="flex items-center gap-3 opacity-70 select-none shrink-0">
          <LeftWreath className="max-md:w-[25px]" />
          <div className="text-center poppins leading-[1.3] text-[14px] max-md:text-[12px]">
            <p className="mb-1">Trusted by 60+</p>
            <p>Organizations</p>
          </div>
          <RightWreath className="max-md:w-[25px]" />
        </div>

        <div className="flex-1 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex items-center w-max animate-scroll hover:[animation-play-state:paused]">
            <div className="flex items-center">
              {logosBlock.map((brand, index) => (
                <span
                  key={`b1-${index}`}
                  className={`${brand.className} mr-16 text-[30px] flex-shrink-0 opacity-60 whitespace-nowrap hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer`}
                >
                  {brand.name}
                </span>
              ))}
            </div>
            <div className="flex items-center">
              {logosBlock.map((brand, index) => (
                <span
                  key={`b2-${index}`}
                  className={`${brand.className} mr-16 text-[30px] flex-shrink-0 opacity-60 whitespace-nowrap hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer`}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
