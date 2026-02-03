import dayjs from "dayjs";
import { useState, useEffect } from "react";
import heroImage from "../assets/images/hero-image.avif";

export default function Hero() {
  // Display Time
  function useCurrentTime() {
    // 1. Initialize state as an object so we can split the data
    const [timeData, setTimeData] = useState({
      time: dayjs().format("h:mm"),
      period: dayjs().format("A"),
    });

    useEffect(() => {
      const intervalId = setInterval(() => {
        // 2. Update both parts separately
        setTimeData({
          time: dayjs().format("h:mm"),
          period: dayjs().format("A"),
        });
      }, 1000); // Check every second (cleaner for clock sync) or keep 60000
      return () => clearInterval(intervalId);
    }, []);

    return timeData;
  }

  // 3. Destructure the values here
  const { time, period } = useCurrentTime();

  // Display Day
  function useCurrentDay() {
    const [day, setDay] = useState(dayjs().format("ddd"));
    useEffect(() => {
      const intervalId = setInterval(
        () => setDay(dayjs().format("ddd")),
        60000,
      );
      return () => clearInterval(intervalId);
    }, []);
    return day;
  }
  const day = useCurrentDay();

  return (
    <section
      id="hero"
      className="p-[32px] sticky pointer-events-none flex flex-col flex-none items-center gap-[32px] z-[2] w-full h-screen max-h-[1000px] top-0 overflow-hidden
      max-xl:p-[16px] max-lg:max-h-[620px]"
    >
      <div
        id="rounded-container"
        className="z-[1] relative overflow-hidden max-w-[1536px] rounded-[16px] bg-[radial-gradient(55%_94%_at_48.7%_6.5%,_#fa6800_0%,_#c00_48.1595%,_#0f0f0f_100%)] flex flex-col flex-[1_0_0] items-center w-full h-full p-0 pointer-events-auto"
      >
        <div
          id="waves"
          className="absolute inset-[-172px_0_0] z-[1] pointer-events-none flex-none overflow-visible opacity-50 [mask:linear-gradient(#000_47%,_#0000_156%)] [-webkit-mask:linear-gradient(#000_47%,_#0000_156%)]"
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
          className="flex [text-shadow:0_0_12px_#ffffffb5] max-md:text-white pointer-events-none text-[#ffffffb5] justify-center text-center items-center flex-col h-full gap-[8px] w-full opacity-90 z-[2] relative"
        >
          <p className="georgia-pro-light xl:text-[50px] leading-[1] tracking-[-0.02em]
          md:text-[40px] min-[300px]:text-[30px]">
            {" "}
            Imagine a space
            <br />
            between vision &amp; impact
          </p>
          <p className="poppins text-[20px] max-md:text-[16px]">That's where we thrive.</p>
        </div>
        <div
          id="time"
          className="absolute bottom-[24px] z-[1] left-[24px] poppins-light text-[14px] max-[500px]:text-[12px] text-[#ffffffb5] opacity-60"
        >
          {/* Render time, then render period in a conditional span */}
          {time} <span className="max-[500px]:hidden">{period}</span>
        </div>
        <div
          id="scroll-to-explore"
          className="absolute bottom-[24px] z-[1] poppins-light text-[14px] bg-clip-text text-transparent 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.5)_20%,#fff_50%,rgba(255,255,255,0.5)_80%)] 
          bg-[length:200%_auto] 
          animate-shimmer"
        >
          Scroll to Explore
        </div>
        <div
          id="day"
          className="absolute bottom-[24px] right-[24px] z-[1] poppins-light text-[14px] max-[500px]:text-[12px] text-[#ffffffb5] opacity-60"
        >
          {day}
        </div>
      </div>
    </section>
  );
}
