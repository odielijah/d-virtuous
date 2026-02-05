import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { journeyData } from "../data/journeyData";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Journey() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Selectors
      const stickyHeaderH1 = "#sticky-header h1";
      const cardContainer = "#card-container";
      const cards = ["#card-1", "#card-2", "#card-3"];
      const outerCards = ["#card-1", "#card-3"];

      // Local variables for animation state
      let isGapAnimationCompleted = false;
      let isFlipAnimationCompleted = false;

      const mm = gsap.matchMedia();

      // --- 1. DESKTOP ANIMATION (> 1000px) ---
      mm.add("(min-width: 1000px)", () => {
        // Desktop Header Animation (Linked to the pinned scroll)
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress <= 0.5) {
              const headerProgress = gsap.utils.mapRange(
                0,
                0.5,
                0,
                1,
                progress,
              );
              gsap.set(stickyHeaderH1, {
                y: gsap.utils.mapRange(0, 1, 40, 0, headerProgress),
                opacity: gsap.utils.mapRange(0, 1, 0, 1, headerProgress),
              });
            } else {
              gsap.set(stickyHeaderH1, { y: 0, opacity: 1 });
            }
          },
        });

        // Desktop Card Logic (Pinning, Spreading, Flipping)
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Phase 2: Container Width
            if (progress <= 0.25) {
              const widthPercentage = gsap.utils.mapRange(
                0,
                0.25,
                75,
                70,
                progress,
              );
              gsap.set(cardContainer, { width: `${widthPercentage}%` });
            } else {
              gsap.set(cardContainer, { width: "70%" });
            }

            // Phase 3: Gap & Radius
            if (progress >= 0.35 && !isGapAnimationCompleted) {
              gsap.to(cardContainer, { gap: "30px", duration: 0.5 });
              gsap.to(cards, { borderRadius: "15px", duration: 0.5 });
              isGapAnimationCompleted = true;
            } else if (progress < 0.35 && isGapAnimationCompleted) {
              gsap.to(cardContainer, { gap: "0px", duration: 0.5 });
              gsap.to("#card-1", {
                borderRadius: "15px 0 0 15px",
                duration: 0.5,
              });
              gsap.to("#card-2", { borderRadius: "0px", duration: 0.5 });
              gsap.to("#card-3", {
                borderRadius: "0 15px 15px 0",
                duration: 0.5,
              });
              isGapAnimationCompleted = false;
            }

            // Phase 4: Flip
            if (progress >= 0.7 && !isFlipAnimationCompleted) {
              gsap.to(cards, {
                rotationY: 180,
                duration: 0.75,
                ease: "power3.inOut",
                stagger: 0.1,
              });
              gsap.to(outerCards, {
                y: 60,
                rotationZ: (i) => [-10, 10][i],
                duration: 0.75,
                ease: "power3.inOut",
              });
              isFlipAnimationCompleted = true;
            } else if (progress < 0.7 && isFlipAnimationCompleted) {
              gsap.to(cards, {
                rotationY: 0,
                duration: 0.75,
                ease: "power3.inOut",
                stagger: -0.1,
              });
              gsap.to(outerCards, {
                y: 0,
                rotationZ: 0,
                duration: 0.75,
                ease: "power3.inOut",
              });
              isFlipAnimationCompleted = false;
            }
          },
        });
      });

      // --- 2. MOBILE ANIMATION (< 1000px) ---
      mm.add("(max-width: 999px)", () => {
        // Reset card container width for mobile to ensure it looks right
        gsap.set(cardContainer, { width: "100%", gap: "2rem" });

        // Simple, fast header reveal
        gsap.to(stickyHeaderH1, {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stickyHeaderH1, // Trigger on the H1 itself, not the whole section
            start: "top 85%", // Starts when H1 is near the bottom of screen
            end: "top 50%", // Finishes when H1 is in middle of screen
            scrub: 1, // Smooths it out (remove this line if you want it to just play once)
          },
        });
      });
    },
    { scope: sectionRef },
  );

  const getBorderRadiusClass = (index, total) => {
    if (index === 0) return "rounded-l-[20px]";
    if (index === total - 1) return "rounded-r-[20px]";
    return "";
  };

  return (
    <section
      id="journey"
      className="min-h-screen pb-[100px] w-full bg-black relative z-[2] max-w-[1560px]"
      style={{
        backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <div
        ref={sectionRef}
        id="card-image-split"
        className="flex flex-col justify-center pointer-events-auto min-h-screen items-center text-white max-[1000px]:flex-col"
      >
        <div
          id="sticky-header"
          className="text-white translate-y-[-50%] max-[1000px]:relative max-[1000px]:top-0 max-[1000px]:left-0 max-[1000px]:transform-none max-[1000px]:mb-[1rem] max-[1000px]:mt-[8rem]"
        >
          <h1 className="relative georgia-pro-light text-[45px] text-center leading-[1] [text-shadow:0_0_10px_rgba(255,255,255,0.8)] tracking-[-0.02em] translate-y-[40px] opacity-0 [will-change:transform,opacity] max-[1000px]:opacity-10 max-[1000px]:text-[35px] max-[1000px]:px-[1rem]">
            Where are you <span className="italic">in</span> your journey?
          </h1>
        </div>

        <div
          id="card-container"
          className="relative w-[75%] flex [will-change:width, transform] translate-y-[40px] [perspective:1000px] max-[1000px]:p-[1rem_2rem] max-[1000px]:w-full max-[1000px]:gap-[2rem] max-[750px]:flex-col"
        >
          {journeyData.map((card, index) => (
            <div
              key={card.id}
              id={card.id}
              className={`relative flex-1 aspect-[5/7] [transform-style:preserve-3d] origin-top 
                ${getBorderRadiusClass(index, journeyData.length)}
                max-[1000px]:w-full max-[1000px]:max-w-[400px] max-[1000px]:m-[0_auto] max-[1000px]:rounded-[20px]`}
            >
              {/* Front: Image */}
              <div className="absolute w-full h-full [backface-visibility:hidden] [border-radius:inherit] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Back: Details */}
              <div
                className={`absolute shadow-[0_30px_80px_7px_rgba(0,0,0,0.35)] poppins w-full h-full [backface-visibility:hidden] [border-radius:inherit] overflow-hidden flex flex-col justify-between items-start [transform:rotateY(180deg)] p-7 xl:p-9 max-[1000px]:transform-none
                ${card.bgColor} ${card.textColor}`}
              >
                <span className="opacity-40 text-sm font-medium">
                  {card.step}
                </span>

                <h2 className="text-[22px] md:text-[26px] xl:text-[30px] leading-[1.1] max-w-[200px] my-auto">
                  {card.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-[11px] xl:text-[12px] w-full leading-[1.2]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
