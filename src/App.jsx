import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import dayjs from "dayjs";
import "./App.css";
import heroImage from "./assets/images/hero-image.avif";

function App() {
  const lenis = useLenis(({ scroll }) => {});
  // Display Time
  function useCurrentTime() {
    const [time, setTime] = useState(dayjs().format("h:mm A"));

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(dayjs().format("h:mm A"));
      }, 60000);

      return () => {
        clearInterval(intervalId);
      };
    }, []);
    return time;
  }
  const time = useCurrentTime();

  // Display Day
  function useCurrentDay() {
    const [day, setDay] = useState(dayjs().format("ddd"));

    useEffect(() => {
      const intervalId = setInterval(() => {
        setDay(dayjs().format("ddd"));
      }, 60000);

      return () => {
        clearInterval(intervalId);
      };
    }, []);
    return day;
  }

  const day = useCurrentDay();

  return (
    <ReactLenis root>
      <>
        <header>
          <div
            id="header-container"
            className="fixed top-[48px] px-[64px] left-[50%] translate-x-[-50%] w-full max-w-[1400px] z-[10] text-[#eae7e0] poppins-light"
          >
            <div id="nav-menu">
              <div
                id="nav-content"
                className="flex justify-between items-center w-full backdrop-blur-[10px] bg-[rgba(38,3,3,0.3)] rounded-[14px] shadow-[inset_0_1px_1px_1px_rgba(255,255,255,0.1)] transform-none origin-center [will-change:auto] p-[10px_10px_10px_24px]"
              >
                <div id="logo">
                  <p className="opacity-80 text-[24px] georgia-pro-italic">
                    <a href="#">D'virtuous</a>
                  </p>
                </div>
                <div>
                  <div
                    id="nav-menu-items"
                    className="flex gap-[40px] text-[14px] tracking-[0.02em] opacity-80 [text-shadow:0_0_10px_rgba(255,255,255,0.4)]"
                  >
                    <div>Services</div>
                    <div>Featured Work</div>
                    <div>Reviews</div>
                  </div>
                </div>
                <div className="text-[14px] poppins tracking-[0.02em] text-black bg-[#eae7e0] p-[5px_20px] rounded-[8px] duration-300 ease-in-out">
                  <a href="#">Donate</a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="z-[4] flex flex-col place-content-center gap-0 p-0 overflow-visible pointer-events-none relative flex-none items-center w-full h-min">
          <section
            id="hero"
            className="p-[32px] flex flex-col flex-none items-center gap-[32px] z-[2] sticky w-full h-[100vh] max-h-full top-0 overflow-hidden"
          >
            <div
              id="rounded-container"
              className="z-[1] relative overflow-hidden max-w-[1536px] rounded-[16px] bg-[radial-gradient(55%_94%_at_48.7%_6.5%,_#fa6800_0%,_#c00_48.1595%,_#0f0f0f_100%)] flex flex-col flex-[1_0_0] items-center w-full h-full p-0"
            >
              <div
                id="waves"
                className="absolute inset-[-172px_0_0] z-[1] flex-none overflow-visible opacity-50 [mask:linear-gradient(#000_47%,_#0000_156%)] [-webkit-mask:linear-gradient(#000_47%,_#0000_156%)]"
              >
                <div id="hero-img-container" className="absolute inset-0">
                  <img
                    src={heroImage}
                    alt=""
                    className="block w-full h-full object-cover object-center rounded-inherit"
                  />
                </div>
              </div>
              <div
                id="hero-text-content"
                className="flex [text-shadow:0_0_12px_#ffffffb5] text-[#ffffffb5] justify-center text-center items-center flex-col h-full gap-[8px] w-full opacity-90 z-[2] relative"
              >
                <p className="georgia-pro-light text-[50px] leading-[1] tracking-[-0.02em]">
                  {" "}
                  Imagine a space
                  <br />
                  between vision &amp; impact
                </p>
                <p className="poppins text-[20px]">That's where we thrive.</p>
              </div>
              <div
                id="time"
                className="absolute bottom-[24px] z-[1] left-[24px] poppins-light text-[14px] text-[#ffffffb5] opacity-60"
              >
                {time}
              </div>
              <div
                id="scroll-to-explore"
                className="absolute bottom-[24px] z-[1] poppins-light text-[14px] text-[#ffffffb5] opacity-60"
              >
                Scroll to Explore
              </div>
              <div
                id="day"
                className="absolute bottom-[24px] right-[24px] z-[1] poppins-light text-[14px] text-[#ffffffb5] opacity-60"
              >
                {day}
              </div>
            </div>
          </section>

          <section
            className="h-screen w-full bg-black relative z-[2] max-w-[1560px]"
            style={{
              // 1. Create a dot that is 1px wide, color #333 (dark grey), then transparent
              backgroundImage: "radial-gradient(#333 1px, transparent 1px)",

              // 2. Space them 20px apart (adjust this to make the grid tighter/looser)
              backgroundSize: "30px 30px",
            }}
          >
            <div className="relative z-10 h-full text-white p-1 0 flex justify-center items-center text-[65px] leading-[1] text-center georgia-pro-light">
              <p className="max-w-[1350px]">
                We craft brand identities, narratives, and digital experiences
                that keep up with your ambition. So you can focus on building
                what matters, while we shape how the world sees it.
              </p>
            </div>
          </section>
        </main>
      </>
    </ReactLenis>
  );
}

export default App;
